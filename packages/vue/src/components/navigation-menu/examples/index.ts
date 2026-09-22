import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.ts?raw";
import wrappingRaw from "./wrapping.ts?raw";

export const imports = `import { NavigationMenu } from "@pisagor/vue/navigation-menu";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Wrapping: stripVueExample(wrappingRaw),
} as const;

export { default as Default } from "./default";
export { default as Wrapping } from "./wrapping";
