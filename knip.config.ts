import { defineConfig } from "knip/config";

export default defineConfig({
  workspaces: {
    "apps/astro": {
      entry: [".storybook/**/*", "src/**/*", "../../packages/astro/**/*.stories.@(ts|tsx)"],
      ignoreDependencies: ["chromatic"],
    },
    "apps/react": {
      entry: [
        ".storybook/**/*",
        "src/**/*",
        "../../packages/react/**/*.stories.@(ts|tsx)",
        "../../packages/react-charts/**/*.stories.@(ts|tsx)",
        "../../packages/react-form/**/*.stories.@(ts|tsx)",
      ],
      ignoreDependencies: ["chromatic"],
    },
    "apps/vue": {
      entry: [
        ".storybook/**/*",
        "src/**/*",
        "../../packages/vue/**/*.stories.@(ts|tsx)",
        "../../packages/vue-charts/**/*.stories.@(ts|tsx)",
        "../../packages/vue-form/**/*.stories.@(ts|tsx)",
      ],
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
    "packages/recipes": {
      entry: ["src/ui/*.ts"],
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
