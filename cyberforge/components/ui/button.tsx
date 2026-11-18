import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
export function Button({asChild=false,className,...props}:React.ComponentProps<'button'>&{asChild?:boolean}) {const Comp=asChild?Slot:'button';return <Comp className={twMerge(clsx('inline-flex items-center justify-center rounded-xl bg-amber-400 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 disabled:cursor-not-allowed disabled:opacity-50',className))} {...props}/>}
