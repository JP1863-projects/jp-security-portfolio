export function nextReview(intervalDays:number,ease:number,rating:'again'|'hard'|'good'|'easy',now=new Date()) {
 const interval=rating==='again'?1:rating==='hard'?Math.max(1,Math.ceil(intervalDays*1.2)):rating==='easy'?Math.max(4,Math.ceil((intervalDays||1)*ease*1.3)):Math.max(2,Math.ceil((intervalDays||1)*ease));
 const nextEase=Math.max(1.3,ease+(rating==='again'?-0.2:rating==='hard'?-0.15:rating==='easy'?0.15:0));
 return { intervalDays:interval,ease:nextEase,dueAt:new Date(now.getTime()+interval*86400000) };
}
