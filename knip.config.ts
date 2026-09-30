import { defineConfig } from "knip/config";

export default defineConfig({
  workspaces: {
    "apps/astro": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    "apps/docs": {
      entry: ["scripts/**/*.ts", "src/**/*.{astro,ts,tsx}"],
      ignoreDependencies: ["@pisagor/solid"],
    },
    "apps/react": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    "apps/vue": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    "packages/astro": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/**/*.stories.ts": ["unresolved", "dependencies", "unlisted"],
      },
    },
    "packages/mcp": {},
    "packages/react": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/**/*.stories.tsx": ["unresolved", "dependencies", "unlisted"],
        "src/internal/**": ["exports", "types"],
      },
    },
    "packages/react-charts": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/**/*.stories.tsx": ["unresolved", "dependencies", "unlisted"],
      },
    },
    "packages/react-form": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/**/*.stories.tsx": ["unresolved", "dependencies", "unlisted"],
        "src/internal/**": ["exports", "types"],
      },
    },
    "packages/solid": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/components/**": ["exports", "types", "duplicates"],
        "src/data-grid/**": ["exports", "types"],
        "src/data-table/**": ["exports", "types"],
        "src/hooks/**": ["exports", "types"],
        "src/internal/**": ["exports", "types", "duplicates"],
        "src/phone-input/**": ["exports", "types"],
        "src/rich-text-editor/**": ["exports", "types"],
        "src/utils/**": ["exports", "types"],
      },
    },
    "packages/solid-form": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/internal/**": ["exports", "types"],
      },
    },
    "packages/svelte": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/components/**": ["exports", "types", "duplicates"],
        "src/data-grid/**": ["exports", "types"],
        "src/data-table/**": ["exports", "types"],
        "src/hooks/**": ["exports", "types"],
        "src/internal/**": ["exports", "types", "duplicates"],
        "src/phone-input/**": ["exports", "types"],
        "src/rich-text-editor/**": ["exports", "types"],
        "src/utils/**": ["exports", "types"],
      },
    },
    "packages/svelte-form": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/internal/**": ["exports", "types"],
      },
    },
    "packages/vue": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/**/*.stories.ts": ["unresolved", "dependencies", "unlisted"],
        "src/components/**": ["exports", "types", "duplicates"],
        "src/internal/**": ["exports", "types", "duplicates"],
      },
    },
    "packages/vue-charts": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/**/*.stories.ts": ["unresolved", "dependencies", "unlisted"],
        "src/internal/**": ["exports", "types"],
      },
    },
    "packages/vue-form": {
      entry: ["src/**/*", "skills/**/*"],
      ignoreIssues: {
        "src/**/*.stories.ts": ["unresolved", "dependencies", "unlisted"],
        "src/internal/**": ["exports", "types"],
      },
    },
    scripts: {
      entry: ["src/**/*"],
    },
  },
});
