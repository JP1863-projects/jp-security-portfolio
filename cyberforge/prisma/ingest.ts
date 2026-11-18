import { config } from 'dotenv';
config({path:'.env.local'});
import OpenAI from 'openai';
import { getDb } from '../lib/db';
const db=getDb();
import { modules } from '../lib/content';
async function main(){
 const client=new OpenAI();
 for(const module of modules){
  const chunks=[module.concept,module.practice,module.question.explanation];
  for(let i=0;i<chunks.length;i++){
   const body=chunks[i];const source=`CyberForge / ${module.title} / ${i+1}`;
   const result=await client.embeddings.create({model:process.env.OPENAI_EMBEDDING_MODEL||'text-embedding-3-small',input:body});
   const vector=`[${result.data[0].embedding.join(',')}]`;
   await db.$executeRaw`INSERT INTO "KnowledgeChunk" ("id","moduleSlug","source","body","embedding") VALUES (${`${module.slug}-${i}`},${module.slug},${source},${body},${vector}::vector) ON CONFLICT ("id") DO UPDATE SET "body"=EXCLUDED."body","embedding"=EXCLUDED."embedding"`;
  }
 }
}
main().finally(()=>db.$disconnect());
