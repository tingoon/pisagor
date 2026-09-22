import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook-astro/framework";

const config: StorybookConfig = {
  addons: [getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-docs")],
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  features: {
    componentsManifest: true,
  },
  framework: {
    name: "@storybook-astro/framework",
    options: {
      docgen: false,
      renderMode: "static",
    },
  },
  stories: ["../../../packages/astro/src/**/*.stories.@(js|jsx|ts|tsx)"],
};

export default config;

function getAbsolutePath(value: string) {
  return path.dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
