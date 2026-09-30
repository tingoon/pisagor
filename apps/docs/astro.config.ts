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
      include: [
        "**/packages/react/**",
        "**/packages/react-*/**",
        "**/apps/docs/src/**",
      ],
    }),
    solid({
      include: ["**/packages/solid/**", "**/packages/solid-*/**"],
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
