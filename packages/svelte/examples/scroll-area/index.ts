import { stripSvelteExample } from "@pisagor/utils";
import both_directionsRaw from "./both-directions.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import horizontalRaw from "./horizontal.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import scroll_fadeRaw from "./scroll-fade.svelte?raw";

export const imports = `import { ScrollArea } from "@pisagor/svelte";`;

export const sources = {
  BothDirections: stripSvelteExample(both_directionsRaw),
  Default: stripSvelteExample(defaultRaw),
  Horizontal: stripSvelteExample(horizontalRaw),
  Nested: stripSvelteExample(nestedRaw),
  ScrollFade: stripSvelteExample(scroll_fadeRaw),
} as const;

export { default as BothDirections } from "./both-directions.svelte";
export { default as Default } from "./default.svelte";
export { default as Horizontal } from "./horizontal.svelte";
export { default as Nested } from "./nested.svelte";
export { default as ScrollFade } from "./scroll-fade.svelte";
