# CyberForge Academy

A Next.js 16 training application in the Jonathan Perry portfolio repository. It builds for Cloudflare Workers with vinext from the `cyberforge` directory; the existing static portfolio remains a separate deployment.

## Included

- 13 original cybersecurity and AI security modules with written lessons, scenarios, five-question assessments, and flashcards.
- Seven synthetic, decision-based browser labs. No arbitrary code execution or live targets.
- Clerk sign-in, private progress, 75% assessment threshold, idempotent XP, badges, ranks, UTC streaks, anonymous leaderboard, and spaced review.
- AI coach with PostgreSQL pgvector retrieval, source labels, a daily per-learner limit, and OpenAI Responses API. Retrieved text is treated as data.
- Responsive keyboard-accessible UI and server-side authorization on every write route.

Path completion certificates unlock after all modules in a track. They are portfolio training milestones, not third-party certifications. The coach offers explanations, practice questions, and non-scoring feedback on responses. Videos are identified as in production and are not yet available.

## Setup

1. Create a PostgreSQL database with the `vector` extension available, a Clerk application, an OpenAI API key, and a Cloudflare Workers project named `cyberforge-academy`.
2. Copy `.env.example` to `.env.local` and set the values locally. Configure `DATABASE_URL`, `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, and `OPENAI_API_KEY` as Worker secrets. The publishable key also must be available to the build environment. Never commit secrets. Set the Clerk production domain and allowed redirect URLs to your eventual academy domain.
3. Run `npm ci`, `npx prisma migrate deploy`, then `npm run db:ingest` to embed the curated source passages (39 embedding calls). The embedding model must output 1536 dimensions. The database user needs permission to install `vector`, or a DBA must enable it first.
4. Run `npm run dev`. Build with `npm run build:vinext` and deploy with `npm run deploy:vinext` after connecting the correct Cloudflare account. Apply migrations and ingest before opening registration to users. The Worker uses a request-scoped Prisma PostgreSQL driver. Configure your PostgreSQL provider for remote TCP/TLS access; Hyperdrive can be added after its account binding exists. Use a direct database connection for migrations.
5. Add a link to the deployed Workers URL in the portfolio site's Training menu after deployment. Until a URL exists, no dead link is added to the live static site.

### Verify

`npm test`, `npm run typecheck`, `npm run build`, `npm run build:vinext`. Live authentication, database writes, retrieval, and OpenAI calls require configured services and a staging smoke test before public launch. The local preview could not start in this workspace because the host blocks network interface enumeration.

### Security and operational notes

Server-side routes derive the learner from Clerk, validate input, reject cross-origin writes, and never accept a learner ID from the browser. Assessment answers stay in the server bundle except when returned after grading. XP awards are unique per module or lab. Coach calls are capped at 20 per learner per UTC day; set provider-level spend limits as well. The CSP needs review with your actual Clerk custom domain and any added video provider. The anonymous leaderboard uses rank placeholders, not names. Learning content is original training material, not an official certification course.

For a public service, add monitored database backups, retention/deletion workflows, abuse controls at the edge, accessibility and mobile browser QA, and a service-status/runbook before broad promotion.
