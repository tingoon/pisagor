import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";

export const imports = `import { TagsInputField } from "@pisagor/svelte-form";`;

export const sources = {
  Disabled: disabledRaw,
  Invalid: invalidRaw,
} as const;

export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
