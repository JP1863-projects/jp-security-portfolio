/* CISSP cloud progress sync. Same-origin, recovery code sign-in. No localStorage secrets. */
(() => {
 "use strict";
 const bridge=window.CISSP_SYNC_BRIDGE;
 if(!bridge)return;
 let active=false,accountId=null,revision=null,displayCode=null,inFlight=false,dirty=false,scheduled=null,warning="";
 const $=id=>document.getElementById(id);
 const escape=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 async function api(path,method="GET",payload){
  const opts={method,credentials:"same-origin",headers:{Accept:"application/json"}};
  if(method!=="GET"){opts.headers["Content-Type"]="application/json";opts.body=JSON.stringify(payload||{});}
  const res=await fetch("/api/study/"+path,opts);
  let json;try{json=await res.json()}catch{throw Error("Cloud API did not return JSON");}
  if(!res.ok){const error=Error(json.error||"Cloud request failed");error.status=res.status;error.payload=json;throw error;}
  return json;
 }
 const backupButtons=()=>'<div class="row" style="margin:13px 0"><button class="btn small secondary" id="sync-export">⬇ Export offline backup</button><label class="btn small secondary" for="sync-import">⬆ Import backup</label><input type="file" accept="application/json,.json" id="sync-import" style="position:absolute;width:1px;height:1px;opacity:0"></div>';
 function render(){
  const stat=$("sync-status"),controls=$("sync-controls");if(!stat||!controls)return;
  stat.innerHTML=active?'<span class="pill">☁ Connected securely</span><h3 style="margin:10px 0">Cloud progress is enabled</h3><p class="note">Your account has no email address. Study history syncs between devices signed into this account. Unfinished quiz screens stay local to each device.</p><p class="note">Account ID: <code>'+escape(accountId?.slice(0,8)||"")+'…</code></p>':'<span class="pill">Offline progress saved</span><h3 style="margin:10px 0">Sync your CISSP learning between devices</h3><p class="note">Create a private study account and save its one-time recovery code, or restore one from another device. You can keep studying without an account.</p>';
  if(displayCode){
   stat.innerHTML+='<div class="coach"><h3>Save this recovery code now</h3><p>Anyone holding this code can access your learning progress. This code is shown only during account creation and cannot be retrieved later.</p><code id="sync-code" style="display:block;overflow-wrap:anywhere;padding:11px;border:1px solid #f4c566;border-radius:8px;background:#10151d">'+escape(displayCode)+'</code><button class="btn small gold" id="sync-copy-code" style="margin-top:10px">Copy recovery code</button><button class="btn small secondary" id="sync-hide-code" style="margin:10px">I saved it</button></div>';
  }
  if(warning)stat.innerHTML+='<p role="status" style="color:#ffd382">'+escape(warning)+'</p>';
  controls.innerHTML=(active?'<div class="row"><button class="btn small gold" id="sync-now">↻ Sync now</button><button class="btn small secondary" id="sync-logout">Sign out of cloud account</button></div>':
  '<div class="row"><button class="btn gold" id="sync-create">Create private study account</button></div><div style="margin-top:16px"><label for="sync-recovery" class="note">Already have a recovery code?</label><input id="sync-recovery" type="password" autocomplete="off" placeholder="Paste CISSP1 recovery code" style="display:block;width:100%;max-width:680px;margin:6px 0 9px;padding:12px;background:#181e28;color:#fff;border:1px solid #535d6b;border-radius:9px"><button id="sync-restore" class="btn small secondary">Recover my study account</button></div>')+backupButtons();
  const on=(id,fn)=>{if($(id))$(id).onclick=fn;};
  on("sync-create",create);
  on("sync-restore",restore);
  on("sync-now",()=>sync(true));
  on("sync-logout",logout);
  on("sync-copy-code",async()=>{try{await navigator.clipboard.writeText(displayCode);warning="Recovery code copied. Keep it in a secure password manager.";}catch{warning="Automatic copy unavailable; select the code above and copy it manually.";}render();});
  on("sync-hide-code",()=>{displayCode=null;warning="Keep your recovery code safe; it cannot be shown again.";render();});
  on("sync-export",exportBackup);
  if($("sync-import"))$("sync-import").onchange=importBackup;
 }
 async function create(){
  if(!confirm("Create a new cloud study account? Save the recovery code when it appears. There is no email-based recovery."))return;
  warning="Creating your account…";render();
  try{
   const result=await api("create","POST",{});
   active=true;accountId=result.accountId;revision=result.revision;displayCode=result.recoveryCode;warning="";
   render();await sync(true);
  }catch(e){warning=e.message;render();}
 }
 async function restore(){
  const input=$("sync-recovery"),code=input?.value?.trim();
  if(!code||code.length<75){warning="Enter the complete recovery code.";render();return;}
  warning="Verifying your recovery code…";render();
  try{
   await api("restore","POST",{code});
   if(input)input.value="";
   const me=await api("me");
   active=true;accountId=me.accountId;revision=me.revision;displayCode=null;
   bridge.mergeProgress(me.progress);
   warning="Study progress restored. Syncing local and cloud changes…";render();
   await sync(true);
  }catch(e){warning=e.message;render();}
 }
 async function logout(){
  if(!confirm("Sign out of this device? Local study progress will stay here. Make sure you saved your recovery code."))return;
  try{await api("logout","POST",{});}catch(e){warning=e.message;render();return;}
  active=false;accountId=null;revision=null;displayCode=null;warning="Signed out. Local progress remains available.";render();
 }
 function exportBackup(){
  const data={format:"cissp-study-backup-v1",savedAt:new Date().toISOString(),progress:bridge.getProgress()};
  const blob=new Blob([JSON.stringify(data)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="cissp-study-progress.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  warning="Offline backup downloaded. It contains your study history, not an account recovery code.";render();
 }
 async function importBackup(event){
  const file=event.target.files?.[0];if(!file)return;
  if(file.size>950000){warning="Backup is too large.";render();return;}
  try{
   const data=JSON.parse(await file.text());
   if(data.format!=="cissp-study-backup-v1"||!data.progress||!Array.isArray(data.progress.history)||!data.progress.cards||typeof data.progress.cards!=="object"||!Array.isArray(data.progress.sessions)||!Array.isArray(data.progress.snapshots))throw Error("Invalid backup format");
   if(data.progress.history.length>5000||data.progress.sessions.length>200||data.progress.snapshots.length>200||Object.keys(data.progress.cards).length>1000)throw Error("Backup exceeds supported limits");
   const catalog=new Set([...window.CISSP_BANK.questions,...window.CISSP_LEARNING.extras,...(window.CISSP_MORE||[]),...(window.CISSP_PHASE_QUESTIONS||[])].map(q=>q.id));
   if(data.progress.history.some(x=>!x||!catalog.has(x.id)||!Number.isFinite(x.at)||!["A","B","C","D"].includes(x.selected)||typeof x.correct!=="boolean"))throw Error("Backup contains invalid study history");
   for(const [key,v] of Object.entries(data.progress.cards)){if(!/^(?:D[1-8]-\d+|ADV-[1-8]-[1-4]|ACT-[1-8]-[1-2]|NEW-[1-8]-(?:[1-9]|1[0-9]|20)|SEQ-[1-8]-(?:[1-9]|1[0-9]|20)|LEAST-[1-8])$/.test(key)||!v||!Number.isFinite(v.dueAt)||!Number.isFinite(v.lastAt))throw Error("Invalid review card");}
   bridge.mergeProgress(data.progress);
   warning="Offline progress imported and merged; existing history was preserved.";render();
   notifyChange();
  }catch(e){warning="Unable to import backup: "+e.message;render();}
 }
 async function sync(force=false){
  if(!active)return;
  if(inFlight){dirty=true;return;}
  inFlight=true;dirty=false;
  try{
   // Sync is revisioned: on a conflict, merge both sets and retry, never overwrite silently.
   let retries=0;
   while(retries<3){
    try{
     const saved=await api("save","POST",{revision,progress:bridge.getProgress()});
     revision=saved.revision;warning="Cloud progress saved.";break;
    }catch(e){
     if(e.status!==409||!e.payload){throw e;}
     bridge.mergeProgress(e.payload.progress);
     revision=e.payload.revision;retries++;
     if(retries===3)throw Error("Progress changed in another session. Try Sync now again.");
    }
   }
  }catch(e){warning="Cloud sync could not finish: "+e.message+" Your local progress is safe.";}
  finally{
   inFlight=false;render();
   if(dirty){dirty=false;notifyChange();}
  }
 }
 function notifyChange(){
  if(!active)return;
  dirty=true;
  if(scheduled)clearTimeout(scheduled);
  scheduled=setTimeout(()=>{scheduled=null;if(!inFlight){dirty=false;sync(false);}},1200);
 }
 async function initialize(){
  try{
   const me=await api("me");
   active=true;accountId=me.accountId;revision=me.revision;
   bridge.mergeProgress(me.progress);
   warning="Account restored from your secure session.";render();
   await sync(true);
  }catch(e){
   active=false;warning=e.status===401?"":"Cloud sign-in is unavailable right now. Your offline progress is safe.";render();
  }
 }
 window.CISSP_CLOUD={render,notifyChange};
 render();initialize();
})();
