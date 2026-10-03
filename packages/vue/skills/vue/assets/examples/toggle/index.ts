import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import icon_groupRaw from "./icon-group.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_iconRaw from "./with-icon.vue?raw";

export const imports = `import { Toggle } from "@pisagor/vue/toggle";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  IconGroup: stripVueExample(icon_groupRaw),
  Sizes: stripVueExample(sizesRaw),
  Variants: stripVueExample(variantsRaw),
  WithIcon: stripVueExample(with_iconRaw),
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as IconGroup } from "./icon-group.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithIcon } from "./with-icon.vue";
