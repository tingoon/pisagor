import defaultRaw from "./default.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import paddingRaw from "./padding.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_form_controlsRaw from "./with-form-controls.svelte?raw";

export const imports = `import { Surface } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Nested: nestedRaw,
  Padding: paddingRaw,
  Variants: variantsRaw,
  WithFormControls: with_form_controlsRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as Nested } from "./nested.svelte";
export { default as Padding } from "./padding.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithFormControls } from "./with-form-controls.svelte";
