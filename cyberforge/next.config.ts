import type { NextConfig } from 'next';
const nextConfig: NextConfig = { poweredByHeader: false, turbopack: { root: process.cwd() }, async headers() { return [{ source: '/(.*)', headers: [
{ key: 'X-Content-Type-Options', value: 'nosniff' }, { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
{ key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://*.clerk.accounts.dev https://*.clerk.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://img.clerk.com; connect-src 'self' https://*.clerk.accounts.dev https://*.clerk.com; frame-src https://*.clerk.accounts.dev https://*.clerk.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://*.clerk.accounts.dev https://*.clerk.com" }
] }]; } };
export default nextConfig;
