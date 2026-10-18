import { defineConfig } from "knip/config";

export default defineConfig({
  // Bun built-ins (`bun fmt`, `bun lint`, `bun check`), not package binaries.
  ignoreBinaries: ["check", "fmt"],
  // Compound parts are `export const X` then composed via Object.assign in the same file.
  ignoreExportsUsedInFile: true,
  workspaces: {
    "apps/astro": {
      entry: [".storybook/**/*", "src/**/*"],
      // `astro sync && bun check` replaces `astro check`.
      ignoreDependencies: ["@astrojs/check", "chromatic"],
    },
    "apps/docs": {
      entry: ["src/**/*.{astro,ts,tsx,vue,svelte}"],
      ignoreDependencies: ["@astrojs/check"],
      // Knip parses Astro `{pkg.tanstack}` expressions as import specifiers.
      ignoreIssues: {
        "src/components/docs/tanstack-form-guide.astro": ["unresolved"],
      },
    },
    "apps/react": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    "apps/solid": {
      // Story host shell — blocks live in apps/docs; src is empty until stories return.
      entry: ["package.json"],
    },
    "apps/svelte": {
      // Story host shell — blocks live in apps/docs; src is empty until stories return.
      entry: ["package.json"],
    },
    "apps/vue": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    // Entries come from package.json `exports` (+ examples/skills).
    // No blanket ignoreIssues on src/components or heavy modules — fix real unused deps/files.
    "packages/astro": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    "packages/mcp": {},
    "packages/props": {
      entry: ["skills/**/*"],
    },
    "packages/react": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    "packages/react-form": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    "packages/recipes": {
      entry: ["skills/**/*"],
    },
    "packages/solid": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    "packages/solid-form": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    "packages/svelte": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    "packages/svelte-form": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    "packages/tokens": {
      entry: ["skills/**/*"],
    },
    "packages/utils": {
      entry: ["skills/**/*"],
    },
    "packages/vue": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    "packages/vue-form": {
      entry: ["examples/**/*", "skills/**/*"],
    },
    scripts: {
      entry: ["src/**/*"],
    },
  },
});
