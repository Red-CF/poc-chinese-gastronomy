import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.netlify.app/configuration/
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: '/poc-chinesse-gastronomy'
});
