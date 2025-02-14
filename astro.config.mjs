import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';  // Cambiar a este adaptador si usas Netlify


export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing:{
      prefixDefaultLocale: false,
    }
  },

  output: 'static',
  integrations: [tailwind(), react()],
});
