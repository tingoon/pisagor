import { CompositionSource as Composition } from "./composition";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { AlertDialog } from "@pisagor/solid";`;

export const sources = {
  Composition,
  Variants,
} as const;
