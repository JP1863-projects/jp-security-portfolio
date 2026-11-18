import * as React from 'react';
export function Card({className='',...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={`rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/10 ${className}`} {...props}/>}
