import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "cyberforge-academy",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-17",
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      DATABASE_URL: bindings.secret(),
      CLERK_SECRET_KEY: bindings.secret(),
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: bindings.secret(),
      OPENAI_API_KEY: bindings.secret(),
    },
  }),
});
