import { stripTsxExample } from "@pisagor/utils";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import withLabelAccessoryRaw from "./with-label-accessory.svelte?raw";

export const imports = `import { PasswordField } from "@pisagor/svelte-form";`;

export const sources = {
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  WithLabelAccessory: stripTsxExample(withLabelAccessoryRaw),
} as const;

export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as WithLabelAccessory } from "./with-label-accessory.svelte";
