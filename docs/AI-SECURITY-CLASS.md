# AI Security Study Class

Entry: `ai-security-training.html`, linked from the portfolio Training menu.

Independent introductory study material mapped to the six domains and weights on https://www.isc2.org/new-ai-certification (reviewed November 6, 2026). This is a pilot outline, not a final operational certification. Original teaching text and questions are not official ISC2 items or endorsed training. The class is focused review, not exhaustive objective coverage or a readiness predictor.

## Learning design

Six suggested weeks, two lessons per week; approximately 30–45 minutes per lesson including the self-assessed exercise. Each lesson has Read → Apply → Check screens and three scenario questions. Learners can open any lesson. Completion records finishing the three questions; scores and explanations distinguish participation from performance. The exercise checklist supports self-review and is not automatically graded.

| Week / pilot domain | Weight | Original lesson focus |
|---|---:|---|
| 1 / AI concepts and security fundamentals | 10% | Data paths; evaluation evidence |
| 2 / Governance, ethics, risk and compliance | 17% | Accountable decisions; provider review and oversight |
| 3 / Data management, privacy and model security | 19% | Derived data; artifact integrity |
| 4 / Architecture, engineering and IAM | 18% | Agent permissions; enforced boundaries |
| 5 / Operations and incident response | 19% | Evidence design; containment and recovery |
| 6 / Threats, testing and lifecycle management | 17% | Reproducible tests; regression and release decisions |

436 distinct original questions: the original 36 lesson checkpoints plus 400 new practice items. Every item has four shuffled choices and an explanation. The new bank follows the six domain weights exactly: 40, 68, 76, 72, 76, and 68 questions.

Practice supports 10, 25, 50, or 100 questions. Mixed sessions use largest-remainder allocation against the domain weights; per-domain drills cap at the available pool. There are no repeated IDs within a round. Unattempted questions are prioritized across sessions, and missed items remain available for review. These are learning sessions with immediate explanations, not a timed or psychometrically calibrated mock exam.

## Sources and scope

- ISC2 pilot outline and status: https://www.isc2.org/new-ai-certification
- NIST AI RMF: https://www.nist.gov/itl/ai-risk-management-framework
- NIST adversarial ML taxonomy: https://csrc.nist.gov/pubs/ai/100/2/e2025/final
- OWASP prompt injection: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- OWASP excessive agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

Examples, exercises, and questions are original fictional applications of general security principles. Links are further reading, not an assertion that every sentence is quoted or prescribed by those sources. The class does not reproduce the full outline. The expanded bank includes learning paradigms, evaluation calculations, drift, privacy techniques, supplier risk, lifecycle controls, federated identity, workload permissions, AI telemetry, incident evidence, and adversarial testing. Questions sample the outline; they do not establish exhaustive coverage, measured difficulty, or exam equivalence. Detailed implementation and jurisdiction-specific obligations require further study.

## Maintenance

Lessons: `ai-security-content.js`; authored practice source: `content/ai-security/domain-*.txt`; compiled bank: `ai-security-extra.js`; behavior: `ai-security.js`; styling: `ai-security.css`. Data uses the first answer as correct; runtime shuffles choices and questions. Do not label practice items as real exam questions. Recheck ISC2 before changing outline claims or weights.

Progress, notes, last lesson, attempted question IDs, and missed items use `jp-ai-security-v1` localStorage. There is no account or server sync. Blocking storage degrades to memory for the visit. Reset asks before deleting local class progress. Notes render as text. Use synthetic data, not confidential material.

Validation: `node --test tests/ai-security.test.cjs tests/identity-security-quiz.test.cjs`; `node --check ai-security.js`.

Regenerate the bank with `node scripts/build-ai-security-bank.cjs`; use `--check` in CI to detect stale output. IDs are ordinal within each domain: preserve ordering for existing items to keep saved progress stable. Counts and duplicate checks are automated; correctness is editorially reviewed rather than established by count tests.
