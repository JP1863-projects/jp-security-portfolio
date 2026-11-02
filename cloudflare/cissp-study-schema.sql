-- CISSP Adaptive Bias Engine, Cloudflare D1 account-sync database.
-- Accounts use random recovery codes, not email/password credentials.
-- Recovery codes and session tokens are hashed with SHA-256 before storage.
CREATE TABLE IF NOT EXISTS study_accounts (
  id TEXT PRIMARY KEY,
  recovery_hash TEXT NOT NULL UNIQUE,
  progress_json TEXT NOT NULL DEFAULT '{}',
  revision INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS study_sessions (
  token_hash TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES study_accounts(id) ON DELETE CASCADE,
  expires_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_cissp_session_account ON study_sessions(account_id);
CREATE INDEX IF NOT EXISTS idx_cissp_session_expiry ON study_sessions(expires_at);


-- TikTok OAuth identity is linked to the same CISSP study account.
-- Access and refresh tokens are encrypted with AES-GCM by a Worker secret.
CREATE TABLE IF NOT EXISTS tiktok_links (
  open_id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL UNIQUE REFERENCES study_accounts(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL DEFAULT '',
  scope TEXT NOT NULL DEFAULT '',
  access_cipher TEXT NOT NULL,
  refresh_cipher TEXT NOT NULL,
  access_expires_at INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS tiktok_upload_events (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES study_accounts(id) ON DELETE CASCADE,
  publish_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft_uploaded'
);
CREATE INDEX IF NOT EXISTS idx_tiktok_upload_account ON tiktok_upload_events(account_id, created_at);
