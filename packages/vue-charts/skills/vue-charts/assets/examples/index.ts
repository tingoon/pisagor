import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.ts?raw";

export const imports = `import { Chart } from "@pisagor/vue-charts";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
} as const;

export { default as Default } from "./default";
