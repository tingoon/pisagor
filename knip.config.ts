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
