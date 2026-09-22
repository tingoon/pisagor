import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineMain } from "@storybook/react-vite/node";

export default defineMain({
  addons: [getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-docs")],
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  features: {
    componentsManifest: true,
  },
  framework: getAbsolutePath("@storybook/react-vite"),
  stories: ["../src/**/*.stories.@(js|ts|tsx)"],
});

function getAbsolutePath(value: string) {
  return path.dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
