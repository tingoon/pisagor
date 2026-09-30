import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { Chart } from "@pisagor/react-charts";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
} as const;

export { Default } from "./default";
