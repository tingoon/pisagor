import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineMain } from "@storybook/react-vite/node";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(configDir, "../../..");

export default defineMain({
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-mcp"),
  ],
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  features: {
    componentsManifest: true,
  },
  framework: getAbsolutePath("@storybook/react-vite"),
  stories: [
    path.join(workspaceRoot, "apps/react/src/**/*.stories.tsx"),
    path.join(workspaceRoot, "packages/react/src/**/*.stories.tsx"),
    path.join(workspaceRoot, "packages/react-charts/src/**/*.stories.tsx"),
    path.join(workspaceRoot, "packages/react-form/src/**/*.stories.tsx"),
  ],
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      base: process.env.STORYBOOK_BASE_PATH ?? "/",
    });
  },
});

function getAbsolutePath(value: string) {
  return path.dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
