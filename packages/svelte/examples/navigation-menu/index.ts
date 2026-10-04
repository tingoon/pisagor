import defaultRaw from "./default.svelte?raw";
import wrappingRaw from "./wrapping.svelte?raw";

export const imports = `import { NavigationMenu } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Wrapping: wrappingRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as Wrapping } from "./wrapping.svelte";
