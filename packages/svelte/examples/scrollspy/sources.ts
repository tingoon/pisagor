import Default from "./default.svelte?raw";
import Horizontal from "./horizontal.svelte?raw";

export const imports = `import { Scrollspy } from "@pisagor/svelte";`;

export const sources = {
  Default,
  Horizontal,
} as const;
