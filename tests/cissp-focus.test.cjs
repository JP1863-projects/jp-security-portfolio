"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.join(__dirname,".."),w={};
const load=f=>new Function("window",fs.readFileSync(path.join(root,f),"utf8"))(w);
load("cissp-question-bank.js");
for(let i=1;i<=8;i++)load("cissp-focus-domain-"+i+".js");
load("cissp-focus-generator.js");
const qs=w.CISSP_FOCUS_QUESTIONS;
test("500 unique focus question IDs across 100 distinct cases",()=>{
 assert.equal(qs.length,500);
 assert.equal(new Set(qs.map(q=>q.id)).size,500);
 assert.equal(new Set(qs.map(q=>q.caseFamily)).size,100);
 assert.equal(new Set(qs.map(q=>q.scenario)).size,500);
 for(let d=0;d<8;d++){
  const want=d<4?65:60;
  assert.equal(qs.filter(q=>q.domain===d).length,want,"domain "+d);
  assert.equal(new Set(qs.filter(q=>q.domain===d).map(q=>q.caseFamily)).size,d<4?13:12);
 }
});
test("correct answers are balanced and every question has exactly four valid alternatives",()=>{
 for(const letter of "ABCD")assert.equal(qs.filter(q=>q.answer===letter).length,125);
 for(const q of qs){
  assert.equal(q.options.length,4,q.id);
  assert.equal(new Set(q.options.map(o=>o.id)).size,4,q.id);
  assert.equal(new Set(q.options.map(o=>o.text)).size,4,q.id);
  assert.equal(q.options.filter(o=>o.id===q.answer).length,1,q.id);
  assert.equal(Object.keys(q.wrongRationales).length,3,q.id);
  assert.equal(q.engineerOptionId,null,q.id);
  assert.ok(q.scenario.includes("Observed issue:"),q.id);
  assert.ok(q.whyCorrectAnswerWins.length>50,q.id);
 }
});
test("each case exercises five distinct security needs with matching controls",()=>{
 for(let domain=0;domain<8;domain++)for(let i=0;i<w.CISSP_FOCUS_SEEDS[domain].length;i++){
  const family="FOCUS-"+(domain+1)+"-"+(i+1);
  const items=qs.filter(q=>q.caseFamily===family);
  assert.equal(items.length,5);
  const correct=items.map(q=>q.options.find(o=>o.id===q.answer).text);
  assert.equal(new Set(correct).size,5);
  const cases=w.CISSP_FOCUS_SEEDS[domain][i];
  for(let j=0;j<5;j++){
   assert.equal(correct[j],cases[j+1][1]);
   assert.ok(items[j].scenario.includes(cases[j+1][0]));
  }
 }
});
