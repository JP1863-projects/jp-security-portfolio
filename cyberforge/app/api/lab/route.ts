import {NextRequest,NextResponse} from 'next/server';
import {z} from 'zod';import {sameOrigin,invalid} from '@/lib/http';import {labs} from '@/lib/content';
const schema=z.object({slug:z.string().max(80),choice:z.number().int().min(0).max(10)});
export async function POST(req:NextRequest){if(!sameOrigin(req))return invalid('Invalid origin.');const parsed=schema.safeParse(await req.json().catch(()=>null));if(!parsed.success)return invalid();const lab=labs.find(l=>l.slug===parsed.data.slug);if(!lab)return invalid('Unknown lab.');return NextResponse.json({passed:parsed.data.choice===lab.answer,explanation:lab.explanation,guest:true},{headers:{'Cache-Control':'no-store'}});}
