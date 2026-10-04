import clearableRaw from "./clearable.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import fileRaw from "./file.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_fieldRaw from "./with-field.vue?raw";

export const imports = `import { Input } from "@pisagor/vue";`;

export const sources = {
  Clearable: clearableRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  File: fileRaw,
  Invalid: invalidRaw,
  OnSurface: on_surfaceRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithField: with_fieldRaw,
} as const;

export { default as Clearable } from "./clearable.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as File } from "./file.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithField } from "./with-field.vue";
