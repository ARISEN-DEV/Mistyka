import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: 'https://ARISEN-DEV.github.io',

  build: {
    assets: 'assets'
  },

  integrations: [react(), tailwind(), relativeLinks()]
});