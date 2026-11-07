'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),expected=[40,68,76,72,76,68],questions=[];
const oldContext={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'ai-security-content.js'),'utf8'),oldContext);
const stems=new Set(oldContext.window.AI_SECURITY_COURSE.lessons.flatMap(l=>l.questions.map(q=>q.q.toLowerCase())));
for(let domain=1;domain<=6;domain++){
 const lines=fs.readFileSync(path.join(root,`content/ai-security/domain-${domain}.txt`),'utf8').split(/\r?\n/);let objective,topic,count=0;
 for(const line of lines){if(!line.trim())continue;if(line.startsWith('@')){[objective,topic]=line.slice(1).split('|');if(!objective?.startsWith(domain+'.')||!topic)throw Error('Invalid objective '+line);continue;}
 const [q,correct,w1,w2,w3,why,...extra]=line.split('|');if(extra.length||![q,correct,w1,w2,w3,why].every(Boolean)||!objective)throw Error('Malformed question '+line);
 if(stems.has(q.toLowerCase()))throw Error('Duplicate stem '+q);stems.add(q.toLowerCase());
 if(new Set([correct,w1,w2,w3].map(s=>s.toLowerCase())).size!==4)throw Error('Duplicate choices '+q);
 if(why.length<65)throw Error('Explanation too short '+q);
 questions.push({id:`ai-extra-${domain}-${String(++count).padStart(3,'0')}`,domain,objective,topic,q,answers:[correct,w1,w2,w3],why});
 }
 if(count!==expected[domain-1])throw Error(`Domain ${domain}: expected ${expected[domain-1]}, got ${count}`);
}
const output='/* 400 independently authored practice questions. Not official exam items. */\nwindow.AI_SECURITY_EXTRA = '+JSON.stringify(questions,null,2)+';\n';
const dest=path.join(root,'ai-security-extra.js');
if(process.argv.includes('--check')){if(fs.readFileSync(dest,'utf8')!==output)throw Error('Generated bank is stale; run node scripts/build-ai-security-bank.cjs');}else fs.writeFileSync(dest,output);
console.log('Verified 400 additional questions; domain counts: '+expected.join(', '));
