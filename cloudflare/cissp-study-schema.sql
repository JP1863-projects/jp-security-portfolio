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
