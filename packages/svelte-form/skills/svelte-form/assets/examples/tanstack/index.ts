import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { createAppForm, Root } from "@pisagor/svelte-form/tanstack";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
} as const;

export { default as Default } from "./default.svelte";
