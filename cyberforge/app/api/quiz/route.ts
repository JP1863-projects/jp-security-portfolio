import {NextRequest,NextResponse} from 'next/server';
import {z} from 'zod';
import {sameOrigin,invalid} from '@/lib/http';
import {grade} from '@/lib/quiz';
const schema=z.object({slug:z.string().max(80),answers:z.record(z.string(),z.string().max(200))});
export async function POST(req:NextRequest){if(!sameOrigin(req))return invalid('Invalid origin.');const parsed=schema.safeParse(await req.json().catch(()=>null));if(!parsed.success)return invalid();const result=grade(parsed.data.slug,parsed.data.answers);if(!result)return invalid('Unknown module.');const passed=result.score/result.total>=0.75;return NextResponse.json({...result,passed,earned:0,guest:true},{headers:{'Cache-Control':'no-store'}});}
