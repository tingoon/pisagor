import { defineConfig } from "knip/config";

export default defineConfig({
  // Compound parts are `export const X` then composed via Object.assign in the same file.
  ignoreExportsUsedInFile: true,
  workspaces: {
    "apps/astro": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    "apps/docs": {
      entry: ["scripts/**/*.ts", "src/**/*.{astro,ts,tsx,vue,svelte}"],
    },
    "apps/react": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    "apps/solid": {
      entry: ["src/**/*"],
    },
    "apps/svelte": {
      entry: ["src/**/*"],
    },
    "apps/vue": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    // Entries come from package.json `exports` (+ package docs/examples/skills).
    // No blanket ignoreIssues on src/components or heavy modules — fix real unused deps/files.
    "packages/astro": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    "packages/mcp": {},
    "packages/props": {
      entry: ["skills/**/*"],
    },
    "packages/react": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    "packages/react-form": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    "packages/recipes": {
      entry: ["skills/**/*"],
    },
    "packages/solid": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    "packages/solid-form": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    "packages/svelte": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    "packages/svelte-form": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    "packages/tokens": {
      entry: ["skills/**/*"],
    },
    "packages/utils": {
      entry: ["skills/**/*"],
    },
    "packages/vue": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    "packages/vue-form": {
      entry: ["docs/**/*", "examples/**/*", "skills/**/*"],
    },
    scripts: {
      entry: ["src/**/*"],
    },
  },
});
