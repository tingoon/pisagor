import controlledRaw from "./controlled.vue?raw";
import custom_timeoutRaw from "./custom-timeout.vue?raw";
import defaultRaw from "./default.vue?raw";
import different_iconRaw from "./different-icon.ts?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_labelRaw from "./with-label.vue?raw";

export const imports = `import { Clipboard } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomTimeout: custom_timeoutRaw,
  Default: defaultRaw,
  DifferentIcon: different_iconRaw,
  OnSurface: on_surfaceRaw,
  Variants: variantsRaw,
  WithLabel: with_labelRaw,
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as CustomTimeout } from "./custom-timeout.vue";
export { default as Default } from "./default.vue";
export { default as DifferentIcon } from "./different-icon";
export { default as OnSurface } from "./on-surface.vue";
export { default as Variants } from "./variants.vue";
export { default as WithLabel } from "./with-label.vue";
