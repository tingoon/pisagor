import defaultRaw from "./default.ts?raw";
import wrappingRaw from "./wrapping.ts?raw";

export const imports = `import { NavigationMenu } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Wrapping: wrappingRaw,
} as const;

export { default as Default } from "./default";
export { default as Wrapping } from "./wrapping";
