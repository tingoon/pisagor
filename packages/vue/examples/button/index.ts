import as_childRaw from "./as-child.vue?raw";
import custom_colorRaw from "./custom-color.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import iconRaw from "./icon.vue?raw";
import loadingRaw from "./loading.vue?raw";
import no_click_effectRaw from "./no-click-effect.vue?raw";
import pillRaw from "./pill.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_iconRaw from "./with-icon.vue?raw";

export const imports = `import { Button } from "@pisagor/vue";`;

export const sources = {
  AsChild: as_childRaw,
  CustomColor: custom_colorRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Icon: iconRaw,
  Loading: loadingRaw,
  NoClickEffect: no_click_effectRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;

export { default as AsChild } from "./as-child.vue";
export { default as CustomColor } from "./custom-color.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Icon } from "./icon.vue";
export { default as Loading } from "./loading.vue";
export { default as NoClickEffect } from "./no-click-effect.vue";
export { default as Pill } from "./pill.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithIcon } from "./with-icon.vue";
