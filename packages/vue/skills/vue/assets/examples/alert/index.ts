import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.ts?raw";
import custom_colorRaw from "./custom-color.ts?raw";
import defaultRaw from "./default.vue?raw";
import variantsRaw from "./variants.ts?raw";
import with_actionRaw from "./with-action.ts?raw";
import with_iconRaw from "./with-icon.ts?raw";

export const imports = `import { Alert } from "@pisagor/vue/alert";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  CustomColor: stripVueExample(custom_colorRaw),
  Default: stripVueExample(defaultRaw),
  Variants: stripVueExample(variantsRaw),
  WithAction: stripVueExample(with_actionRaw),
  WithIcon: stripVueExample(with_iconRaw),
} as const;

export { default as Compound } from "./compound";
export { default as CustomColor } from "./custom-color";
export { default as Default } from "./default.vue";
export { default as Variants } from "./variants";
export { default as WithAction } from "./with-action";
export { default as WithIcon } from "./with-icon";
