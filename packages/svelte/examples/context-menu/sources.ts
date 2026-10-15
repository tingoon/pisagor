import checkboxesRaw from "./checkboxes.svelte?raw";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { ContextMenu } from "@pisagor/svelte";`;

export const sources = {
  Checkboxes: checkboxesRaw,
  Default: defaultRaw,
} as const;
