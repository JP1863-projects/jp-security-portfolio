import {NextResponse} from 'next/server';
// No authentication middleware for the guest demo.
export default function proxy(){return NextResponse.next();}
export const config={matcher:['/__cyberforge_noop__']};
