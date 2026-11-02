/* CISSP TikTok companion: login + opt-in draft sharing. */
(()=>{"use strict";
const $=id=>document.getElementById(id);
const safe=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let status=null,profile=null,msg="",video=null,previewUrl="",busy=false;
async function api(path,body){
 const init=body===undefined?{method:"GET",credentials:"same-origin"}:{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)};
 const r=await fetch("/api/tiktok/"+path,init),out=await r.json();
 if(!r.ok)throw Error(out.error||"TikTok request failed");return out;
}
function preview(){
 const v=$("tt-preview");
 if(!v||!video)return;
 if(previewUrl)URL.revokeObjectURL(previewUrl);
 previewUrl=URL.createObjectURL(video);v.src=previewUrl;v.hidden=false;
 const download=$("tt-download");if(download)download.disabled=false;
 const label=$("tt-file-status");if(label)label.textContent=(video.name||"Study recap")+" · "+Math.round(video.size/1024)+" KB";
}
function consentState(){const btn=$("tt-send"),box=$("tt-consent");if(btn)btn.disabled=busy||!video||!box?.checked;}
function render(){
 const root=$("tiktok-panel");if(!root)return;
 const ready=!!status?.configured,connected=!!profile?.connected,upload=!!profile?.canUpload;
 let h='<div class="section-heading"><h2>TikTok learning account</h2><span class="note">Draft Inbox • User-controlled</span></div><div class="panel"><span class="pill">CISSP progress + TikTok</span>';
 if(!status)h+='<p class="note">Checking TikTok connection…</p>';
 else if(!ready)h+='<h3>Activate TikTok connection</h3><p class="note">The existing DragonLabs TikTok developer app needs this CISSP callback URI registered and its credentials made available to this Worker. Offline CISSP study still works.</p><code style="overflow-wrap:anywhere">https://jp-cissp-learning.dragonlabs.workers.dev/api/tiktok/callback</code>';
 else if(!connected)h+='<h3>Save progress using TikTok</h3><p>Sign in with TikTok to connect your identity to the existing CISSP study account. Your quiz answers are private and will not be published.</p><a class="btn gold" href="/api/tiktok/login?mode=basic">Continue with TikTok</a>';
 else{
 h+='<h3>'+safe(profile.displayName||"TikTok learner")+'</h3><p class="note">Connected to your study account. Private progress is saved by the CISSP cloud sync service, not posted to TikTok.</p>';
 h+='<div class="row"><button class="btn small secondary" id="tt-recovery">Create backup recovery code</button><button class="btn small secondary" id="tt-disconnect">Disconnect TikTok</button></div>';
 if(!upload)h+='<p class="note" style="margin-top:15px">TikTok Draft Inbox requires the separate video.upload permission.</p><a href="/api/tiktok/login?mode=draft" class="btn small gold">Enable Draft Inbox</a>';
 }
 h+='<h3 style="margin-top:19px">Create a study video</h3><p class="note">Generate an original eight-second CISSP progress recap or select a prepared MP4, WebM or MOV. You can download the video and publish manually even without TikTok authorization.</p>';
 h+='<div class="row"><button class="btn small gold" id="tt-create">Create 8-second study video</button><label class="btn small secondary" for="tt-file">Choose video</label><input id="tt-file" type="file" accept="video/mp4,video/webm,video/quicktime,.mov" style="position:absolute;width:1px;height:1px;opacity:0"></div>';
 h+='<video id="tt-preview" controls playsinline hidden style="width:100%;max-height:330px;background:#070a12;border-radius:10px;margin:12px 0"></video><p id="tt-file-status" class="note">No video selected.</p>';
 h+='<button class="btn small secondary" id="tt-download" disabled>Download video for manual TikTok posting</button>';
 if(connected&&upload)h+='<label style="display:flex;gap:9px;font-size:13px;margin:13px 0;color:#d8dce5"><input type="checkbox" id="tt-consent">I want to send this video to my TikTok Draft Inbox. I will review it and choose whether to publish inside TikTok.</label><button class="btn" id="tt-send" disabled>Send to TikTok Drafts</button>';
 else h+='<p class="note">Direct draft transfer is available once TikTok Login Kit and video.upload are approved and authorized. Meanwhile, download your video and upload it in the TikTok app.</p>';
 if(msg)h+='<p role="status" class="note" style="color:#f6ce84;margin-top:14px">'+safe(msg)+'</p>';
 h+='</div>';root.innerHTML=h;
 const bind=(id,fn)=>{if($(id))$(id).onclick=fn;};
 bind("tt-recovery",recovery);bind("tt-disconnect",disconnect);bind("tt-create",createVideo);bind("tt-send",send);bind("tt-download",download);
 const input=$("tt-file");if(input)input.onchange=()=>{const file=input.files?.[0];if(!file)return;if(file.size>20*1024*1024||!["video/mp4","video/webm","video/quicktime"].includes(file.type)){msg="Use an MP4, WebM or MOV file under 20 MB.";render();return;}video=file;preview();consentState();};
 if($("tt-consent"))$("tt-consent").onchange=consentState;
 if(video){preview();consentState();}
}
function download(){
 if(!video)return;
 const uri=URL.createObjectURL(video),a=document.createElement("a");a.href=uri;a.download=video.name||"cissp-study-recap.webm";
 document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(uri),1500);
 msg="Video downloaded. Open TikTok and upload it when you are ready.";render();
}
async function refresh(){
 try{status=await api("status");profile=await api("me");}
 catch(e){msg=e.message;}render();
 if(typeof window.location!=="undefined"){
  const u=new URL(window.location.href),result=u.searchParams.get("tiktok");
  if(result){msg=result==="connected"?"TikTok connection completed. Study progress will sync.":"TikTok authorization was not completed: "+result;history.replaceState({},document.title,"/cissp-training.html#sync");document.querySelector('.tab[data-view="sync"]')?.click();render();}
 }
}
async function recovery(){
 if(!confirm("Create a new CISSP recovery code? Existing codes will stop working."))return;
 try{const result=await api("recovery-code",{});const p=document.createElement("div");p.id="tt-recovery-one-time";p.className="coach";p.innerHTML='<h3>Save this code now</h3><code style="overflow-wrap:anywhere">'+safe(result.recoveryCode)+'</code><p>Save in a password manager. Anyone with the code can access this study account.</p><button class="btn small secondary" id="tt-hide-code">I saved it</button>';$("tiktok-panel")?.appendChild(p);$("tt-hide-code").onclick=()=>p.remove();}
 catch(e){msg=e.message;render();}
}
async function disconnect(){
 if(!confirm("Disconnect TikTok? Make sure you saved your CISSP recovery code first."))return;
 try{await api("unlink",{});msg="TikTok disconnected. Study progress remains saved.";await refresh();}
 catch(e){msg=e.message;render();}
}
function makeFrame(ctx,t,score,count){
 const w=540,h=960,g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,"#0d1425");g.addColorStop(.55,"#3b1927");g.addColorStop(1,"#090d17");ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
 ctx.lineWidth=2;ctx.strokeStyle="rgba(246,199,107,.24)";
 for(let i=0;i<6;i++){ctx.beginPath();ctx.arc(270,448,95+i*46+t*40,0,Math.PI*2);ctx.stroke();}
 ctx.textAlign="center";ctx.fillStyle="#f6ca70";ctx.font="bold 29px sans-serif";ctx.fillText("CISSP PRACTICE",270,230);
 ctx.fillStyle="#ffffff";ctx.font="bold 52px sans-serif";
 if(t<.33){ctx.fillText("Think like",270,409);ctx.fillText("a leader.",270,479);}
 else if(t<.68){ctx.fillText(String(count)+" ANSWERED",270,410);ctx.font="bold 31px sans-serif";ctx.fillText(score===null?"Start learning":score+"% correct",270,485);}
 else{ctx.fillText("Risk before",270,409);ctx.fillText("controls.",270,479);}
 ctx.font="22px sans-serif";ctx.fillStyle="#f6ca70";ctx.fillText("Learn  •  Decide  •  Improve",270,778);
}
async function createVideo(){
 if(busy)return;
 if(typeof MediaRecorder==="undefined"||!HTMLCanvasElement.prototype.captureStream){msg="This browser cannot record a video. Choose a prepared MP4 or WebM instead.";render();return;}
 const mime=["video/mp4;codecs=avc1.42E01E","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(x=>MediaRecorder.isTypeSupported(x));
 if(!mime){msg="No compatible browser recorder. Choose a prepared MP4 instead.";render();return;}
 busy=true;msg="Creating the original CISSP study recap…";render();
 const canvas=document.createElement("canvas");canvas.width=540;canvas.height=960;const ctx=canvas.getContext("2d");
 if(!ctx){busy=false;msg="Canvas unavailable.";render();return;}
 const h=window.CISSP_SYNC_BRIDGE?.getProgress()?.history||[],count=h.length,score=count?Math.round(100*h.filter(x=>x.correct).length/count):null;
 const stream=canvas.captureStream(30);let recorder;
 try{recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:1500000});}
 catch(e){busy=false;stream.getTracks().forEach(t=>t.stop());msg="Encoder unavailable. Choose a prepared video.";render();return;}
 const chunks=[],duration=8000,start=performance.now();
 const complete=new Promise((resolve,reject)=>{recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};recorder.onerror=()=>reject(Error("Recording failed"));recorder.onstop=()=>resolve(new Blob(chunks,{type:mime.startsWith("video/mp4")?"video/mp4":"video/webm"}));});
 function frame(now){const p=Math.min(1,(now-start)/duration);makeFrame(ctx,p,score,count);if(p<1&&recorder.state==="recording")requestAnimationFrame(frame);}
 try{
  recorder.start(250);requestAnimationFrame(frame);await new Promise(r=>setTimeout(r,8100));if(recorder.state!=="inactive")recorder.stop();
  const blob=await complete;stream.getTracks().forEach(x=>x.stop());
  if(blob.size<1000||blob.size>20*1024*1024)throw Error("Video not suitable for upload");
  video=new File([blob],"cissp-progress."+(blob.type==="video/mp4"?"mp4":"webm"),{type:blob.type});
  msg="Video ready. Preview it and check the consent box before sending.";busy=false;render();
 }catch(e){stream.getTracks().forEach(x=>x.stop());busy=false;msg=e.message;render();}
}
async function send(){
 if(busy||!video||!$("tt-consent")?.checked)return;
 busy=true;msg="Sending video to TikTok Draft Inbox (not publishing).";render();
 try{
  const init=await api("draft/init",{fileSize:video.size,mime:video.type,consent:true});
  const r=await fetch("/api/tiktok/draft/file",{method:"POST",credentials:"same-origin",headers:{"Content-Type":video.type,"X-TikTok-Upload-Ticket":init.ticket},body:video});
  const result=await r.json();if(!r.ok)throw Error(result.error||"Upload failed");
  msg="Draft sent! Open TikTok inbox notifications to edit and publish when ready.";
 }catch(e){msg="Upload not completed: "+e.message;}
 busy=false;render();
}
window.CISSP_TIKTOK={render,refresh};refresh();
})();