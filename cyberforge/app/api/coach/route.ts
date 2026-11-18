import {NextResponse} from 'next/server';
export async function POST(){return NextResponse.json({error:'AI coaching is not available in the guest portfolio demo.'},{status:503});}
