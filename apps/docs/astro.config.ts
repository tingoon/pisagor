import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const base = process.env.DOCS_BASE_PATH || "/";

export default defineConfig({
  base,
  integrations: [
    react({
      // Solid island lives under apps/docs; keep React plugin off that file.
      exclude: ["**/apps/docs/src/components/docs/solid-example-island.tsx"],
      // Extension-limited: @vitejs/plugin-react maps `include` to Vite 8
      // `oxc.jsxRefreshInclude`. A bare `**` glob also matches CSS, so after
      // `@tailwindcss/vite` emits `@layer properties;` vite:oxc tries to parse
      // it as JS and docs `astro dev` 500s (build is fine — different pipeline).
      include: [
        "**/packages/react/**/*.{js,jsx,ts,tsx}",
        "**/packages/react-*/**/*.{js,jsx,ts,tsx}",
        "**/apps/docs/src/**/*.{js,jsx,ts,tsx}",
      ],
    }),
    solid({
      include: [
        "**/packages/solid/**/*.{js,jsx,ts,tsx}",
        "**/packages/solid-*/**/*.{js,jsx,ts,tsx}",
        "**/apps/docs/src/components/docs/solid-example-island.tsx",
      ],
    }),
    svelte(),
    vue(),
  ],
  server: { host: true, port: 4000 },
  site: process.env.DOCS_SITE || "https://tingoon.github.com/pisagor",
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [
        "@pisagor/react",
        "@pisagor/react-charts",
        "@pisagor/react-form",
        "@pisagor/vue",
        "@pisagor/vue-charts",
        "@pisagor/vue-form",
        "@pisagor/solid",
        "@pisagor/solid-form",
        "@pisagor/svelte",
        "@pisagor/svelte-form",
        "@pisagor/utils",
        "@pisagor/recipes",
        "@pisagor/tokens",
      ],
    },
  },
});
