import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const root = path.dirname(fileURLToPath(import.meta.url));

const base = process.env.DOCS_BASE_PATH || "/";

export default defineConfig({
  base,
  integrations: [react(), vue()],
  server: { host: true, port: 4000 },
  site: process.env.DOCS_SITE || "https://tingoon.github.com/pisagor",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@recipes-react": path.resolve(root, "../react/src/recipes"),
        "@recipes-vue": path.resolve(root, "../vue/src/recipes"),
      },
    },
    ssr: {
      noExternal: [
        "@pisagor/react",
        "@pisagor/vue",
        "@pisagor/react-form",
        "@pisagor/vue-form",
        "@pisagor/solid",
        "@pisagor/svelte",
        "@pisagor/utils",
        "@pisagor/recipes",
        "@pisagor/tokens",
      ],
    },
  },
});
