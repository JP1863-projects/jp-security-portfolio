"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const html=fs.readFileSync(path.join(__dirname,"../identity-security-quiz.html"),"utf8");
const script=html.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];
assert.ok(script,"Quiz script is present");
const data=script.match(/const CATS=(\{[\s\S]*?\});\s*const D=(\[[\s\S]*?\]);\s*const \$=/);
assert.ok(data,"Quiz data is in standalone HTML");
const CATS=JSON.parse(data[1]),D=JSON.parse(data[2]);
test("Quiz has exactly 50 valid original questions with requested topic counts",()=>{
 assert.equal(D.length,50);
 const expected={P:9,M:9,E:9,Z:9,S:7,C:7};
 for(const [code,count] of Object.entries(expected)){
  assert.ok(CATS[code]?.name);
  assert.equal(D.filter(x=>x[0]===code).length,count,code);
 }
 assert.equal(new Set(D.map(x=>x[1])).size,50);
 for(const q of D){
  assert.equal(q.length,7,q[1]);
  assert.equal(new Set(q.slice(2,6)).size,4,q[1]);
  assert.ok(q.every(x=>typeof x==="string"&&x.trim()),q[1]);
  assert.ok(q[6].length>35,q[1]);
 }
});
test("Quiz remains self-contained, accessible and without browser storage APIs",()=>{
 assert.doesNotThrow(()=>new Function(script));
 assert.doesNotMatch(html,/\b(localStorage|sessionStorage|indexedDB|document\.cookie)\b/);
 assert.doesNotMatch(script,/\bfetch\s*\(/);
 assert.match(html,/prefers-color-scheme/);
 assert.match(html,/prefers-reduced-motion/);
 assert.match(html,/aria-live/);
 assert.match(html,/:focus-visible/);
 assert.match(html,/id="theme"/);
 assert.match(html,/id="review-list"/);
 assert.match(html,/id="lengths"/);
});
function harness(){
 class Element {
  constructor(tag="div",id=""){
   this.tagName=tag.toUpperCase();this.id=id;this.children=[];this.listeners={};this.attributes={};this.textContent="";this.dataset={};this.style={};this.disabled=false;
   const initial=id==="quiz"||id==="results"||id==="feedback"||id==="next";
   this.classes=new Set(initial?["hidden"]:[]);
   this.classList={
    add:(x)=>this.classes.add(x),remove:(x)=>this.classes.delete(x),
    contains:(x)=>this.classes.has(x),
    toggle:(x,on)=>{if(on===undefined)on=!this.classes.has(x);if(on)this.classes.add(x);else this.classes.delete(x);return on;}
   };
  }
  appendChild(child){this.children.push(child);return child;}
  append(...children){this.children.push(...children);}
  replaceChildren(...children){this.children=[...children];}
  setAttribute(k,v){this.attributes[k]=String(v);}
  addEventListener(k,cb){this.listeners[k]=cb;}
  querySelectorAll(selector){
   let a=[];
   for(const child of this.children){
    if(selector==="button"&&child.tagName==="BUTTON")a.push(child);
    if(typeof child.querySelectorAll==="function")a.push(...child.querySelectorAll(selector));
   }
   return a;
  }
  querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
  focus(){}
  click(){this.listeners.click?.({type:"click",target:this,preventDefault(){}});}
 }
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 const nodes=new Map(ids.map(id=>[id,new Element("div",id)]));
 const document={
  getElementById:id=>nodes.get(id)||null,
  createElement:tag=>new Element(tag),
  addEventListener(){},
  documentElement:{dataset:{}}
 };
 const window={scrollTo(){}};
 const matchMedia=()=>({matches:false});
 const program=new Function("document","window","matchMedia",script+"\nreturn {state,CATS,D};");
 const internals=program(document,window,matchMedia);
 return {get:id=>nodes.get(id),internals};
}
test("10-question round supports option selection, explanations, results and missed review",()=>{
 const h=harness(),{state}=h.internals;
 assert.equal(h.get("topics").children.length,6);
 assert.equal(h.get("overview").children.length,6);
 assert.equal(h.get("lengths").children.length,3);
 assert.equal(h.get("available").textContent,"50 questions available");
 h.get("start").click();
 assert.equal(state.round.length,10);
 assert.equal(h.get("quiz").classList.contains("hidden"),false);
 for(let i=0;i<10;i++){
  const q=state.round[i],opt=h.get("options").children,correctIndex=q.options.indexOf(q.q[2]);
  assert.equal(opt.length,4);
  const chosen=i===0?(correctIndex+1)%4:correctIndex;
  opt[chosen].click();
  assert.equal(h.get("feedback").classList.contains("hidden"),false);
  assert.equal(state.answers.length,i+1);
  h.get("next").click();
 }
 assert.equal(h.get("results").classList.contains("hidden"),false);
 assert.equal(state.answers.filter(x=>!x.correct).length,1);
 assert.equal(h.get("review-list").children.length,1);
 assert.ok(h.get("final-score").textContent.includes("9/10"));
});
test("Topic filter and round length 50 correctly limit the session to available questions",()=>{
 const h=harness(),{state}=h.internals;
 const topics=h.get("topics").children;
 for(const b of topics){if(b.dataset.category!=="P")b.click();}
 assert.equal(state.active.size,1);
 assert.ok(state.active.has("P"));
 assert.equal(h.get("available").textContent,"9 questions available");
 h.get("lengths").children[2].click();
 h.get("start").click();
 assert.equal(state.round.length,9);
 assert.ok(state.round.every(x=>x.q[0]==="P"));
});
