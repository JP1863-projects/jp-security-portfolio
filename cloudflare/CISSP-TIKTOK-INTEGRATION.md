# CISSP TikTok Login + Draft Inbox integration

## Status (2026-11-02)
Implementation and database migrations are added to the Cybersecurity Portfolio repository and can be deployed with the existing Cloudflare Worker `jp-cissp-learning`.

**TikTok authentication is not enabled until the reused DragonLabs TikTok developer app is configured for this precise callback and its credentials are provided as Worker secrets.** Cloudflare stores the `TIKTOK_CLIENT_KEY` and `TIKTOK_CLIENT_SECRET` for the **other** DragonLabs Pages project as non-readable secret variables. For safety they cannot be copied from that project via the API.

## Configure the existing developer app
1. In [TikTok for Developers](https://developers.tiktok.com/), open the app that already supports DragonLabs login. Under **Login Kit > Redirect URIs**, add exactly:
   `https://jp-cissp-learning.dragonlabs.workers.dev/api/tiktok/callback`
2. Confirm `user.info.basic` is enabled and approved. For optional Draft Inbox upload, the same TikTok app must also be approved for `video.upload`; the TikTok user must separately grant it.
3. In Cloudflare, go to **Workers & Pages > jp-cissp-learning > Settings > Variables and Secrets**. Add all of:
   - `TIKTOK_CLIENT_KEY`: existing TikTok app's client key.
   - `TIKTOK_CLIENT_SECRET`: same app's client secret, as **Secret**, never as public text.
   - `TIKTOK_TOKEN_KEY`: new random 32-byte AES-256 key, encoded as base64url. Generate locally with `node -e "console.log(require('node:crypto').randomBytes(32).toString('base64url'))"`, save in your password manager, add as **Secret**.
4. Redeploy if Cloudflare requests it. Verify `/api/tiktok/status` returns `configured:true`. Never paste client secrets or the encryption key into chat.
5. Open the game > Sync > Continue with TikTok. For posting, select **Enable Draft Inbox** and approve `video.upload` separately.

## Security model
- OAuth 2.0 via TikTok Login Kit. The server exchanges authorization codes with the client secret and validates per-login state in a short-lived Secure HttpOnly SameSite=Lax cookie.
- On successful authorization, TikTok `open_id` maps to the existing `study_accounts.id`, or a new study account is provisioned. It **does not** merge with a different already-linked cloud account silently.
- Access and refresh tokens stay encrypted using AES-GCM in D1. No token or TikTok client secret is returned in browser API responses.
- CISSP progress continues to sync through the existing revisioned D1 study API; existing browser-local progress and the recovery-code sign-in option are preserved.
- TikTok-linked accounts may request a backup recovery code, issued once and hashed in the study database.
- Disconnecting TikTok deletes the linked authorization record but does not delete study progress. Users should save a recovery code before disconnecting.
- Signed-in users can upload an **explicitly selected** MP4/WebM/MOV (max 20 MiB) or an original eight-second recap generated on their device. The server initializes one `FILE_UPLOAD` draft, encrypts a short-lived upload ticket, validates the returned TikTok upload host, and forwards the media.
- This is **Draft Inbox**, not public Direct Post. The learner opens the TikTok inbox notification, reviews their video, edits caption/visibility and chooses whether to publish. No automatic public posting and no unattended schedule.
- Video scripts do not include quiz questions, answer keys, customer information, watermarks or promotional URLs.
- Deploy TikTok app changes and account security limits carefully. Rate limiting, robust video/media inspection, callback E2E and independent browser tests remain outstanding release gates.

## Source files
- `cloudflare/cissp-tiktok.js` — secure OAuth, token storage/refresh, and Draft Inbox API
- `cissp-tiktok.js` — Sync-tab UI, recap video renderer, opt-in upload and recovery code
- `cloudflare/cissp-study-schema.sql` — `tiktok_links`, `tiktok_upload_events`
- `tests/cissp-tiktok.test.cjs` — security and integration tests
- `scripts/build-cissp-worker.cjs` — reproduces the deployable Worker module

## Useful endpoints
- `GET /api/tiktok/status` — enabled/configuration status (no secrets)
- `GET /api/tiktok/login?mode=basic` — Login Kit authorization
- `GET /api/tiktok/login?mode=draft` — Login Kit authorization including `video.upload`
- `GET /api/tiktok/callback` — registered TikTok OAuth callback
- `GET /api/tiktok/me` — connected identity and approved scope
- `POST /api/tiktok/recovery-code` — one-time backup code for linked study account
- `POST /api/tiktok/unlink` — disconnect, retain CISSP progress
- `POST /api/tiktok/draft/init` — explicitly confirmed, one-video TikTok draft initialization
- `POST /api/tiktok/draft/file` — authenticated media transfer to TikTok's one-time upload URL

For current permissions and upload requirements consult:
- https://developers.tiktok.com/docs/en/login-kit-web
- https://developers.tiktok.com/docs/en/content-posting-api-get-started-upload-content
- https://developers.tiktok.com/docs/en/content-posting-api-media-transfer-guide
