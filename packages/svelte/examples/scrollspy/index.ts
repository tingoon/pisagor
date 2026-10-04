import defaultRaw from "./default.svelte?raw";
import horizontalRaw from "./horizontal.svelte?raw";

export const imports = `import { Scrollspy } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Horizontal: horizontalRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as Horizontal } from "./horizontal.svelte";
