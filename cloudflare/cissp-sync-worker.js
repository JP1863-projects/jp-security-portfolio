/* CISSP Adaptive Bias Engine — Cloudflare Worker API and static game host.
 * D1 binding: CISSP_DB. No email/password or personal details are collected.
 * A 256-bit recovery secret is displayed once; its SHA-256 digest alone is persisted.
 * Study sessions are HttpOnly+Secure cookies. No localStorage credentials.
 * Educational progress is non-sensitive, but all per-user endpoints require authentication.
 * Build: prepend const INLINE_FILES = {"/": ...}; before deploying as an ES module.
 */
const SYNC_COOKIE="__Host-cissp_session";
const SESSION_DURATION=30*24*60*60*1000;
const MAX_PROGRESS_BYTES=900000;
const SESSION_RE=/^[A-Za-z0-9_-]{43}$/;
const CODE_RE=/^CISSP1\.([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\.([A-Za-z0-9_-]{43})$/;
function randomSecret(){const b=new Uint8Array(32);crypto.getRandomValues(b);return btoa(String.fromCharCode(...b)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");}
async function digest(value){const bytes=new TextEncoder().encode(value);const hash=await crypto.subtle.digest("SHA-256",bytes);return Array.from(new Uint8Array(hash),b=>b.toString(16).padStart(2,"0")).join("");}
function json(payload,status=200,headers={}){return new Response(JSON.stringify(payload),{status,headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff","Vary":"Cookie",...headers}});}
function noCookies(){return SYNC_COOKIE+"=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0";}
function sessionCookie(token){return SYNC_COOKIE+"="+token+"; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age="+Math.floor(SESSION_DURATION/1000);}
function allowedMethod(request,...methods){return methods.includes(request.method);}
function mutationOrigin(request){
 const origin=request.headers.get("Origin");
 if(!origin)return false;
 try{return new URL(origin).origin===new URL(request.url).origin;}catch{return false;}
}
async function bodyJson(request){
 if(!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json"))throw new Error("Expected JSON");
 const text=await request.text();if(text.length>MAX_PROGRESS_BYTES+10000)throw new Error("Body too large");
 return JSON.parse(text);
}
function cleanRecord(a){
 if(!a||typeof a!=="object"||Array.isArray(a))return null;
 const id=typeof a.id==="string"&&/^(?:D[1-8]-\d+-[1-4]|ADV-[1-8]-[1-4]|ACT-[1-8]-[1-2]|NEW-[1-8]-(?:[1-9]|1[0-9]|20)|SEQ-[1-8]-(?:[1-9]|1[0-9]|20)-[1-5]|LEAST-[1-8])$/.test(a.id)?a.id:null;
 if(!id||!Number.isSafeInteger(a.at)||a.at<1600000000000||a.at>Date.now()+86400000||!["A","B","C","D"].includes(a.selected)||!Number.isInteger(a.domain)||a.domain<0||a.domain>7||typeof a.correct!=="boolean")return null;
 return {id,at:a.at,selected:a.selected,domain:a.domain,correct:a.correct,bias:typeof a.bias==="string"&&/^[A-Z_]{3,40}$/.test(a.bias)?a.bias:null,difficulty:["Easy","Medium","Hard"].includes(a.difficulty)?a.difficulty:"Medium",confidence:["low","medium","high"].includes(a.confidence)?a.confidence:"medium"};
}
function cleanProgress(progress){
 if(!progress||typeof progress!=="object"||Array.isArray(progress))throw new Error("Invalid progress format");
 if(!Array.isArray(progress.history)||!Array.isArray(progress.sessions)||!Array.isArray(progress.snapshots)||!progress.cards||typeof progress.cards!=="object"||Array.isArray(progress.cards))throw new Error("Missing progress fields");
 const history=progress.history.slice(-5000).map(cleanRecord).filter(Boolean);
 const sessions=progress.sessions.slice(-200).filter(x=>x&&typeof x==="object"&&typeof x.mode==="string"&&/^[-a-zA-Z0-9]{1,30}$/.test(x.mode)&&Number.isFinite(x.at)).map(x=>({mode:x.mode,at:x.at,count:Math.min(125,Math.max(0,Math.floor(Number(x.count)||0))),correct:Math.min(125,Math.max(0,Math.floor(Number(x.correct)||0))),readiness:Math.min(100,Math.max(0,Number(x.readiness)||0))}));
 const snapshots=progress.snapshots.slice(-200).filter(x=>x&&Number.isFinite(x.at)&&Number.isFinite(x.readiness)).map(x=>({at:x.at,readiness:Math.max(0,Math.min(100,x.readiness))}));
 const cards=Object.create(null);
 for(const [key,v] of Object.entries(progress.cards).slice(0,1000)){
  if(!/^(?:D[1-8]-\d+|ADV-[1-8]-[1-4]|ACT-[1-8]-[1-2]|NEW-[1-8]-(?:[1-9]|1[0-9]|20)|SEQ-[1-8]-(?:[1-9]|1[0-9]|20)|LEAST-[1-8])$/.test(key)||!v||!Number.isFinite(v.dueAt)||!Number.isFinite(v.lastAt))continue;
  cards[key]={dueAt:v.dueAt,lastAt:v.lastAt,repetitions:Math.max(0,Math.min(100,Math.floor(v.repetitions)||0)),lapses:Math.max(0,Math.min(1000,Math.floor(v.lapses)||0)),intervalHours:Math.max(0,Math.min(24*365,Number(v.intervalHours)||0)),lastCorrect:!!v.lastCorrect,confidence:["low","medium","high"].includes(v.confidence)?v.confidence:"medium"};
 }
 const cleaned={history,sessions,snapshots,cards};
 if(JSON.stringify(cleaned).length>MAX_PROGRESS_BYTES)throw new Error("Progress too large");
 return cleaned;
}
async function getAuth(request,db){
 const cookie=request.headers.get("Cookie")||"";
 const value=cookie.split(";").map(x=>x.trim()).find(x=>x.startsWith(SYNC_COOKIE+"="))?.slice(SYNC_COOKIE.length+1);
 if(!value||!SESSION_RE.test(value))return null;
 const hash=await digest(value);
 const row=await db.prepare("SELECT a.id,a.revision,a.progress_json,s.token_hash,s.expires_at FROM study_sessions s JOIN study_accounts a ON a.id=s.account_id WHERE s.token_hash=? AND s.expires_at>?").bind(hash,Date.now()).first();
 return row||null;
}
async function newSession(db,accountId){
 const token=randomSecret(),hash=await digest(token),now=Date.now();
 await db.prepare("INSERT INTO study_sessions (token_hash,account_id,expires_at,created_at,last_seen_at) VALUES (?,?,?,?,?)").bind(hash,accountId,now+SESSION_DURATION,now,now).run();
 return token;
}
async function api(request,db){
 if(!db)return json({error:"Cloud synchronization unavailable"},503);
 const path=new URL(request.url).pathname;
 if(["/api/study/create","/api/study/restore","/api/study/save","/api/study/logout","/api/study/delete"].includes(path)){
   if(!allowedMethod(request,"POST"))return json({error:"Method not allowed"},405);
   if(!mutationOrigin(request))return json({error:"Origin rejected"},403);
 }
 try{
   if(path==="/api/study/create"){
     const id=crypto.randomUUID(),secret=randomSecret(),recoveryCode="CISSP1."+id+"."+secret;
     const hash=await digest(recoveryCode);
     await db.prepare("INSERT INTO study_accounts(id,recovery_hash,progress_json,revision) VALUES (?,?,?,0)").bind(id,hash,'{"history":[],"sessions":[],"snapshots":[],"cards":{}}').run();
     const token=await newSession(db,id);
     return json({accountId:id,recoveryCode,revision:0},201,{"Set-Cookie":sessionCookie(token)});
   }
   if(path==="/api/study/restore"){
     const payload=await bodyJson(request);
     const match=CODE_RE.exec(typeof payload.code==="string"?payload.code.trim():"");
     if(!match)return json({error:"Invalid recovery code"},400);
     const hash=await digest(match[0]),account=await db.prepare("SELECT id FROM study_accounts WHERE id=? AND recovery_hash=?").bind(match[1],hash).first();
     if(!account)return json({error:"Recovery code not recognized"},401);
     const token=await newSession(db,account.id);
     return json({accountId:account.id,restored:true},200,{"Set-Cookie":sessionCookie(token)});
   }
   const auth=await getAuth(request,db);
   if(!auth)return json({error:"Not signed in"},401);
   if(path==="/api/study/me"){
     if(!allowedMethod(request,"GET"))return json({error:"Method not allowed"},405);
     return json({accountId:auth.id,revision:auth.revision,progress:JSON.parse(auth.progress_json)});
   }
   if(path==="/api/study/save"){
     const payload=await bodyJson(request);
     if(!Number.isInteger(payload.revision)||payload.revision<0)return json({error:"Invalid revision"},400);
     const cleaned=cleanProgress(payload.progress);
     const result=await db.prepare("UPDATE study_accounts SET progress_json=?,revision=revision+1,updated_at=CURRENT_TIMESTAMP WHERE id=? AND revision=?").bind(JSON.stringify(cleaned),auth.id,payload.revision).run();
     if(!result.meta?.changes){
       const actual=await db.prepare("SELECT revision,progress_json FROM study_accounts WHERE id=?").bind(auth.id).first();
       return json({error:"Revision conflict",revision:actual.revision,progress:JSON.parse(actual.progress_json)},409);
     }
     return json({saved:true,revision:payload.revision+1});
   }
   if(path==="/api/study/logout"){
     await db.prepare("DELETE FROM study_sessions WHERE token_hash=?").bind(auth.token_hash).run();
     return json({signedOut:true},200,{"Set-Cookie":noCookies()});
   }
   if(path==="/api/study/delete"){
     const payload=await bodyJson(request);
     if(payload.confirm!=="DELETE")return json({error:"Confirm account deletion"},400);
     await db.prepare("DELETE FROM study_sessions WHERE account_id=?").bind(auth.id).run();
     await db.prepare("DELETE FROM study_accounts WHERE id=?").bind(auth.id).run();
     return json({deleted:true},200,{"Set-Cookie":noCookies()});
   }
   return json({error:"Not found"},404);
 }catch(error){
   if(/JSON|progress|Invalid|Missing|Body|Expected|large|format/i.test(String(error.message)))return json({error:"Invalid request: "+String(error.message).slice(0,150)},400);
   return json({error:"Service temporarily unavailable"},503);
 }
}
async function staticPage(request){
 const url=new URL(request.url),p=decodeURIComponent(url.pathname);
 if(!["GET","HEAD"].includes(request.method))return new Response("Method not allowed",{status:405});
 const headers={"X-Content-Type-Options":"nosniff","Referrer-Policy":"strict-origin-when-cross-origin","Cache-Control":"public,max-age=60","Content-Security-Policy":"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'","Permissions-Policy":"camera=(), microphone=(), geolocation=()"};
 if(Object.prototype.hasOwnProperty.call(INLINE_FILES,p)){
   headers["Content-Type"]=p.endsWith(".js")?"application/javascript; charset=utf-8":"text/html; charset=utf-8";
   return new Response(request.method==="HEAD"?null:INLINE_FILES[p],{headers});
 }
 if(!(/^\/(?:assets\/[a-zA-Z0-9_./-]+|[a-zA-Z0-9_-]+\.html|favicon\.ico)$/.test(p))||p.includes(".."))return new Response("Not found",{status:404});
 try{
   const r=await fetch("https://raw.githubusercontent.com/JP1863-projects/jp-security-portfolio/main"+p,{cf:{cacheTtl:1800,cacheEverything:true}});
   if(!r.ok)return new Response("Not found",{status:404});
   const t=p.endsWith(".webp")?"image/webp":p.endsWith(".png")?"image/png":p.endsWith(".jpg")?"image/jpeg":p.endsWith(".svg")?"image/svg+xml":p.endsWith(".html")?"text/html; charset=utf-8":"application/octet-stream";
   return new Response(request.method==="HEAD"?null:r.body,{status:200,headers:{"Content-Type":t,"Cache-Control":"public,max-age=1800","X-Content-Type-Options":"nosniff"}});
 }catch{return new Response("Asset temporarily unavailable",{status:502});}
}
export default {
 async fetch(request,env,ctx){
   try{
    const u=new URL(request.url);
    if(u.pathname.startsWith("/api/study/"))return await api(request,env.CISSP_DB);
    return await staticPage(request);
   }catch{return new Response("Service temporarily unavailable",{status:503});}
 }
};
