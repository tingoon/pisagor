import defaultRaw from "./default.svelte?raw";

export const imports = `import { ContextMenu } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
} as const;
