import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import inline_navigationRaw from "./inline-navigation.svelte?raw";
import listRaw from "./list.svelte?raw";
import verticalRaw from "./vertical.svelte?raw";

export const imports = `import { Separator } from "@pisagor/svelte/separator";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  InlineNavigation: stripSvelteExample(inline_navigationRaw),
  List: stripSvelteExample(listRaw),
  Vertical: stripSvelteExample(verticalRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as InlineNavigation } from "./inline-navigation.svelte";
export { default as List } from "./list.svelte";
export { default as Vertical } from "./vertical.svelte";
