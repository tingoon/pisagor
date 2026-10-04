import collapsedRaw from "./collapsed.vue?raw";
import compoundRaw from "./compound.vue?raw";
import custom_separatorRaw from "./custom-separator.vue?raw";
import defaultRaw from "./default.vue?raw";
import with_linkRaw from "./with-link.vue?raw";
import with_menuRaw from "./with-menu.vue?raw";

export const imports = `import { Breadcrumb } from "@pisagor/vue";`;

export const sources = {
  Collapsed: collapsedRaw,
  Compound: compoundRaw,
  CustomSeparator: custom_separatorRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
  WithMenu: with_menuRaw,
} as const;

export { default as Collapsed } from "./collapsed.vue";
export { default as Compound } from "./compound.vue";
export { default as CustomSeparator } from "./custom-separator.vue";
export { default as Default } from "./default.vue";
export { default as WithLink } from "./with-link.vue";
export { default as WithMenu } from "./with-menu.vue";
