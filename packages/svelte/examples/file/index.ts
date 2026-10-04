import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import with_actionsRaw from "./with-actions.svelte?raw";

export const imports = `import { File } from "@pisagor/svelte";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Default: stripSvelteExample(defaultRaw),
  WithActions: stripSvelteExample(with_actionsRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Default } from "./default.svelte";
export { default as WithActions } from "./with-actions.svelte";
