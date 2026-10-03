import { unified } from "@astrojs/markdown-remark";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { stripSkillExamplesPlugin } from "./src/lib/remark-strip-skill-examples";

const base = process.env.DOCS_BASE_PATH || "/";

type OxcJsx = {
  refresh?: boolean;
  [key: string]: unknown;
};

type OxcConfig = {
  jsx?: boolean | OxcJsx;
  [key: string]: unknown;
};

type RolldownTransform = {
  jsx?: unknown;
  [key: string]: unknown;
};

type OptimizeDepsConfig = {
  rolldownOptions?: {
    transform?: RolldownTransform;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

/**
 * @vitejs/plugin-react sets `oxc.jsx.refresh: true` globally. @vitejs/plugin-vue
 * spreads `config.oxc` into a direct `transformWithOxc` call for `<script lang="ts">`,
 * so Vue SFCs with `use*` composables get `$RefreshSig$` injected (vite-plugin-vue#798).
 * vite:oxc already closed over the pre-resolved options (refresh still on for React);
 * replace only the public `config.oxc` so Vue's later reads see `refresh: false`.
 * Remove once plugin-vue ships the upstream override.
 */
function preventOxcRefreshLeakToVue() {
  return {
    configResolved(config: { oxc?: OxcConfig }) {
      const oxc = config.oxc;
      if (!oxc || typeof oxc.jsx !== "object" || oxc.jsx == null) return;
      const nextOxc: OxcConfig = {
        ...oxc,
        jsx: { ...oxc.jsx, refresh: false },
      };
      try {
        config.oxc = nextOxc;
      } catch {
        // ResolvedConfig may be frozen — last resort disables refresh for everyone.
        try {
          oxc.jsx.refresh = false;
        } catch {
          /* ignore */
        }
      }
    },
    enforce: "post" as const,
    name: "pisagor:prevent-oxc-refresh-leak-to-vue",
  };
}

/**
 * vite-plugin-solid sets `optimizeDeps.rolldownOptions.transform.jsx = "preserve"` on
 * Vite 8 so the scanner does not inject `react/jsx-dev-runtime`. That leaves JSX
 * intact when Vite's `import.meta.glob` dep-scan path rewrites the module as
 * `moduleType: "js"`, which then fails with "JSX syntax is disabled".
 * Serve/build still use babel-preset-solid; only the Rolldown dep scanner needs
 * a transform that emits plain JS. Docs already depends on React, so automatic
 * runtime for the scanner is safe.
 */
function fixSolidPreserveJsxForDepScan() {
  return {
    configResolved(config: { optimizeDeps?: OptimizeDepsConfig }) {
      const transform = config.optimizeDeps?.rolldownOptions?.transform;
      if (transform?.jsx !== "preserve") return;
      transform.jsx = { runtime: "automatic" };
    },
    enforce: "post" as const,
    name: "pisagor:fix-solid-preserve-jsx-dep-scan",
  };
}

export default defineConfig({
  base,
  integrations: [
    react({
      // Keep React Fast Refresh / oxc jsx refresh off non-React sources.
      exclude: [
        "**/apps/docs/src/components/docs/solid-example-island.tsx",
        "**/*.{vue,svelte,astro,css,scss,sass,less,styl,stylus,html,svg,md,mdx}",
        "**/packages/vue/**",
        "**/packages/vue-*/**",
        "**/apps/solid/**",
        "**/packages/solid/**",
        "**/packages/solid-*/**",
        "**/apps/svelte/**",
        "**/packages/svelte/**",
        "**/packages/svelte-*/**",
        "**/packages/astro/**",
      ],
      // Extension-limited: @vitejs/plugin-react maps `include` to Vite 8
      // `oxc.jsxRefreshInclude`. A bare `**` glob also matches CSS, so after
      // `@tailwindcss/vite` emits `@layer properties;` vite:oxc tries to parse
      // it as JS and docs `astro dev` 500s (build is fine — different pipeline).
      include: [
        "**/packages/react/**/*.{js,jsx,ts,tsx}",
        "**/packages/react-*/**/*.{js,jsx,ts,tsx}",
        "**/apps/react/**/*.{js,jsx,ts,tsx}",
        "**/apps/docs/src/**/*.{js,jsx,ts,tsx}",
      ],
    }),
    solid({
      include: [
        "**/packages/solid/**/*.{js,jsx,ts,tsx}",
        "**/packages/solid-*/**/*.{js,jsx,ts,tsx}",
        "**/apps/solid/**/*.{js,jsx,ts,tsx}",
        "**/apps/docs/src/components/docs/solid-example-island.tsx",
      ],
    }),
    svelte(),
    vue(),
  ],
  markdown: {
    // Classic remark (not Sätteri): strip one-liner `:::example ExportName` from Content.
    processor: unified({
      remarkPlugins: [stripSkillExamplesPlugin],
    }),
  },
  server: { host: true, port: 4000 },
  site: process.env.DOCS_SITE || "https://tingoon.github.com/pisagor",
  vite: {
    plugins: [
      tailwindcss(),
      preventOxcRefreshLeakToVue(),
      fixSolidPreserveJsxForDepScan(),
    ],
    ssr: {
      noExternal: [
        "@pisagor/react",
        "@pisagor/react-form",
        "@pisagor/vue",
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
