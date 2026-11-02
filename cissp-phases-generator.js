/* Original CISSP phase-reasoning practice items.
   160 case studies x five distinct decision stages = 800 playable questions.
   These are educational variations within 160 case families, not 800 calibrated independent psychometric items.
   Requires cissp-phases-domain-1.js ... cissp-phases-domain-8.js.
*/
(function(){
"use strict";
const seeds=window.CISSP_PHASE_SEEDS||[];
const output=[];
const phases=[
 {type:"FIRST",difficulty:"Medium",context:"Ownership, exposure and applicable requirements are not yet established.",prompt:"What should the security leader do FIRST?"},
 {type:"BEST",difficulty:"Hard",context:"The relevant requirements and exposure have been documented, but accountable leadership has not selected a risk treatment.",prompt:"What is the BEST next decision?"},
 {type:"NEXT",difficulty:"Medium",context:"The accountable owner has approved a treatment and assigned implementation authority. The change window is ready.",prompt:"What should the team do NEXT?"},
 {type:"MOST",difficulty:"Hard",context:"The authorized action has been implemented. The team must now demonstrate the intended security outcome.",prompt:"What is the MOST appropriate verification step?"},
 {type:"PRIMARY",difficulty:"Hard",context:"Follow-up monitoring or testing has identified an exception, ineffective safeguard, or material change in conditions.",prompt:"What is the PRIMARY response now?"}
];
const securityBias=["CONTROL_BEFORE_REQUIREMENTS","ENGINEER_OWNS_RISK","TOOL_FIRST","TECHNICAL_PERFECTION","OPERATIONS_BEFORE_GOVERNANCE"];
for(let domain=0;domain<8;domain++){
 const cases=seeds[domain];
 if(!Array.isArray(cases)||cases.length!==20)throw Error("CISSP domain "+(domain+1)+" must have exactly 20 case studies.");
 for(let i=0;i<20;i++){
  const row=cases[i];
  if(!Array.isArray(row)||row.length!==6||row.some(x=>typeof x!=="string"||x.length<24))throw Error("Invalid CISSP case D"+(domain+1)+"-"+(i+1));
  const [caseText,...actions]=row;
  if(new Set(actions).size!==5)throw Error("Case contains duplicate stage solutions: "+domain+"-"+i);
  for(let stage=0;stage<5;stage++){
   const phase=phases[stage],id="SEQ-"+(domain+1)+"-"+(i+1)+"-"+(stage+1);
   const candidateIndices=[0,1,2,3,4].filter(x=>x!==stage);
   // The premature-implementation distractor is always present in pre-assessment questions.
   if(stage===0)candidateIndices.sort((a,b)=>(a===2?-1:b===2?1:0));
   const selectedIndices=candidateIndices.slice(0,3);
   const answerIndex=(domain*100+i*5+stage)%4;
   const chosen=new Array(4);
   chosen[answerIndex]=actions[stage];
   let index=0;for(let j=0;j<4;j++)if(j!==answerIndex)chosen[j]=actions[selectedIndices[index++]];
   const options=chosen.map((text,k)=>({id:"ABCD"[k],text}));
   const engineerOptionId=stage===0?options.find(o=>o.text===actions[2])?.id||null:null;
   const wrongRationales={};
   for(const opt of options.filter(o=>o.id!=="ABCD"[answerIndex])){
    const alternativeStage=actions.indexOf(opt.text);
    wrongRationales[opt.id]="This could be appropriate in stage "+(alternativeStage+1)+" of the control lifecycle, but the question states that the current stage is "+(stage+1)+". Completing steps out of sequence can skip ownership, authorization, or verification.";
   }
   output.push({
    id,domain,domainName:window.CISSP_BANK?.domains?.[domain],type:phase.type,difficulty:phase.difficulty,
    scenario:caseText+". "+phase.context,prompt:phase.prompt,options,answer:"ABCD"[answerIndex],engineerOptionId,
    bias:securityBias[stage],principle:"The best action depends on the security decision stage, not whether an option merely sounds managerial or technical.",
    engineer_instinct:stage===0?actions[2]:actions[selectedIndices[0]],
    why_instinct_feels_right:"Every option describes a reasonable activity in this scenario, but only one matches what has already happened and the decision that is due.",
    hidden_cissp_keyword:phase.type,
    what_isc2_is_testing:"Recognize sequencing of risk assessment, accountable selection, authorized implementation, validation and corrective action in the CISSP domain.",
    manager_vs_engineer:"Stage "+(stage+1)+" requires: "+actions[stage]+". Another valid-looking step may belong earlier or later.",
    memorization_tip:"Read what is ALREADY DONE. Assess → decide → implement → verify → adjust. Apply the step that comes next.",
    whyCorrectAnswerWins:actions[stage]+". The situation is at stage "+(stage+1)+" of five.",
    managerTakeaway:"Technical implementation is the right answer once required analysis and authorization are complete; at other stages, the correct action changes.",
    futurePattern:"Check for clues about authorization, implementation, evidence, changed conditions and the accountable owner.",
    wrongRationales,framework:"CISSP 2024 exam outline",threat:"decision sequence and domain-specific risk",
    industry:"Cross-industry",environment:"Hybrid",contentVersion:4,editorialStatus:"original_unreviewed",
    caseFamily:"SEQ-"+(domain+1)+"-"+(i+1),decisionStage:stage+1
   });
  }
 }
}
if(output.length!==800)throw Error("Expected exactly 800 new CISSP questions");
window.CISSP_PHASE_QUESTIONS=Object.freeze(output);
})();
