import { auth } from '@clerk/nextjs/server';
import { getDb } from '@/lib/db';
import { modules } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
const tracks:Record<string,string>={core:'Core',engineering:'Engineering','ai-security':'AI Security'};
export const dynamic='force-dynamic';
export default async function Certificate({params}:{params:Promise<{track:string}>}){
 const {track}=await params;const name=tracks[track];if(!name)notFound();
 const {userId}=await auth();if(!userId)return <section className="mx-auto max-w-3xl px-5 py-20"><h1 className="text-3xl font-bold">Sign in to view your certificate</h1><Link href="/sign-in" className="mt-5 inline-block text-amber-300">Sign in →</Link></section>;
 const db=getDb();const learner=await db.learner.findUnique({where:{clerkId:userId},include:{progress:true}});
 await db.$disconnect();
 const required=modules.filter(m=>m.track===name).map(m=>m.slug);
 const completed=new Set(learner?.progress.map(p=>p.moduleSlug)??[]);
 if(!learner||!required.every(slug=>completed.has(slug)))return <section className="mx-auto max-w-3xl px-5 py-20"><h1 className="text-3xl font-bold">Path still in progress</h1><p className="muted mt-4">Pass every {name} module to unlock this completion certificate.</p><Link href="/dashboard" className="mt-5 inline-block text-amber-300">View progress →</Link></section>;
 const dates=learner.progress.filter(p=>required.includes(p.moduleSlug)).map(p=>p.completedAt.getTime());const awarded=new Date(Math.max(...dates));
 return <section className="mx-auto max-w-4xl px-5 py-14"><Link href="/dashboard" className="text-teal-300 print:hidden">← Dashboard</Link><div className="mt-8 border-8 border-amber-400/70 bg-[#102d39] px-8 py-16 text-center print:border-amber-600 print:bg-white print:text-slate-900"><p className="eyebrow">CyberForge Academy</p><h1 className="mt-6 text-4xl font-black">Certificate of Completion</h1><p className="muted mt-7">Awarded to</p><p className="mt-2 text-2xl font-bold">CyberForge learner</p><p className="muted mx-auto mt-7 max-w-xl">For completing every assessment in the {name} learning path.</p><p className="mt-8 text-amber-300 print:text-amber-700">{awarded.toLocaleDateString('en-US',{timeZone:'UTC',year:'numeric',month:'long',day:'numeric'})}</p><p className="muted mt-8 text-xs">Portfolio training completion · This is not a professional certification.</p></div><p className="muted mt-5 text-sm print:hidden">Use your browser’s Print command to save a copy.</p></section>
}
