const test = require("node:test");
const assert = require("node:assert/strict");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "cissp-question-bank.js"), "utf8"), context);
const bank = context.window.CISSP_BANK;

test("complete bank has 8 domains, 128 cores, and 520 playable variants", () => {
  assert.equal(bank.domains.length, 8);
  assert.equal(bank.questions.length, 520);
  assert.equal(bank.questions.filter(q => q.id.startsWith("D")).length, 512);
  assert.equal(new Set(bank.questions.filter(q => q.id.startsWith("D")).map(q => q.id.replace(/-\d+$/, ""))).size, 128);
  assert.equal(new Set(bank.questions.map(q => q.id)).size, 520);
  assert.equal(bank.weights.reduce((s, n) => s + n, 0), 100);
});

test("all answer keys are valid with distinct choices", () => {
  for (const q of bank.questions) {
    assert.equal(q.options.length, 4, q.id);
    assert.deepEqual(Array.from(q.options, o => o.id).sort(), ["A", "B", "C", "D"], q.id);
    assert.equal(new Set(q.options.map(o => o.text)).size, 4, q.id);
    assert.equal(q.options.filter(o => o.id === q.answer).length, 1, q.id);
  }
});

test("questions contain the management-mindset coaching fields", () => {
  const required = ["scenario","prompt","engineer_instinct","why_instinct_feels_right","hidden_cissp_keyword","what_isc2_is_testing","manager_vs_engineer","memorization_tip","principle","bias"];
  for (const q of bank.questions) {
    for (const prop of required) assert.ok(typeof q[prop] === "string" && q[prop].length > 4, q.id + " missing " + prop);
    assert.ok(bank.patterns.includes(q.bias), q.id);
    assert.ok(q.domain >= 0 && q.domain <= 7, q.id);
    assert.ok(["Easy","Medium","Hard"].includes(q.difficulty), q.id);
  }
});

test("bias detection targets engineering-first answer; LEAST questions are exempt", () => {
  for (const q of bank.questions) {
    if (q.type === "LEAST") {
      assert.equal(q.engineerOptionId, null, q.id);
    } else {
      assert.ok(q.options.some(o => o.id === q.engineerOptionId), q.id);
      assert.notEqual(q.engineerOptionId, q.answer, q.id);
    }
  }
});

test("six wording categories and each domain are represented", () => {
  assert.deepEqual([...new Set(bank.questions.map(q => q.type))].sort(), ["BEST","FIRST","LEAST","MOST","NEXT","PRIMARY"]);
  for (let d = 0; d < 8; d++) assert.equal(bank.questions.filter(q => q.domain === d).length, 65);
});
