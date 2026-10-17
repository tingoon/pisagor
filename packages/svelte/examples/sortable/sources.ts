import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Horizontal from "./horizontal.svelte?raw";
import WithoutHandle from "./without-handle.svelte?raw";

export const imports = `import { Sortable } from "@pisagor/svelte";`;

export const sources = {
  Default,
  Disabled,
  Horizontal,
  WithoutHandle,
} as const;
