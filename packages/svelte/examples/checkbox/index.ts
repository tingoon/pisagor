import checkbox_groupRaw from "./checkbox-group.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import indeterminateRaw from "./indeterminate.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Checkbox } from "@pisagor/svelte";`;

export const sources = {
  CheckboxGroup: checkbox_groupRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Indeterminate: indeterminateRaw,
  Invalid: invalidRaw,
  Variants: variantsRaw,
} as const;

export { default as CheckboxGroup } from "./checkbox-group.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Indeterminate } from "./indeterminate.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Variants } from "./variants.svelte";
