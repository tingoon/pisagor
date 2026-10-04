import acceptRaw from "./accept.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import on_files_changeRaw from "./on-files-change.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { FileInput } from "@pisagor/vue";`;

export const sources = {
  Accept: acceptRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Multiple: multipleRaw,
  OnFilesChange: on_files_changeRaw,
  OnSurface: on_surfaceRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;

export { default as Accept } from "./accept.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as Multiple } from "./multiple.vue";
export { default as OnFilesChange } from "./on-files-change.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
