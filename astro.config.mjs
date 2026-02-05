import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import mdx from "@astrojs/mdx";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap({
    filter: page => page !== 'https://ewanlyon.com/riv'
  }), mdx()],

  site: 'https://ewanlyon.com/',
  output: 'server',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});