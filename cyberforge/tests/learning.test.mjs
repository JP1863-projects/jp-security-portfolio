import test from 'node:test';import assert from 'node:assert/strict';
import { modules,labs,rankFor } from '../lib/content.ts';
import { grade,publicQuestions } from '../lib/quiz.ts';
import { nextReview } from '../lib/spaced.ts';
test('all learning routes have unique slugs and valid assessments',()=>{
 assert.equal(modules.length,13);assert.equal(new Set(modules.map(m=>m.slug)).size,13);
 assert.equal(labs.length,7);assert.equal(new Set(labs.map(l=>l.slug)).size,7);
 for(const m of modules){const q=publicQuestions(m.slug);assert.equal(q.length,5);assert.ok(q.every(x=>!('answer'in x)));assert.ok(m.question.options.includes(m.question.answer));}
});
test('grading uses server answers and passes at 75 percent',()=>{
 const slug=modules[0].slug;const questions=publicQuestions(slug);
 const correct={ [questions[0].id]: modules[0].question.answer, 'q-boolean':'False','q-scenario':'Check server-side ownership before retrieving it','q-ordering':'Detect|Contain|Eradicate|Recover','q-code':'Broken object-level authorization'};
 assert.equal(grade(slug,correct).score,5);assert.equal(grade(slug,{...correct,'q-code':'wrong'}).score,4);assert.equal(grade(slug,{}).score,0);assert.equal(grade('unknown',{}),null);
});
test('spaced review schedules and ranks remain bounded',()=>{
 const now=new Date('2026-11-18T00:00:00Z');const again=nextReview(10,2.5,'again',now);const easy=nextReview(10,2.5,'easy',now);
 assert.equal(again.intervalDays,1);assert.ok(easy.intervalDays>again.intervalDays);assert.ok(nextReview(1,1.3,'again',now).ease>=1.3);
 assert.equal(rankFor(0),'Recruit');assert.equal(rankFor(5000),'Principal Architect');
});
