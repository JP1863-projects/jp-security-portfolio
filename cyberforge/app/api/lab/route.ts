import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { requireLearner,touchLearner } from '@/lib/auth';
import { sameOrigin,unauthorized,invalid } from '@/lib/http';
import { labs } from '@/lib/content';
import { getDb } from '@/lib/db';
const schema=z.object({slug:z.string(),choice:z.number().int().min(0).max(10)});
export async function POST(req:NextRequest){
 if(!sameOrigin(req))return invalid('Invalid origin.');
 const db=getDb();
 try {
 const learner=await requireLearner(db);if(!learner)return unauthorized();
 const body=schema.safeParse(await req.json().catch(()=>null));if(!body.success)return invalid();
 const lab=labs.find(l=>l.slug===body.data.slug);if(!lab)return invalid('Unknown lab.');
 const passed=body.data.choice===lab.answer;
 await db.$transaction(async tx=>{
  await tx.labRun.create({data:{learnerId:learner.id,labSlug:lab.slug,passed}});
  if(passed){const key=`lab:${lab.slug}`;const awarded=await tx.achievement.createMany({data:[{learnerId:learner.id,key}],skipDuplicates:true});if(awarded.count)await tx.learner.update({where:{id:learner.id},data:{xp:{increment:75}}});}
 });
 await touchLearner(db,learner.id);
 return NextResponse.json({passed,explanation:lab.explanation});
 } finally { await db.$disconnect(); }
}
