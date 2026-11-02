"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const {webcrypto}=require("node:crypto");
const fs=require("node:fs");
const path=require("node:path");
const workerSource=fs.readFileSync(path.join(__dirname,"../cloudflare/cissp-sync-worker.js"),"utf8");
const build=new Function("INLINE_FILES","crypto",workerSource.replace("export default {","const worker = {")+"\nreturn worker;");
const worker=build({"/":"<html><title>CISSP</title></html>"},webcrypto);
class FakeD1{
 constructor(){this.accounts=new Map();this.sessions=new Map();}
 prepare(sql){const db=this;let args=[];return {
  bind(...values){args=values;return this;},
  async first(){
   if(sql.startsWith("SELECT a.id,a.revision")){const s=db.sessions.get(args[0]);const a=s&&db.accounts.get(s.account_id);if(!s||!a||s.expires_at<=args[1])return null;return {id:a.id,revision:a.revision,progress_json:a.progress_json,token_hash:args[0],expires_at:s.expires_at};}
   if(sql.startsWith("SELECT id FROM study_accounts")){const a=db.accounts.get(args[0]);return a&&a.recovery_hash===args[1]?{id:a.id}:null;}
   if(sql.startsWith("SELECT revision,progress_json")){const a=db.accounts.get(args[0]);return a?{revision:a.revision,progress_json:a.progress_json}:null;}
   throw Error("Unsupported first "+sql);
  },
  async run(){
   if(sql.startsWith("INSERT INTO study_accounts")){db.accounts.set(args[0],{id:args[0],recovery_hash:args[1],progress_json:args[2],revision:0});return {meta:{changes:1}};}
   if(sql.startsWith("INSERT INTO study_sessions")){db.sessions.set(args[0],{token_hash:args[0],account_id:args[1],expires_at:args[2]});return {meta:{changes:1}};}
   if(sql.startsWith("UPDATE study_accounts")){const a=db.accounts.get(args[1]);if(!a||a.revision!==args[2])return {meta:{changes:0}};a.progress_json=args[0];a.revision++;return {meta:{changes:1}};}
   if(sql.startsWith("DELETE FROM study_sessions WHERE token_hash")){db.sessions.delete(args[0]);return {meta:{changes:1}};}
   if(sql.startsWith("DELETE FROM study_sessions WHERE account_id")){for(const [k,s] of db.sessions)if(s.account_id===args[0])db.sessions.delete(k);return {meta:{changes:1}};}
   if(sql.startsWith("DELETE FROM study_accounts")){db.accounts.delete(args[0]);return {meta:{changes:1}};}
   throw Error("Unsupported run "+sql);
  }
 }};}
}
const ORIGIN="https://cissp.example";
function req(p,method="GET",payload=null,cookie="",origin=ORIGIN){
 const headers={};if(method!=="GET"){headers.Origin=origin;headers["Content-Type"]="application/json";}
 if(cookie)headers.Cookie=cookie;
 return new Request(ORIGIN+p,{method,headers,body:method==="GET"?undefined:JSON.stringify(payload||{})});
}
async function go(db,p,method="GET",payload=null,cookie="",origin=ORIGIN){const response=await worker.fetch(req(p,method,payload,cookie,origin),{CISSP_DB:db});return {response,data:await response.json()};}
test("static content served through the same worker",async()=>{
 const response=await worker.fetch(req("/"),{CISSP_DB:new FakeD1()});
 assert.equal(response.status,200);assert.match(await response.text(),/CISSP/);
});
test("secure account lifecycle, revocation, and revision conflicts",async()=>{
 const db=new FakeD1();
 const made=await go(db,"/api/study/create","POST",{});
 assert.equal(made.response.status,201);
 assert.match(made.data.recoveryCode,/^CISSP1\.[0-9a-f-]+\.[\w-]{43}$/);
 assert.equal(db.accounts.size,1);
 assert.notEqual([...db.accounts.values()][0].recovery_hash,made.data.recoveryCode);
 const header=made.response.headers.get("Set-Cookie");
 assert.match(header,/HttpOnly/);assert.match(header,/Secure/);assert.match(header,/SameSite=Strict/);
 assert.ok(!header.includes(made.data.recoveryCode));
 const cookie=header.split(";")[0];
 const me=await go(db,"/api/study/me","GET",null,cookie);
 assert.equal(me.response.status,200);assert.equal(me.data.revision,0);
 const progress={history:[{id:"D1-1-1",at:Date.now(),selected:"B",domain:0,correct:false,bias:"PATCH_FIRST",difficulty:"Medium",confidence:"low"}],sessions:[],snapshots:[],cards:{}};
 const saved=await go(db,"/api/study/save","POST",{revision:0,progress},cookie);
 assert.equal(saved.response.status,200);assert.equal(saved.data.revision,1);
 const conflict=await go(db,"/api/study/save","POST",{revision:0,progress},cookie);
 assert.equal(conflict.response.status,409);assert.equal(conflict.data.revision,1);
 const bad=await go(db,"/api/study/restore","POST",{code:made.data.recoveryCode.slice(0,-3)+"abc"});
 assert.equal(bad.response.status,401);
 const restored=await go(db,"/api/study/restore","POST",{code:made.data.recoveryCode});
 assert.equal(restored.response.status,200);
 const otherCookie=restored.response.headers.get("Set-Cookie").split(";")[0];
 const other=await go(db,"/api/study/me","GET",null,otherCookie);
 assert.equal(other.data.progress.history.length,1);
 assert.equal(other.data.progress.history[0].id,"D1-1-1");
 const signedOut=await go(db,"/api/study/logout","POST",{},cookie);
 assert.equal(signedOut.response.status,200);
 const revoked=await go(db,"/api/study/me","GET",null,cookie);
 assert.equal(revoked.response.status,401);
 const deleted=await go(db,"/api/study/delete","POST",{confirm:"DELETE"},otherCookie);
 assert.equal(deleted.response.status,200);assert.equal(db.accounts.size,0);
});
test("reject cross-site writes and invalid progress",async()=>{
 const db=new FakeD1();
 const blocked=await go(db,"/api/study/create","POST",{},null,"https://attacker.example");
 assert.equal(blocked.response.status,403);
 const created=await go(db,"/api/study/create","POST",{});
 const cookie=created.response.headers.get("Set-Cookie").split(";")[0];
 const invalid=await go(db,"/api/study/save","POST",{revision:0,progress:{history:"not-an-array",sessions:[],snapshots:[],cards:{}}},cookie);
 assert.equal(invalid.response.status,400);
 const old=await go(db,"/api/study/save","POST",{revision:0,progress:{history:[{id:"NOT-VALID",at:Date.now(),selected:"A",domain:0,correct:true}],sessions:[],snapshots:[],cards:{}}},cookie);
 assert.equal(old.response.status,200);
 const next=await go(db,"/api/study/me","GET",null,cookie);
 assert.equal(next.data.progress.history.length,0);
});
