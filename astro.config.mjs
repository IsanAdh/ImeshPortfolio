import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Used for canonical URLs, sitemap, RSS and social cards
  site: 'https://caimesh.com.np',
  integrations: [sitemap()],
});
