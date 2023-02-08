import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap({
    filter: (page) => page !== 'https://ewanlyon.com/riv',
  })],
  site: 'https://ewanlyon.com/',
  output: "server",
  adapter: vercel()
});