import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { Select } from "@pisagor/svelte/select";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
} as const;

export { default as Default } from "./default.svelte";
