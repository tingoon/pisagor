import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook-astro/framework";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-mcp"),
  ],
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  framework: {
    name: "@storybook-astro/framework",
    options: {
      docgen: false,
      renderMode: "static",
    },
  },
  stories: ["../../../packages/astro/src/**/*.stories.@(js|jsx|ts|tsx)"],
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    const tailwindcss = (await import("@tailwindcss/vite")).default;
    return mergeConfig(config, {
      base: process.env.STORYBOOK_BASE_PATH ?? "/",
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "#/storybook": configDir,
        },
      },
    });
  },
};

export default config;

function getAbsolutePath(value: string) {
  return path.dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
