#!/usr/bin/env node
"use strict";
/**
 * Builds the complete self-hosted CISSP Cloudflare Worker.
 * Run from anywhere: node scripts/build-cissp-worker.cjs
 * Output: dist/cissp-worker.mjs (generated; do not commit).
 */
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const load=(name)=>fs.readFileSync(path.join(root,name),"utf8");
const inline={
 "/":load("index.html"),
 "/index.html":load("index.html"),
 "/cissp-training.html":load("cissp-training.html"),
 "/cissp-question-bank.js":load("cissp-question-bank.js"),
 "/cissp-learning-content.js":load("cissp-learning-content.js"),
 "/cissp-expanded-domains-1-2.js":load("cissp-expanded-domains-1-2.js"),
 "/cissp-expanded-domains-3-4.js":load("cissp-expanded-domains-3-4.js"),
 "/cissp-expanded-domains-5-6.js":load("cissp-expanded-domains-5-6.js"),
 "/cissp-expanded-domains-7-8.js":load("cissp-expanded-domains-7-8.js"),
 "/cissp-phases-domain-1.js":load("cissp-phases-domain-1.js"),
 "/cissp-phases-domain-2.js":load("cissp-phases-domain-2.js"),
 "/cissp-phases-domain-3.js":load("cissp-phases-domain-3.js"),
 "/cissp-phases-domain-4.js":load("cissp-phases-domain-4.js"),
 "/cissp-phases-domain-5.js":load("cissp-phases-domain-5.js"),
 "/cissp-phases-domain-6.js":load("cissp-phases-domain-6.js"),
 "/cissp-phases-domain-7.js":load("cissp-phases-domain-7.js"),
 "/cissp-phases-domain-8.js":load("cissp-phases-domain-8.js"),
 "/cissp-phases-generator.js":load("cissp-phases-generator.js"),
 "/cissp-focus-domain-1.js":load("cissp-focus-domain-1.js"),
 "/cissp-focus-domain-2.js":load("cissp-focus-domain-2.js"),
 "/cissp-focus-domain-3.js":load("cissp-focus-domain-3.js"),
 "/cissp-focus-domain-4.js":load("cissp-focus-domain-4.js"),
 "/cissp-focus-domain-5.js":load("cissp-focus-domain-5.js"),
 "/cissp-focus-domain-6.js":load("cissp-focus-domain-6.js"),
 "/cissp-focus-domain-7.js":load("cissp-focus-domain-7.js"),
 "/cissp-focus-domain-8.js":load("cissp-focus-domain-8.js"),
 "/cissp-focus-generator.js":load("cissp-focus-generator.js"),
 "/cissp-cloud-sync.js":load("cissp-cloud-sync.js")
};
const server=load("cloudflare/cissp-sync-worker.js");
if(!server.includes("export default")||!server.includes("CISSP_DB"))throw Error("Worker API source is incomplete");
const code="const INLINE_FILES="+JSON.stringify(inline)+";\n"+server;
const out=path.join(root,"dist/cissp-worker.mjs");
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,code,"utf8");
console.log("Built "+path.relative(root,out)+" ("+Buffer.byteLength(code)+" bytes) with "+Object.keys(inline).length+" static routes");
