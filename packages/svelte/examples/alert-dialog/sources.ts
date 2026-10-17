import Composition from "./composition.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { AlertDialog } from "@pisagor/svelte";`;

export const sources = {
  Composition,
  Variants,
} as const;
