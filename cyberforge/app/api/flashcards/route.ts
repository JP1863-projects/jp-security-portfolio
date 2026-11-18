import { NextRequest,NextResponse } from 'next/server';
import { z } from 'zod';
import { requireLearner,touchLearner } from '@/lib/auth';
import { sameOrigin,unauthorized,invalid } from '@/lib/http';
import { getDb } from '@/lib/db';
import { modules } from '@/lib/content';
import { nextReview } from '@/lib/spaced';
const schema=z.object({cardId:z.string(),rating:z.enum(['again','hard','good','easy']).optional(),bookmark:z.boolean().optional()}).refine(v=>v.rating!==undefined||v.bookmark!==undefined);
export async function POST(req:NextRequest){
 if(!sameOrigin(req))return invalid('Invalid origin.');
 const db=getDb();
 try {
 const learner=await requireLearner(db);if(!learner)return unauthorized();
 const body=schema.safeParse(await req.json().catch(()=>null));if(!body.success||!modules.some(m=>m.slug===body.data.cardId))return invalid();
 const key={learnerId_cardId:{learnerId:learner.id,cardId:body.data.cardId}};
 const prev=await db.cardReview.findUnique({where:key});
 const values=body.data.rating?nextReview(prev?.intervalDays??0,prev?.ease??2.5,body.data.rating):{};
 const review=await db.cardReview.upsert({where:key,create:{learnerId:learner.id,cardId:body.data.cardId,...values,bookmarked:body.data.bookmark??false,reviewedAt:body.data.rating?new Date():null},update:{...values,...(body.data.bookmark===undefined?{}:{bookmarked:body.data.bookmark}),...(body.data.rating?{reviewedAt:new Date()}:{})}});
 await touchLearner(db,learner.id);
 return NextResponse.json({dueAt:review.dueAt,bookmarked:review.bookmarked});
 } finally { await db.$disconnect(); }
}
