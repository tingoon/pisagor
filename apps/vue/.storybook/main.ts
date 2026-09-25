import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineMain } from "@storybook/vue3-vite/node";

export default defineMain({
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  features: {
    // experimentalDocgenServer needs typescript.sys (removed in TypeScript 7).
    componentsManifest: true,
  },
  framework: getAbsolutePath("@storybook/vue3-vite"),
  stories: ["../src/**/*.stories.@(js|ts|tsx)"],
});

function getAbsolutePath(value: string) {
  return path.dirname(
    fileURLToPath(import.meta.resolve(`${value}/package.json`)),
  );
}
