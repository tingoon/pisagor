import { stripSvelteExample } from "@pisagor/utils";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import placementsRaw from "./placements.svelte?raw";
import triggers_delaysRaw from "./triggers-delays.svelte?raw";

export const imports = `import { HoverCard } from "@pisagor/svelte";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Placements: stripSvelteExample(placementsRaw),
  TriggersDelays: stripSvelteExample(triggers_delaysRaw),
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Placements } from "./placements.svelte";
export { default as TriggersDelays } from "./triggers-delays.svelte";
