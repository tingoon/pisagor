import defaultRaw from "./default.svelte?raw";

export const imports = `import { Presence } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
} as const;
