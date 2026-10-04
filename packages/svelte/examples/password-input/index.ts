import auto_hideRaw from "./auto-hide.svelte?raw";
import autocompleteRaw from "./autocomplete.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import controlled_visibilityRaw from "./controlled-visibility.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";

export const imports = `import { PasswordInput } from "@pisagor/svelte";`;

export const sources = {
  Autocomplete: autocompleteRaw,
  AutoHide: auto_hideRaw,
  Controlled: controlledRaw,
  ControlledVisibility: controlled_visibilityRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
} as const;

export { default as AutoHide } from "./auto-hide.svelte";
export { default as Autocomplete } from "./autocomplete.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as ControlledVisibility } from "./controlled-visibility.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Sizes } from "./sizes.svelte";
