"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const w={};const root=path.join(__dirname,"..");
function load(name){new Function("window",fs.readFileSync(path.join(root,name),"utf8"))(w);}
load("cissp-question-bank.js");
for(let d=1;d<=8;d++)load("cissp-phases-domain-"+d+".js");
load("cissp-phases-generator.js");
const questions=w.CISSP_PHASE_QUESTIONS;
const cases=w.CISSP_PHASE_SEEDS;
test("800 new questions, five stages in 160 cases, 100 per domain",()=>{
 assert.equal(questions.length,800);
 assert.equal(cases.length,8);
 assert.equal(new Set(questions.map(x=>x.id)).size,800);
 assert.equal(new Set(questions.map(x=>x.scenario+"::"+x.prompt)).size,800);
 assert.equal(new Set(questions.map(x=>x.caseFamily)).size,160);
 for(let domain=0;domain<8;domain++){
   const domainQuestions=questions.filter(q=>q.domain===domain);
   assert.equal(domainQuestions.length,100,"domain "+domain);
   assert.equal(cases[domain].length,20);
   for(let i=1;i<=20;i++){
     const family="SEQ-"+(domain+1)+"-"+i;
     const stages=domainQuestions.filter(q=>q.caseFamily===family).map(q=>q.decisionStage);
     assert.deepEqual(stages,[1,2,3,4,5],family);
   }
 }
});
test("each item has exactly one unique answer and four plausible stage actions",()=>{
 for(const q of questions){
  assert.equal(q.options.length,4,q.id);
  assert.equal(new Set(q.options.map(x=>x.text)).size,4,q.id);
  assert.equal(q.options.filter(x=>x.id===q.answer).length,1,q.id);
  assert.ok(q.options.every(x=>x.text.length>20),q.id);
  assert.ok(q.scenario.length>90,q.id);
  assert.ok(q.principle.length>35,q.id);
  assert.ok(q.explanation===undefined,q.id);
  assert.ok(q.what_isc2_is_testing.includes("Recognize"),q.id);
  assert.ok(Object.keys(q.wrongRationales).length===3,q.id);
  if(q.engineerOptionId)assert.notEqual(q.engineerOptionId,q.answer,q.id);
 }
});
test("answer keys balanced 200 per letter and question types covered",()=>{
 for(const letter of "ABCD")assert.equal(questions.filter(q=>q.answer===letter).length,200);
 const types=new Set(questions.map(x=>x.type));
 assert.deepEqual([...types].sort(),["BEST","FIRST","MOST","NEXT","PRIMARY"]);
});
test("each decision stage uses unique correct actions from its original case",()=>{
 for(let domain=0;domain<8;domain++)for(let seed=0;seed<20;seed++){
  const relevant=questions.filter(q=>q.caseFamily==="SEQ-"+(domain+1)+"-"+(seed+1));
  const solutions=relevant.map(q=>q.options.find(o=>o.id===q.answer)?.text);
  assert.equal(new Set(solutions).size,5);
  const row=cases[domain][seed];
  for(let stage=0;stage<5;stage++)assert.equal(solutions[stage],row[stage+1]);
 }
});
