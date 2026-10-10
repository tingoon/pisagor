import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import horizontalRaw from "./horizontal.svelte?raw";

export const imports = `import { Timeline } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  Horizontal: horizontalRaw,
} as const;
