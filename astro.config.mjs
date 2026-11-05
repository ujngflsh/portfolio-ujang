
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://portfolio-ujang.vercel.app",

  devToolbar: {
    enabled: false,
  },

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
