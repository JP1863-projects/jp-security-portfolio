import type { Metadata } from 'next';
import Link from 'next/link';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ShieldCheck } from 'lucide-react';
import './globals.css';
export const metadata:Metadata={title:{default:'CyberForge Academy',template:'%s | CyberForge Academy'},description:'Hands-on cybersecurity and AI security training by Jonathan Perry.'};
export default function RootLayout({children}:{children:React.ReactNode}){
 const authControls=process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?<><SignedOut><SignInButton><button className="rounded-lg border border-amber-400 px-3 py-1 text-amber-300">Sign in</button></SignInButton></SignedOut><SignedIn><UserButton/></SignedIn></>:<span className="text-xs text-slate-400">Account features pending setup</span>;
 const shell=<html lang="en"><body className="min-h-screen grid-bg"><a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-amber-400 focus:p-3 focus:text-slate-950" href="#main">Skip to content</a><header className="border-b border-white/10 bg-[#07131e]/95"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4"><Link href="/" className="flex items-center gap-2 font-black tracking-wide"><ShieldCheck className="text-amber-400"/> CyberForge <span className="text-amber-400">Academy</span></Link><nav aria-label="Main navigation" className="flex flex-wrap items-center gap-4 text-sm text-slate-300"><Link href="/">Explore</Link><Link href="/dashboard">Dashboard</Link><Link href="/labs">Labs</Link><Link href="/flashcards">Flashcards</Link><Link href="/leaderboard">Leaderboard</Link><a href="https://github.com/JP1863-projects/jp-security-portfolio">Portfolio</a>{authControls}</nav></div></header><main id="main">{children}</main><footer className="mx-auto max-w-7xl border-t border-white/10 px-5 py-8 text-xs text-slate-400">CyberForge Academy · Jonathan Perry · Practice environments use synthetic data. Completion badges are training milestones, not external certifications.</footer></body></html>;
 return process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?<ClerkProvider>{shell}</ClerkProvider>:shell;
}
