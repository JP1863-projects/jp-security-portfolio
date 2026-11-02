/* CISSP Focus Challenge: 100 independently authored case contexts with
   five distinct observed gaps and corresponding security decisions each.
   500 playable question items, 100 case families. Original educational content.
   Requires cissp-focus-domain-1.js ... cissp-focus-domain-8.js.
*/
(function(){
"use strict";
const inputs=window.CISSP_FOCUS_SEEDS||[];
const result=[];
const labels=["BEST","MOST","PRIMARY","BEST","MOST"];
const biasPatterns=window.CISSP_BANK?.patterns||[];
const isString=x=>typeof x==="string"&&x.trim().length>=20;
for(let domain=0;domain<8;domain++){
 const cases=inputs[domain],expected=domain<4?13:12;
 if(!Array.isArray(cases)||cases.length!==expected)throw new Error("Focus bank domain "+(domain+1)+": expected "+expected+" original cases");
 cases.forEach((entry,ci)=>{
  if(!Array.isArray(entry)||entry.length!==6||!isString(entry[0]))throw new Error("Invalid focus scenario D"+(domain+1)+"-"+(ci+1));
  const situation=entry[0],paired=entry.slice(1);
  if(paired.some(p=>!Array.isArray(p)||p.length!==2||!isString(p[0])||!isString(p[1])))throw new Error("Focus case has invalid specific needs: "+domain+"/"+ci);
  const actions=paired.map(p=>p[1]);
  if(new Set(actions).size!==5)throw new Error("Duplicate action in focus case "+domain+"/"+ci);
  for(let lens=0;lens<5;lens++){
   const id="FOCUS-"+(domain+1)+"-"+(ci+1)+"-"+(lens+1);
   const query=paired[lens][0];
   const good=actions[lens];
   const alternativeIndices=[0,1,2,3,4].filter(i=>i!==lens);
   // Rotate a different trio of otherwise plausible controls into each question.
   const shift=(ci+domain+lens)%4;
   const wrongIds=[0,1,2].map(n=>alternativeIndices[(shift+n)%4]);
   const raw=[good,...wrongIds.map(i=>actions[i])];
   const answerIndex=(domain+ci+lens*3)%4;
   const reordered=Array.from({length:4},(_,i)=>raw[(i-answerIndex+4)%4]);
   const options=reordered.map((text,k)=>({id:"ABCD"[k],text}));
   const answer="ABCD"[answerIndex];
   if(options[answerIndex].text!==good)throw new Error("Answer-position failure "+id);
   const wrongRationales={};
   for(const opt of options.filter(x=>x.id!==answer)){
    const idx=actions.indexOf(opt.text);
    wrongRationales[opt.id]="This would help with '"+paired[idx][0].toLowerCase()+"', but the question specifically asks how to address '"+query.toLowerCase()+"'.";
   }
   const type=labels[lens];
   result.push({
    id,caseFamily:"FOCUS-"+(domain+1)+"-"+(ci+1),domain,domainName:window.CISSP_BANK.domains[domain],
    scenario:situation+". Observed issue: "+query+".",
    prompt:type==="PRIMARY"?"Which response addresses the PRIMARY issue identified?":"Which is the "+type+" response to the observed issue?",
    type,difficulty:lens===2||lens===4?"Hard":"Medium",
    options,answer,engineerOptionId:null,
    bias:biasPatterns[(ci+domain+lens)%biasPatterns.length]||"TOOL_FIRST",
    principle:"Match the action to the actual security requirement: "+good+".",
    engineer_instinct:wrongIds.length?actions[wrongIds[0]]:good,
    why_instinct_feels_right:"An alternative is a sound control for another security property in the same environment, but does not directly address the specific observed gap.",
    hidden_cissp_keyword:type,
    what_isc2_is_testing:"Select the control or governance decision that addresses this domain-specific security objective, not a generally valid but misapplied alternative.",
    manager_vs_engineer:"A responsible security leader selects the relevant safeguard after identifying the precise need: "+good+".",
    memorization_tip:"Separate the security properties involved. Ask what is broken, who owns it and which control directly corrects it.",
    whyCorrectAnswerWins:good+". This action is targeted to the problem: "+query+".",
    managerTakeaway:"Neither management nor engineering actions win by their label; the right answer solves the stated and authorized need.",
    futurePattern:"Avoid choosing controls simply because they are important in another stage or another part of the architecture.",
    wrongRationales,framework:"CISSP current 2024 outline",threat:"domain-specific decision and control selection",industry:"Cross-industry",environment:"Hybrid",
    contentVersion:5,editorialStatus:"original_unreviewed"
   });
  }
 });
}
if(result.length!==500)throw new Error("CISSP Focus bank must have exactly 500 questions; got "+result.length);
window.CISSP_FOCUS_QUESTIONS=Object.freeze(result);
})();
