import Checkboxes from "./checkboxes.svelte?raw";
import Default from "./default.svelte?raw";

export const imports = `import { ContextMenu } from "@pisagor/svelte";`;

export const sources = {
  Checkboxes,
  Default,
} as const;
