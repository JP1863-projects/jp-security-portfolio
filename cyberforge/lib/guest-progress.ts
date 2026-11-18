'use client';
import {useEffect,useState} from 'react';
export type GuestProgress={courses:string[];labs:string[];reviews:Record<string,{dueAt:string;bookmarked:boolean}>};
const key='cyberforge-guest-v1';
const empty=():GuestProgress=>({courses:[],labs:[],reviews:{}});
export function readProgress():GuestProgress{if(typeof window==='undefined')return empty();try{const x=JSON.parse(localStorage.getItem(key)||'{}');return {courses:Array.isArray(x.courses)?x.courses.filter((v:unknown)=>typeof v==='string'):[],labs:Array.isArray(x.labs)?x.labs.filter((v:unknown)=>typeof v==='string'):[],reviews:x.reviews&&typeof x.reviews==='object'&&!Array.isArray(x.reviews)?x.reviews:{}};}catch{return empty();}}
export function saveProgress(p:GuestProgress){try{localStorage.setItem(key,JSON.stringify(p));window.dispatchEvent(new Event('cyberforge-progress'));}catch{}}
export function useGuestProgress(){const [p,setP]=useState<GuestProgress>(empty);useEffect(()=>{const refresh=()=>setP(readProgress());refresh();window.addEventListener('cyberforge-progress',refresh);window.addEventListener('storage',refresh);return()=>{window.removeEventListener('cyberforge-progress',refresh);window.removeEventListener('storage',refresh)}},[]);return p;}
export function recordCourse(slug:string){const p=readProgress();if(!p.courses.includes(slug))saveProgress({...p,courses:[...p.courses,slug]});}
export function recordLab(slug:string){const p=readProgress();if(!p.labs.includes(slug))saveProgress({...p,labs:[...p.labs,slug]});}
