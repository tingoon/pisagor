import compactRaw from "./compact.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { EmptyState } from "@pisagor/svelte";`;

export const sources = {
  Compact: compactRaw,
  Compound: compoundRaw,
  Default: defaultRaw,
} as const;

export { default as Compact } from "./compact.svelte";
export { default as Compound } from "./compound.svelte";
export { default as Default } from "./default.svelte";
