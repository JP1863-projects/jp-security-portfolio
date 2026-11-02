"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const base=path.join(__dirname,"..");
const server=fs.readFileSync(path.join(base,"cloudflare/cissp-sync-worker.js"),"utf8");
const tik=fs.readFileSync(path.join(base,"cloudflare/cissp-tiktok.js"),"utf8");
const client=fs.readFileSync(path.join(base,"cissp-tiktok.js"),"utf8");
test("TikTok components are valid JavaScript and server routes are connected",()=>{
 assert.doesNotThrow(()=>new Function(client));
 assert.doesNotThrow(()=>new Function(tik));
 assert.match(server,/if\(u\.pathname\.startsWith\("\/api\/tiktok\/"\)\)return await tikTokRoute/);
 assert.match(server,/__Host-cissp_session/);
});
test("CISSP posting requires explicit consent and approved upload permission",()=>{
 assert.match(tik,/video\.upload/);
 assert.match(tik,/payload\.consent!==true/);
 assert.match(tik,/ttScope\(signed\.link\.scope,"video\.upload"\)/);
 assert.match(tik,/TikTok Draft Inbox/);
 assert.doesNotMatch(tik,/\/v2\/post\/publish\/video\/init\//);
 assert.match(tik,/\/v2\/post\/publish\/inbox\/video\/init\//);
 assert.match(client,/tt-consent/);
 assert.match(client,/Download video for manual TikTok posting/);
 assert.match(client,/function download\(/);
 assert.match(client,/Preview it/);
 assert.match(client,/review it and choose whether to publish/);
});
test("CISSP OAuth uses server-side token exchange, state verification and secure cookies",()=>{
 assert.match(tik,/TT_STATE_COOKIE="__Host-cissp_tiktok_state"/);
 assert.match(tik,/SameSite=Lax/);
 assert.match(tik,/u\.searchParams\.get\("state"\)!==state/);
 assert.match(tik,/redirect_uri:TT_CALLBACK/);
 assert.match(tik,/client_secret:env\.TIKTOK_CLIENT_SECRET/);
 assert.match(tik,/AES-GCM/);
 assert.match(tik,/sessionCookie\(sessionToken\)/);
 assert.doesNotMatch(client,/(client_secret|access_cipher|refresh_cipher)/);
});
test("untrusted TikTok upload destinations are rejected and video uploads constrained",()=>{
 assert.match(tik,/ttUploadHost\(result\.upload_url\)/);
 assert.match(tik,/TT_VIDEO_MAX=20\*1024\*1024/);
 assert.match(tik,/request\.headers\.get\("Origin"\)/);
 assert.match(tik,/Content-Range/);
 assert.match(tik,/redirect:"manual"/);
 assert.match(tik,/draft_uploaded/);
});
test("TikTok does not replace existing CISSP recovery-code progress",()=>{
 assert.match(tik,/getAuth\(request,db\)/);
 assert.match(tik,/ttLinkFor\(env\.CISSP_DB,session\.id\)/);
 assert.match(tik,/linked_to_other_account/);
 assert.match(tik,/UPDATE study_accounts SET recovery_hash/);
 assert.match(client,/CISSP_SYNC_BRIDGE/);
});
