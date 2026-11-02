# CISSP Adaptive Bias Engine — Cloudflare deployment

## Live architecture
- Portfolio source: `JP1863-projects/jp-security-portfolio` on GitHub (`main`)
- Static quiz assets and same-origin account API: Cloudflare Worker `jp-cissp-learning`
- Public URL: `https://jp-cissp-learning.dragonlabs.workers.dev/cissp-training.html`
- D1 binding: `CISSP_DB` (database `jp-cissp-study-progress`)
- Authentication: one-time 256-bit recovery code, SHA-256 stored digest; 30-day HttpOnly/Secure/SameSite=Strict cookie sessions
- Progress: revisioned account snapshot in D1; browser localStorage supports offline practice and in-progress quizzes
- No email/password signup or OAuth in this release

## Deployment from repository checkout

Requirements: Node.js 22+, Wrangler 4+, authenticated Cloudflare account with Workers Write and D1 access.

```bash
node scripts/build-cissp-worker.cjs
node --check dist/cissp-worker.mjs
npx wrangler deploy --config cloudflare/cissp.wrangler.jsonc
```

Run `node --test tests/cissp-*.test.cjs` before deployment.
The build command embeds the repository's static pages and question modules in the Worker. The resulting `dist/` file is generated and should not be committed.

## Provisioning and database

Schema: `cloudflare/cissp-study-schema.sql`. D1 database `jp-cissp-study-progress` has been created on the authenticated Cloudflare account with US jurisdiction.
For an independently created environment, create a separate D1 database and update the binding ID. Do not run migrations against unrelated D1 databases.

## Security and privacy

Recovery codes are equivalent to passwords. They are shown once; the backend never returns them through the account-status endpoint. Only a cryptographic hash is stored. Losing the recovery code and all authenticated sessions means there is no self-service recovery path.
The user's study history is not sold or shared by the application; progress resides on their browser and, if they enable sync, in D1. The learner may sign out and export local progress at any time. The account-delete API can irreversibly remove the D1 data after authentication and confirmation.

### Security review to complete before broad public promotion
- Add edge rate limits and abuse protections to account creation and recovery attempts.
- Move inline application JavaScript into immutable static assets so CSP can remove `unsafe-inline`.
- Monitor signup load, authentication failure counts, cookie behavior and D1 query errors without logging recovery tokens.
- Include a transparent privacy notice and data-retention policy appropriate to public users.
- Perform independent browser E2E and accessibility testing.

## Release checks

1. Confirm `node --test tests/cissp-*.test.cjs` passes and the Worker builds with `node --check`.
2. Deploy with Wrangler; verify the worker keeps the `CISSP_DB` binding.
3. In a browser, open the live game and complete a five-question practice. Confirm the 2,028-variant bank and explanations.
4. Open Sync; create an account and **save the displayed recovery code**.
5. In a separate browser/device, restore using that code, confirm historical answers are present.
6. Make different practice changes on both devices and confirm revision conflicts merge rather than overwrite progress.
7. Export an offline backup. Test import without losing prior history.
8. Verify sign-out preserves local results.

## Limits and disclosures
- Fixed 125-question session is an **unofficial practice simulation**, not the ISC2 CAT algorithm.
- The readiness percentage appears after 25 answered questions and is a learning heuristic, not an exam pass prediction.
- The question bank contains 2,028 variants from 604 distinct case families, not 568 calibrated unique items.
- Current exam outline effective April 15, 2024; updated outline effective April 15, 2027. See the official ISC2 exam outline.
- The production connection from this GitHub account to Cloudflare Pages was previously rejected. Direct Worker deployments are used for this release. Git changes alone do not automatically update the live Worker.

## November 2026: decision-sequence expansion (+800)

The question bank now includes **2,028 playable question items** generated from **604 underlying case families**. The latest expansion contributes 160 new domain-aligned case studies (20 per domain) and five distinct decision-stage questions per case (800 items total). The five stages ask for assessment, risk-treatment choice, approved execution, validation, and correction after a new finding. This supports structured reasoning about what has already been completed.

These 800 items are **not 800 independently calibrated exam questions**; they are related case variations and are explicitly marked original/unreviewed. Do not use performance on related stages as an independent pass-probability estimate. A certified CISSP subject matter expert should validate the decision ordering and distractor plausibility before broad public promotion.

The new question modules are `cissp-phases-domain-1.js` through `cissp-phases-domain-8.js`, assembled by `cissp-phases-generator.js` and tested by `tests/cissp-phases.test.cjs`.

## Control Focus expansion — +500

Eight new `cissp-focus-domain-N.js` source files and `cissp-focus-generator.js` add 500 new question items across 100 related case families. The full question bank now has **2,028 playable items from 604 case families**. The Control Focus mode selects 20 different cases per session. New answers are evenly distributed across letters and are marked original/unreviewed; domain mapping and item calibration require further expert review.
