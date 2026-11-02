"use strict";
const {test}=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const bankJs=fs.readFileSync(path.join(__dirname,"..","cissp-question-bank.js"),"utf8");
const extendedJs=fs.readFileSync(path.join(__dirname,"..","cissp-learning-content.js"),"utf8");
const w={};
new Function("window",bankJs)(w);
new Function("window",extendedJs)(w);
const bank=w.CISSP_BANK.questions,extras=w.CISSP_LEARNING.extras;
const suspicious=/\b(always|never|every|all|immediately|without|ignore|assume|permanently|entire|unrestricted|before|automatically|declare|buy)\b/i;
test("no core question has three uniformly obvious red-flag distractors",()=>{
 const offenders=bank.filter(q=>q.options.filter(o=>o.id!==q.answer).every(o=>suspicious.test(o.text)));
 assert.deepEqual(offenders.map(q=>q.id),[]);
});
test("editorial refresh preserves original correct keys and unique answer text",()=>{
 for(const q of bank){
   assert.equal(q.options.length,4,q.id);
   assert.equal(q.options.filter(o=>o.id===q.answer).length,1,q.id);
   assert.equal(new Set(q.options.map(o=>o.text)).size,4,q.id);
   if(q.engineerOptionId)assert.notEqual(q.engineerOptionId,q.answer,q.id);
 }
});
test("technical answers are appropriate when change approval and prerequisites are already satisfied",()=>{
 const technical=extras.filter(q=>q.id.startsWith("ACT-"));
 assert.equal(technical.length,16);
 assert.ok(technical.every(q=>q.engineerOptionId===null));
 assert.ok(technical.every(q=>q.principle.length>25));
 assert.equal(new Set(technical.map(q=>q.domain)).size,8);
});
