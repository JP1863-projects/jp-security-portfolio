"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.join(__dirname,"..");
const text=name=>fs.readFileSync(path.join(root,name),"utf8");
const window={scrollTo(){}};
new Function("window",text("cissp-question-bank.js"))(window);
new Function("window",text("cissp-learning-content.js"))(window);
new Function("window",text("cissp-expanded-domains-1-2.js"))(window);
new Function("window",text("cissp-expanded-domains-3-4.js"))(window);
new Function("window",text("cissp-expanded-domains-5-6.js"))(window);
new Function("window",text("cissp-expanded-domains-7-8.js"))(window);
const bank=window.CISSP_BANK,learn=window.CISSP_LEARNING;
const all=[...bank.questions,...learn.extras,...window.CISSP_MORE];
test("728 question variants with correct answer keys",()=>{
  assert.equal(all.length,728);
  assert.equal(new Set(all.map(q=>q.id)).size,728);
  assert.equal(learn.extras.length,48);
  assert.equal(new Set(all.map(q=>learn.family(q.id))).size,344);
  for(const q of all){
    assert.equal(q.options.length,4,q.id);
    assert.equal(q.options.filter(x=>x.id===q.answer).length,1,q.id);
    assert.equal(new Set(q.options.map(x=>x.text)).size,4,q.id);
    if(q.engineerOptionId)assert.notEqual(q.answer,q.engineerOptionId,q.id);
  }
});
test("160 new distinct questions span each domain equally with balanced answer keys",()=>{
 const newQuestions=window.CISSP_MORE;
 assert.equal(newQuestions.length,160);
 for(let domain=0;domain<8;domain++)assert.equal(newQuestions.filter(q=>q.domain===domain).length,20);
 assert.equal(new Set(newQuestions.map(q=>q.scenario)).size,160);
 assert.equal(new Set(newQuestions.map(q=>q.id)).size,160);
 for(const letter of "ABCD")assert.equal(newQuestions.filter(q=>q.answer===letter).length,40);
 for(const q of newQuestions)assert.notEqual(q.answer,q.engineerOptionId,q.id);
});
test("advanced answer positions are balanced",()=>{
 const counts="ABCD".split("").map(x=>learn.extras.filter(q=>q.id.startsWith("ADV-")&&q.answer===x).length);
 assert.equal(counts.join(","),"8,8,8,8");
});
test("eight domain lessons and eleven bias guides provide actionable context",()=>{
 assert.equal(learn.domains.length,8);
 assert.equal(learn.biases.length,11);
 for(const row of learn.domains)assert.ok(row.length===5&&row.every(v=>v.length>=10));
 for(const row of learn.biases)assert.ok(row.length===5&&row.every(v=>v.length>=9));
});
test("authorized technical action can be right after governance is complete",()=>{
 const technical=learn.extras.filter(q=>q.id.startsWith("ACT-"));
 assert.equal(technical.length,16);
 assert.equal(technical.filter(q=>q.engineerOptionId===null).length,16);
 for(let d=0;d<8;d++)assert.equal(technical.filter(q=>q.domain===d).length,2);
});
test("review schedule spaces correct retrieval, resets misses, and identifies due",()=>{
 const at=Date.UTC(2026,10,1);
 const wrong=learn.schedule(null,false,"high",at);
 assert.equal(wrong.dueAt,at+15*60000);
 assert.equal(wrong.repetitions,0);
 const first=learn.schedule(wrong,true,"medium",at+16*60000);
 assert.equal(first.intervalHours,24);
 const next=learn.schedule(first,true,"medium",at+24*3600000);
 assert.equal(next.intervalHours,72);
 const strong=learn.schedule(null,true,"high",at);
 assert.equal(strong.intervalHours,48);
 assert.equal(learn.due({x:wrong,y:first},at+20*60000).map(x=>x.id).join(","),"x");
 assert.equal(learn.pending({x:wrong,y:first},at+20*60000).map(x=>x.id).join(","),"y");
 assert.equal(learn.family("D1-2-3"),"D1-2");
 assert.equal(learn.family("ADV-1-2"),"ADV-1-2");
 assert.equal(learn.family("LEAST-3"),"LEAST-3");
});
function harness(){
 let now=Date.UTC(2026,10,2);
 class Clock extends Date {constructor(...a){super(...(a.length?a:[now]))}static now(){return now}}
 const store={},els=new Map(),views=["home","lessons","quiz","insights","review"];
 const el=id=>{if(!els.has(id))els.set(id,{id,dataset:{},innerHTML:"",textContent:"",hidden:false,disabled:false,setAttribute(){},addEventListener(ev,fn){this[ev]=fn;}});return els.get(id)};
 views.forEach(v=>el("tab-"+v).dataset.view=v);
 let choices=[],confidence=[],domains=[];
 const modes=["adaptive","quick","25","50","100","125","weak","5","review"].map(mode=>({dataset:{mode},addEventListener(ev,fn){this[ev]=fn;}}));
 const document={getElementById:el,querySelectorAll(s){
  if(s===".view")return views.map(el);
  if(s===".tab")return views.map(v=>el("tab-"+v));
  if(s==="[data-mode]")return modes;
  if(s==="#quiz-pane [data-option]")return choices=Array.from(el("quiz-pane").innerHTML.matchAll(/data-option="([A-D])"/g),m=>({dataset:{option:m[1]}}));
  if(s==="#quiz-pane [data-confidence]")return confidence=Array.from(el("quiz-pane").innerHTML.matchAll(/data-confidence="(low|medium|high)"/g),m=>({dataset:{confidence:m[1]}}));
  if(s==="[data-study-domain]")return domains=Array.from(el("domain-lessons").innerHTML.matchAll(/data-study-domain="([0-7])"/g),m=>({dataset:{studyDomain:m[1]}}));
  return [];
 }};
 const storage={getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v};
 const script=text("cissp-training.html").match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];
 assert.ok(script,"Inline app script");
 new Function("window","document","localStorage","Date","setInterval","confirm","console",script)(window,document,storage,Clock,()=>{},()=>true,{warn(){}});
 const state=()=>JSON.parse(store.jp_cissp_bias_engine_v1);
 const mode=name=>modes.find(x=>x.dataset.mode===name).click();
 function answer(correct=true,level="medium"){
  const sess=state().current,q=all.find(x=>x.id===sess.currentId);
  assert.ok(q);
  const option=choices.find(x=>x.dataset.option===(correct?q.answer:q.options.find(o=>o.id!==q.answer).id));
  assert.equal(typeof option?.onclick,"function");
  option.onclick();
  if(confidence.length){const b=confidence.find(x=>x.dataset.confidence===level);b?.onclick();}
  el("answer-btn").onclick();
  return q;
 }
 return {el,mode,answer,state,window,advance:m=>now+=m,domainButtons:()=>domains};
}
test("UI handles mistake feedback, due review, lessons, and domain-targeted drills",()=>{
 const h=harness();h.mode("quick");const q=h.answer(false,"high");
 assert.equal(h.state().history.length,1);
 assert.match(h.el("quiz-pane").innerHTML,/Coach/);
 assert.ok(h.state().cards[learn.family(q.id)]);
 h.advance(16*60000);
 h.el("tab-review").click();
 assert.match(h.el("due-summary").innerHTML,/Due now/);
 assert.match(h.el("due-cards").innerHTML,/Your next review/);
 h.el("tab-lessons").click();
 assert.equal(h.domainButtons().length,8);
 h.domainButtons()[2].onclick();
 assert.equal(all.find(x=>x.id===h.state().current.currentId).domain,2);
});
test("125-question mock balances blueprint with unique scenario families and stores review cards",()=>{
 const h=harness();h.mode("125");
 const byDomain=Array(8).fill(0),families=new Set();
 for(let i=0;i<125;i++){
  const q=h.answer(true);
  byDomain[q.domain]++;
  assert.ok(!families.has(learn.family(q.id)),q.id);
  families.add(learn.family(q.id));
 }
 assert.ok(h.state().current.finished);
 assert.equal(h.state().history.length,125);
 assert.equal(Object.keys(h.state().cards).length,125);
 assert.equal(byDomain.join(","),"20,13,16,16,16,15,16,13");
});
