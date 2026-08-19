import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineMain } from "@storybook/vue3-vite/node";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(configDir, "../../..");

export default defineMain({
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mcp"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  features: {
    componentsManifest: true,
  },
  framework: getAbsolutePath("@storybook/vue3-vite"),
  stories: [
    path.join(workspaceRoot, "apps/vue/src/**/*.stories.ts"),
    path.join(workspaceRoot, "packages/vue/src/**/*.stories.ts"),
    path.join(workspaceRoot, "packages/vue-form/src/**/*.stories.ts"),
    path.join(workspaceRoot, "packages/vue-blocks/src/**/*.stories.ts"),
  ],
});

function getAbsolutePath(value: string) {
  return path.dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
