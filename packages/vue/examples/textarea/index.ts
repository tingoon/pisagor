import autoresizeRaw from "./autoresize.vue?raw";
import clearableRaw from "./clearable.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_fieldRaw from "./with-field.vue?raw";

export const imports = `import { Textarea } from "@pisagor/vue";`;

export const sources = {
  Autoresize: autoresizeRaw,
  Clearable: clearableRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  OnSurface: on_surfaceRaw,
  Variants: variantsRaw,
  WithField: with_fieldRaw,
} as const;

export { default as Autoresize } from "./autoresize.vue";
export { default as Clearable } from "./clearable.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Variants } from "./variants.vue";
export { default as WithField } from "./with-field.vue";
