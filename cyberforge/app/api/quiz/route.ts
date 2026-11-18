import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { requireLearner, touchLearner } from '@/lib/auth';
import { sameOrigin, unauthorized, invalid } from '@/lib/http';
import { getDb } from '@/lib/db';
import { grade } from '@/lib/quiz';
const bodySchema=z.object({slug:z.string().max(80),answers:z.record(z.string(),z.string().max(200))});
export async function POST(req:NextRequest) {
 if(!sameOrigin(req)) return invalid('Invalid origin.');
 const db=getDb();
 try {
 const learner=await requireLearner(db); if(!learner)return unauthorized();
 const parsed=bodySchema.safeParse(await req.json().catch(()=>null)); if(!parsed.success)return invalid();
 const result=grade(parsed.data.slug,parsed.data.answers); if(!result)return invalid('Unknown module.');
 const passed=result.score/result.total>=0.75;
 const outcome=await db.$transaction(async tx=>{
  await tx.attempt.create({data:{learnerId:learner.id,moduleSlug:parsed.data.slug,score:result.score,total:result.total,answers:parsed.data.answers}});
  if(!passed)return {passed,earned:0};
  const inserted=await tx.progress.createMany({data:[{learnerId:learner.id,moduleSlug:parsed.data.slug}],skipDuplicates:true});
  const earned=inserted.count?100:0;
  if(earned)await tx.learner.update({where:{id:learner.id},data:{xp:{increment:earned}}});
  if(earned)await tx.achievement.createMany({data:[{learnerId:learner.id,key:'first-course'}],skipDuplicates:true});
  return {passed,earned};
 });
 await touchLearner(db,learner.id);
 return NextResponse.json({...result,...outcome});
 } finally { await db.$disconnect(); }
}
