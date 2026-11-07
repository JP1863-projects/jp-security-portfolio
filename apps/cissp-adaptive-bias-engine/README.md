# CISSP Adaptive Bias Engine

An original, independent CISSP preparation application focused on management judgment, risk ownership, and recognizing engineering-first answer traps. Not endorsed by ISC2; practice readiness is not an official exam predictor.

## Status

**Phase 1:** Database schema and planned architecture. No functioning quiz or production deployment yet.

## Integration

Existing portfolio: `JP1863-projects/jp-security-portfolio` (static HTML). This app lives under `apps/cissp-adaptive-bias-engine` to avoid changing the employer-facing website. Later, add a card in the portfolio Training menu linking to the independently deployed app.

## Planned application tree

```text
apps/cissp-adaptive-bias-engine/
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── components.json
├── prisma.config.ts
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── prisma/
│   ├── schema.prisma                 # Phase 1: implemented
│   ├── migrations/
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── (auth)/sign-in/page.tsx
│   │   ├── (learn)/learn/page.tsx
│   │   ├── (learn)/quiz/[attemptId]/page.tsx
│   │   ├── (learn)/review/[attemptId]/page.tsx
│   │   ├── (learn)/dashboard/page.tsx
│   │   ├── (learn)/biases/page.tsx
│   │   ├── (learn)/mock-exams/page.tsx
│   │   ├── api/auth/[...nextauth]/route.ts
│   │   ├── api/quiz/start/route.ts
│   │   ├── api/question/answer/route.ts
│   │   ├── api/user/readiness/route.ts
│   │   ├── api/user/biases/route.ts
│   │   ├── api/dashboard/route.ts
│   │   └── api/recommendations/route.ts
│   ├── components/
│   │   ├── ui/
│   │   ├── quiz/QuestionCard.tsx
│   │   ├── quiz/CoachPanel.tsx
│   │   ├── dashboard/ReadinessGauge.tsx
│   │   └── dashboard/DomainChart.tsx
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── prisma.ts
│   │   ├── schemas/
│   │   ├── adaptive/
│   │   ├── scoring/
│   │   └── questions/
│   ├── generated/prisma/
│   └── types/
├── bias-engine/
│   ├── pyproject.toml
│   ├── cissp_bias/
│   │   ├── __init__.py
│   │   ├── engine.py
│   │   └── models.py
│   └── tests/
│       ├── test_engine.py
│       └── test_state_machine.py
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│       └── quiz.spec.ts
└── .github/workflows/  # CI may alternatively run at repository root
```

## Technology selection

- Next.js 15 App Router, React, TypeScript, TailwindCSS, shadcn/ui
- Next.js route handlers for authenticated APIs and PostgreSQL access
- PostgreSQL + Prisma ORM; Auth.js/NextAuth with Prisma adapter
- Recharts for dashboard visualizations
- Pure Python bias-analysis package for research, testing, and validation. Production scoring will use a port in TypeScript unless a separately deployed Python API is justified.
- Vitest, Playwright, pytest + Hypothesis for unit, E2E, and properties
- Vercel application deployment; managed PostgreSQL; Docker Compose for local development

## Design rules

1. The browser never receives the correct answer or post-answer explanation before the attempt is committed.
2. Question content is original, reviewed, and versioned. No copyrighted real exam items are copied.
3. Enforce authenticated attempt ownership on every endpoint. Answer submission must be idempotent and transactional.
4. `engineerBiasIndex` is a *negative* metric: higher means more unwanted bias. Use `biasResistanceScore = 100 - engineerBiasIndex` when calculating higher-is-better readiness.
5. Mock CAT is an **unofficial simulation**. Fixed 125-question practice is not equivalent to the ISC2 computer-adaptive test; ability estimation must be validated before claiming psychometric reliability.
6. A readiness percentage is a learning heuristic until externally calibrated, not a predicted CISSP passing probability.
7. Never log access tokens, session cookies, correct-answer keys, or private question payloads.
8. Permit question review and blueprint migration when the ISC2 exam outline changes.

## Build order

1. **Done:** Prisma schema and planned folder tree.
2. App scaffolding, DB migration and authentication.
3. Reviewed question seed, quiz lifecycle and secured answers.
4. Adaptive selection, TypeScript bias scoring and Python reference engine.
5. Coaching, dashboard, practice and CAT-like simulation.
6. Tests, Docker, GitHub Actions, deployment and portfolio navigation integration.
