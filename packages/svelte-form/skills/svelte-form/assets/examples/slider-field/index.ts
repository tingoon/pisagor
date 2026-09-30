import { stripTsxExample } from "@pisagor/utils";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";

export const imports = `import { SliderField } from "@pisagor/svelte-form";`;

export const sources = {
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
} as const;

export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
