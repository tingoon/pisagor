import defaultRaw from "./default.svelte?raw";

export const imports = `import { SkipNav } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
} as const;
