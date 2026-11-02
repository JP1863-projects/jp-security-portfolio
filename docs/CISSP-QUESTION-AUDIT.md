# CISSP Question Quality Audit — November 2026

## Scope and authority
This is an editorial and programmatic review of **original practice questions**, not an ISC2 item review, statistical item calibration, or an endorsement. Consult the current [ISC2 exam outline](https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline) for domain objectives. The 2024 outline is effective through April 14, 2027; a new outline takes effect April 15, 2027.

## Coverage
- 8 domains with 2024 weights: 16%, 10%, 13%, 13%, 13%, 12%, 13%, 10%
- 728 question variants
- 344 distinct scenario families: 128 original core + 8 LEAST cases + 32 advanced decision cases + 16 approved-technical-execution cases + 160 new domain-focused scenarios
- Core scenario families appear in four organization settings. Treat these as variants, not independently calibrated items.
- Six prompt keywords: BEST, MOST, FIRST, NEXT, PRIMARY, LEAST
- 11 tracked mindset patterns. A bias is recorded only if the learner selects the identified trap; other wrong choices are not automatically counted as engineering bias.

## Findings and remediation

### A. Plausibility of distractors
A heuristic flagged any variant where **all three wrong answers** contain a conspicuous warning word, including "always," "never," "immediately," "ignore," "assume," "buy" and "every."

- Before: 140 question variants
- After: 0 under that specific lexical rule
- Remediation: rewrote all three distractors for 33 distinct core cases, affecting 132 variants.

This is a narrow lint signal. Zero flags does not prove the distractors are psychometrically strong or unambiguous.

### B. Single-rule guessing hazard
The original practice bank emphasized governance and risk analysis even when the question's established facts might warrant a tactical action.

- Remediation: 16 new scenarios across the eight domains explicitly state that scope, authority and prerequisites have been satisfied, and require a justified technical execution or validation step.
- These scenarios carry no engineer-first bias attribution merely for selecting a technical control.

### C. Answer-position bias
The 32 advanced questions are balanced across A/B/C/D (8 each). Newly added technical-action scenarios also use deterministic rotation, avoiding a single correct-answer letter.

### D. Misleading readiness interpretations
Readiness is a custom learning heuristic, not an ISC2 scaled score, CAT algorithm, expected probability of passing, or formally validated proficiency measure. Further calibration requires a larger expert-reviewed item pool, response-time analysis, item discrimination and evidence from real learner outcomes.

## Remaining open review gates
1. **Expert review:** a CISSP-certified subject-matter expert should check each item for one defensible best answer, question stem clarity, necessary assumptions and blueprint mapping.
2. **Difficulty calibration:** current "Easy/Medium/Hard" labels are editorial; gather anonymous aggregate item-performance data before psychometric conclusions.
3. **Cloned contexts:** do not count four setting variants as four independent mastery data points.
4. **Timed exams:** label the fixed 125-question practice as a simulation, not an authentic CAT.
5. **2027 transition:** maintain separate blueprint versioning; update both topic coverage and weights before the new outline becomes effective.
6. **Technical coverage:** expand objective-level coverage of cryptography, physical security, networking protocols, formal models, SDLC, IAM federation and legal nuances beyond judgment-focused scenarios.

## November 2026 — expansion review

Added 160 original, domain-specific scenarios (20 per domain), bringing the bank to 728 variants and 344 distinct scenario families. These are marked original/unreviewed and must receive expert review before they are described as calibrated certification-exam items.

The expansion adds topics including cryptography, secure boot, network protocols, identity federation, object authorization, third-party assurance, digital forensics, incident recovery, and secure software supply chains. New answer keys have a balanced A/B/C/D distribution (40 each). All new scenario stems are distinct by exact text; this does not guarantee psychometric independence.

## Recommended passing-efficiency features
- Confidence-weighted feedback: confidently wrong answers should trigger deeper remediation, not just a retry.
- Spaced retrieval on the *scenario family*, not just a reworded variant.
- Short domain micro-lessons before repeated errors.
- A daily sequence: due review → 10 fresh domain-targeted scenarios → explain the strongest distractor.
- A hard stop on unsupported "pass prediction" claims, because official exam items and scoring are not available.
