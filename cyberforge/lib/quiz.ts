import { modules, extraQuestions, type Question } from './content';
export function questionsFor(slug:string):Question[] { const module=modules.find(m=>m.slug===slug); return module?[module.question,...extraQuestions]:[]; }
export function publicQuestions(slug:string) { return questionsFor(slug).map(({answer,explanation,...q})=>q); }
export function grade(slug:string, answers:Record<string,string>) {
 const questions=questionsFor(slug); if(!questions.length) return null;
 const results=questions.map(q=>({id:q.id,correct:answers[q.id]===q.answer,answer:q.answer,explanation:q.explanation}));
 return {score:results.filter(r=>r.correct).length,total:questions.length,results};
}
