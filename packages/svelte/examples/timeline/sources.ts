import Compound from "./compound.svelte?raw";
import Default from "./default.svelte?raw";
import Horizontal from "./horizontal.svelte?raw";

export const imports = `import { Timeline } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Default,
  Horizontal,
} as const;
