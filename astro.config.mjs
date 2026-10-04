import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap({
    filter: page => page !== 'https://ewanlyon.com/riv'
  }), mdx(), markdoc(), keystatic()],

  site: 'https://ewanlyon.com/',
  output: 'server',
  adapter: vercel(),

});