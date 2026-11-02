/* TikTok Login Kit + Draft Inbox integration for CISSP Adaptive Bias Engine.
 * This module is concatenated into the existing ES-module Cloudflare Worker.
 * Auth: user.info.basic. Draft upload: video.upload (separate user consent).
 * Never put the client secret, refresh token, or TikTok access token in browser JS.
 * No Direct Post here: learners manually review and publish drafts in TikTok.
 */
const TT_CALLBACK="https://jp-cissp-learning.dragonlabs.workers.dev/api/tiktok/callback";
const TT_STATE_COOKIE="__Host-cissp_tiktok_state";
const TT_OAUTH_TTL=600;
const TT_VIDEO_MAX=20*1024*1024;
function ttConfigured(env){return !!(env.TIKTOK_CLIENT_KEY&&env.TIKTOK_CLIENT_SECRET&&env.TIKTOK_TOKEN_KEY);}
function ttUrl(path){return "https://open.tiktokapis.com"+path;}
function ttScope(s,name){return String(s||"").split(",").map(x=>x.trim()).includes(name);}
function ttHex(bytes){return Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,"0")).join("");}
function ttB64(bytes){return btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");}
function ttBytes(b64){const raw=atob(b64.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(raw,x=>x.charCodeAt(0));}
async function ttKey(env){const b=ttBytes(env.TIKTOK_TOKEN_KEY||"");if(b.byteLength!==32)throw Error("Invalid server token encryption key");return crypto.subtle.importKey("raw",b,{name:"AES-GCM"},false,["encrypt","decrypt"]);}
async function ttSeal(env,plain){const key=await ttKey(env),iv=crypto.getRandomValues(new Uint8Array(12));const ciphertext=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,new TextEncoder().encode(plain));return ttB64(iv)+"."+ttB64(ciphertext);}
async function ttUnseal(env,sealed){if(typeof sealed!=="string"||sealed.length>2000)throw Error("Invalid token");const [a,b]=sealed.split(".");if(!a||!b)throw Error("Invalid token format");const data=await crypto.subtle.decrypt({name:"AES-GCM",iv:ttBytes(a)},await ttKey(env),ttBytes(b));return new TextDecoder().decode(data);}
function ttCookie(value,maxAge){return TT_STATE_COOKIE+"="+value+"; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age="+maxAge;}
function ttJson(body,status=200){return json(body,status,{"Cache-Control":"no-store"});}
function ttRedirect(to,clear=false){return new Response(null,{status:303,headers:{"Location":to,"Cache-Control":"no-store",...(clear?{"Set-Cookie":ttCookie("",0)}:{})}});}
function ttErr(error){return ttRedirect("/cissp-training.html?tiktok="+encodeURIComponent(error),true);}
function ttMutation(request){return request.headers.get("Origin")===new URL(request.url).origin&&request.headers.get("Content-Type")?.toLowerCase().includes("application/json");}
async function ttTokenRequest(env,fields){
 const body=new URLSearchParams({client_key:env.TIKTOK_CLIENT_KEY,client_secret:env.TIKTOK_CLIENT_SECRET,...fields});
 const response=await fetch(ttUrl("/v2/oauth/token/"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body,redirect:"error"});
 const value=await response.json();if(!response.ok||!value.access_token||!value.open_id)throw Error("TikTok token request failed");
 return value;
}
async function ttFreshToken(env,db,link){
 if(link.access_expires_at>Date.now()+90000)return ttUnseal(env,link.access_cipher);
 const refresh=await ttUnseal(env,link.refresh_cipher);
 const value=await ttTokenRequest(env,{grant_type:"refresh_token",refresh_token:refresh});
 if(value.open_id!==link.open_id)throw Error("TikTok account changed during refresh");
 await db.prepare("UPDATE tiktok_links SET access_cipher=?,refresh_cipher=?,scope=?,access_expires_at=?,updated_at=? WHERE open_id=?")
 .bind(await ttSeal(env,value.access_token),await ttSeal(env,value.refresh_token||refresh),String(value.scope||link.scope),Date.now()+value.expires_in*1000,Date.now(),link.open_id).run();
 link.scope=String(value.scope||link.scope);
 return value.access_token;
}
async function ttLinkFor(db,accountId){return db.prepare("SELECT open_id,account_id,display_name,scope,access_cipher,refresh_cipher,access_expires_at FROM tiktok_links WHERE account_id=?").bind(accountId).first();}
async function ttSession(request,env){const session=await getAuth(request,env.CISSP_DB);if(!session)return null;return {session,link:await ttLinkFor(env.CISSP_DB,session.id)};}
async function ttTikTokPost(token,path,body){const r=await fetch(ttUrl(path),{method:"POST",headers:{"Authorization":"Bearer "+token,"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(body),redirect:"error"});const payload=await r.json();if(!r.ok||payload.error?.code!=="ok")throw Error("TikTok rejected the upload: "+String(payload.error?.code||r.status));return payload.data;}
function ttUploadHost(raw){
 try{const u=new URL(raw);return u.protocol==="https:"&&(u.hostname==="open-upload.tiktokapis.com"||u.hostname.endsWith(".tiktokapis.com"))&&u.pathname.startsWith("/video/")&&!u.username&&!u.password;}catch{return false;}
}
async function tikTokRoute(request,env){
 const path=new URL(request.url).pathname,db=env.CISSP_DB;
 if(path==="/api/tiktok/status"&&request.method==="GET")return ttJson({configured:ttConfigured(env),login:true,draftRequiresScope:"video.upload",redirectUri:TT_CALLBACK,mode:"draft_inbox",directPost:false});
 if(!db)return ttJson({error:"Study database unavailable"},503);
 if(path==="/api/tiktok/login"&&request.method==="GET"){
  if(!ttConfigured(env))return ttJson({error:"TikTok credentials must be configured on the CISSP Worker, and its callback URL approved in TikTok Login Kit."},503);
  const mode=new URL(request.url).searchParams.get("mode")==="draft"?"draft":"basic";
  const state=randomSecret(),scope=mode==="draft"?"user.info.basic,video.upload":"user.info.basic";
  const auth=new URL("https://www.tiktok.com/v2/auth/authorize/");
  Object.entries({client_key:env.TIKTOK_CLIENT_KEY,response_type:"code",scope,redirect_uri:TT_CALLBACK,state}).forEach(([k,v])=>auth.searchParams.set(k,v));
  return new Response(null,{status:302,headers:{"Location":auth.toString(),"Set-Cookie":ttCookie(state+"."+mode,TT_OAUTH_TTL),"Cache-Control":"no-store"}});
 }
 if(path==="/api/tiktok/callback"&&request.method==="GET"){
  const u=new URL(request.url);
  const cookie=request.headers.get("Cookie")||"";
  const saved=cookie.split(";").map(x=>x.trim()).find(x=>x.startsWith(TT_STATE_COOKIE+"="))?.slice(TT_STATE_COOKIE.length+1);
  const [state,mode]=String(saved||"").split(".");
  if(!state||!/^[A-Za-z0-9_-]{43}$/.test(state)||!["basic","draft"].includes(mode)||u.searchParams.get("state")!==state)return ttErr("state_error");
  if(u.searchParams.get("error"))return ttErr("consent_denied");
  const code=u.searchParams.get("code");
  if(!code||code.length>1800)return ttErr("missing_code");
  if(!ttConfigured(env))return ttErr("not_configured");
  try{
   const token=await ttTokenRequest(env,{grant_type:"authorization_code",code,redirect_uri:TT_CALLBACK});
   if(!ttScope(token.scope,"user.info.basic")||typeof token.open_id!=="string"||token.open_id.length>128)throw Error("Required user scope unavailable");
   let displayName="TikTok learner";
   try{const info=await fetch(ttUrl("/v2/user/info/?fields=open_id,display_name"),{headers:{"Authorization":"Bearer "+token.access_token},redirect:"error"});const data=await info.json();if(data?.error?.code==="ok"&&data.data?.user?.open_id===token.open_id)displayName=String(data.data.user.display_name||displayName).slice(0,80);}catch{}
   const current=await getAuth(request,db);
   const existing=await db.prepare("SELECT account_id FROM tiktok_links WHERE open_id=?").bind(token.open_id).first();
   if(existing&&current&&existing.account_id!==current.id)return ttErr("linked_to_other_account");
   let accountId=existing?.account_id||current?.id||null;
   if(!accountId){
    accountId=crypto.randomUUID();const unrecoverableCode="CISSP1."+accountId+"."+randomSecret();
    await db.prepare("INSERT INTO study_accounts(id,recovery_hash,progress_json,revision) VALUES (?,?,?,0)")
      .bind(accountId,await digest(unrecoverableCode),'{"history":[],"sessions":[],"snapshots":[],"cards":{}}').run();
   }
   const now=Date.now();
   const fields=[accountId,displayName,String(token.scope||""),await ttSeal(env,token.access_token),await ttSeal(env,token.refresh_token),now+Math.max(300,Number(token.expires_in)||86400)*1000,now,token.open_id];
   if(existing){await db.prepare("UPDATE tiktok_links SET account_id=?,display_name=?,scope=?,access_cipher=?,refresh_cipher=?,access_expires_at=?,updated_at=? WHERE open_id=?").bind(...fields).run();}
   else{await db.prepare("INSERT INTO tiktok_links(account_id,display_name,scope,access_cipher,refresh_cipher,access_expires_at,updated_at,open_id,created_at) VALUES (?,?,?,?,?,?,?,?,?)").bind(...fields,now).run();}
   const sessionToken=await newSession(db,accountId);
   return new Response(null,{status:303,headers:{"Location":"/cissp-training.html?tiktok=connected#sync","Set-Cookie":sessionCookie(sessionToken),"Cache-Control":"no-store"}});
  }catch(e){return ttErr("oauth_unavailable");}
 }
 const signed=await ttSession(request,env);
 if(path==="/api/tiktok/me"&&request.method==="GET"){
  return ttJson({signedIn:!!signed?.session,connected:!!signed?.link,displayName:signed?.link?.display_name||null,canUpload:ttScope(signed?.link?.scope,"video.upload"),mode:"draft_inbox",configured:ttConfigured(env)});
 }
 if(!signed?.session)return ttJson({error:"Sign in with TikTok or a study account first"},401);
 if(path==="/api/tiktok/recovery-code"&&request.method==="POST"){
  if(!ttMutation(request))return ttJson({error:"Origin or content type rejected"},403);
  if(!signed.link)return ttJson({error:"Connect a TikTok identity first"},409);
  const recoveryCode="CISSP1."+signed.session.id+"."+randomSecret();
  await db.prepare("UPDATE study_accounts SET recovery_hash=? WHERE id=?").bind(await digest(recoveryCode),signed.session.id).run();
  return ttJson({recoveryCode,message:"Save this recovery code. It is shown once and replaces the previous recovery code."});
 }
 if(path==="/api/tiktok/unlink"&&request.method==="POST"){
  if(!ttMutation(request))return ttJson({error:"Origin or content type rejected"},403);
  if(!signed.link)return ttJson({error:"No TikTok account is linked"},404);
  await db.prepare("DELETE FROM tiktok_links WHERE account_id=?").bind(signed.session.id).run();
  return ttJson({unlinked:true,warning:"Your study progress is retained; keep a recovery code before signing out."});
 }
 if(path==="/api/tiktok/draft/init"&&request.method==="POST"){
  if(!ttMutation(request))return ttJson({error:"Origin or content type rejected"},403);
  if(!signed.link||!ttScope(signed.link.scope,"video.upload"))return ttJson({error:"Approve video.upload through TikTok to send draft videos."},403);
  let payload;try{payload=await bodyJson(request);}catch{return ttJson({error:"Invalid request body"},400);}
  const size=Number(payload.fileSize),mime=String(payload.mime||"");
  if(!Number.isSafeInteger(size)||size<1000||size>TT_VIDEO_MAX||!["video/mp4","video/webm","video/quicktime"].includes(mime)||payload.consent!==true)return ttJson({error:"A confirmed MP4, WebM or MOV video up to 20MB is required."},400);
  try{
   const token=await ttFreshToken(env,db,signed.link);
   const result=await ttTikTokPost(token,"/v2/post/publish/inbox/video/init/",{source_info:{source:"FILE_UPLOAD",video_size:size,chunk_size:size,total_chunk_count:1}});
   if(!result?.upload_url||!result.publish_id||!ttUploadHost(result.upload_url))return ttJson({error:"TikTok upload URL invalid"},502);
   const ticket=await ttSeal(env,JSON.stringify({accountId:signed.session.id,uploadUrl:result.upload_url,size,mime,publishId:result.publish_id,expiresAt:Date.now()+10*60*1000}));
   return ttJson({ticket,publishId:result.publish_id,ready:true});
  }catch(e){return ttJson({error:String(e.message).slice(0,120)},502);}
 }
 if(path==="/api/tiktok/draft/file"&&request.method==="POST"){
  if(request.headers.get("Origin")!==new URL(request.url).origin)return ttJson({error:"Origin rejected"},403);
  if(!signed.link||!ttScope(signed.link.scope,"video.upload"))return ttJson({error:"TikTok draft scope not granted"},403);
  const ticket=request.headers.get("X-TikTok-Upload-Ticket")||"";
  if(ticket.length<50||ticket.length>1800)return ttJson({error:"Invalid upload ticket"},400);
  let info;try{info=JSON.parse(await ttUnseal(env,ticket));}catch{return ttJson({error:"Invalid upload ticket"},400);}
  if(info.accountId!==signed.session.id||!Number.isInteger(info.size)||info.size>TT_VIDEO_MAX||Date.now()>info.expiresAt||!ttUploadHost(info.uploadUrl)||request.headers.get("Content-Type")?.split(";")[0]!==info.mime)return ttJson({error:"Invalid or expired upload"},400);
  const bytes=await request.arrayBuffer();if(bytes.byteLength!==info.size)return ttJson({error:"Video size does not match authorized upload"},400);
  try{
   const upload=await fetch(info.uploadUrl,{method:"PUT",headers:{"Content-Type":info.mime,"Content-Range":"bytes 0-"+(info.size-1)+"/"+info.size,"Content-Length":String(info.size)},body:bytes,redirect:"manual"});
   if(![200,201,206].includes(upload.status))return ttJson({error:"TikTok did not accept the video file ("+upload.status+")."},502);
   await db.prepare("INSERT INTO tiktok_upload_events(id,account_id,publish_id,created_at,status) VALUES (?,?,?,?,?)").bind(crypto.randomUUID(),signed.session.id,info.publishId,Date.now(),"draft_uploaded").run();
   return ttJson({sent:true,publishId:info.publishId,nextStep:"Open TikTok inbox notifications to review, edit and publish the draft."});
  }catch{return ttJson({error:"TikTok media transfer failed. Retry with a newly generated upload."},502);}
 }
 return ttJson({error:"Not found"},404);
}
