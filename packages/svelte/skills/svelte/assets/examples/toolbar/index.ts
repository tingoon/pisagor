import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import wrapped_actionsRaw from "./wrapped-actions.svelte?raw";

export const imports = `import { Toolbar } from "@pisagor/svelte/toolbar";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Default: stripSvelteExample(defaultRaw),
  WrappedActions: stripSvelteExample(wrapped_actionsRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Default } from "./default.svelte";
export { default as WrappedActions } from "./wrapped-actions.svelte";
