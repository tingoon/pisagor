import { stripSvelteExample } from "@pisagor/utils";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import with_label_accessoryRaw from "./with-label-accessory.svelte?raw";

export const imports = `import { PasswordField } from "@pisagor/svelte-form";`;

export const sources = {
  Disabled: stripSvelteExample(disabledRaw),
  Invalid: stripSvelteExample(invalidRaw),
  WithLabelAccessory: stripSvelteExample(with_label_accessoryRaw),
} as const;

export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as WithLabelAccessory } from "./with-label-accessory.svelte";
