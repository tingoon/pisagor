import { defineConfig } from "knip/config";

export default defineConfig({
  workspaces: {
    "apps/astro": {
      entry: [".storybook/**/*", "src/**/*"],
      ignoreDependencies: ["chromatic"],
    },
    "apps/docs": {
      entry: ["scripts/**/*.ts", "src/**/*.{astro,ts,tsx}"],
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
      entry: ["src/**/*"],
      ignoreIssues: {
        "src/**/*.stories.ts": ["unresolved", "dependencies", "unlisted"],
      },
    },
    "packages/mcp": {},
    "packages/react": {
      entry: ["src/**/*"],
      ignoreIssues: {
        "src/**/*.stories.tsx": ["unresolved", "dependencies", "unlisted"],
        "src/internal/**": ["exports", "types"],
      },
    },
    "packages/react-charts": {
      entry: ["src/**/*"],
      ignoreIssues: {
        "src/**/*.stories.tsx": ["unresolved", "dependencies", "unlisted"],
      },
    },
    "packages/react-form": {
      entry: ["src/**/*"],
      ignoreIssues: {
        "src/**/*.stories.tsx": ["unresolved", "dependencies", "unlisted"],
        "src/internal/**": ["exports", "types"],
      },
    },
    "packages/tsconfig": {
      ignoreDependencies: ["@types/react"],
    },
    "packages/vue": {
      entry: ["src/**/*"],
      ignoreIssues: {
        "src/**/*.stories.ts": ["unresolved", "dependencies", "unlisted"],
        "src/components/**": ["exports", "types", "duplicates"],
        "src/internal/**": ["exports", "types", "duplicates"],
      },
    },
    "packages/vue-charts": {
      entry: ["src/**/*"],
      ignoreIssues: {
        "src/**/*.stories.ts": ["unresolved", "dependencies", "unlisted"],
        "src/internal/**": ["exports", "types"],
      },
    },
    "packages/vue-form": {
      entry: ["src/**/*"],
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
