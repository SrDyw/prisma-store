import { defineConfig } from 'astro/config';
import auth from "auth-astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [auth()],
  adapter: vercel()
});