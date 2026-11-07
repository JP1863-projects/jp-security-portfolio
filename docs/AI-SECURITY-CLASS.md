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

36 distinct original questions, four shuffled options each, plus explanations and missed-answer review. Mixed practice uses two questions from each domain (12 total), intentionally balanced for learning rather than exam weighted. No full mock exam is included.

## Sources and scope

- ISC2 pilot outline and status: https://www.isc2.org/new-ai-certification
- NIST AI RMF: https://www.nist.gov/itl/ai-risk-management-framework
- OWASP excessive agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/

Examples, exercises, and questions are original fictional applications of general security principles. Links are further reading, not an assertion that every sentence is quoted or prescribed by those sources. The class does not reproduce the full outline. Detailed ML methods, cryptographic techniques, fairness measurement, jurisdiction-specific law, and advanced adversarial testing require additional study.

## Maintenance

Content: `ai-security-content.js`; behavior: `ai-security.js`; styling: `ai-security.css`. Data uses the first answer as correct; runtime shuffles choices and questions. Do not label practice items as real exam questions. Recheck ISC2 before changing outline claims or weights.

Progress, notes, last lesson, and missed items use `jp-ai-security-v1` localStorage. There is no account or server sync. Blocking storage degrades to memory for the visit. Reset asks before deleting local class progress. Notes render as text. Use synthetic data, not confidential material.

Validation: `node --test tests/ai-security.test.cjs tests/identity-security-quiz.test.cjs`; `node --check ai-security.js`.
