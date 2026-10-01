import { stripSvelteExample } from "@pisagor/utils";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import field_onlyRaw from "./field-only.svelte?raw";
import formattedRaw from "./formatted.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import mouse_wheelRaw from "./mouse-wheel.svelte?raw";
import rangeRaw from "./range.svelte?raw";
import scrubRaw from "./scrub.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import stepRaw from "./step.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { NumberInput } from "@pisagor/svelte/number-input";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  FieldOnly: stripSvelteExample(field_onlyRaw),
  Formatted: stripSvelteExample(formattedRaw),
  Invalid: stripSvelteExample(invalidRaw),
  MouseWheel: stripSvelteExample(mouse_wheelRaw),
  Range: stripSvelteExample(rangeRaw),
  Scrub: stripSvelteExample(scrubRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Step: stripSvelteExample(stepRaw),
  Variants: stripSvelteExample(variantsRaw),
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as FieldOnly } from "./field-only.svelte";
export { default as Formatted } from "./formatted.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as MouseWheel } from "./mouse-wheel.svelte";
export { default as Range } from "./range.svelte";
export { default as Scrub } from "./scrub.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Step } from "./step.svelte";
export { default as Variants } from "./variants.svelte";
