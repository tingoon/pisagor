import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import icon_onlyRaw from "./icon-only.vue?raw";
import with_linksRaw from "./with-links.vue?raw";

export const imports = `import { BottomNavigation } from "@pisagor/vue/bottom-navigation";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  IconOnly: stripVueExample(icon_onlyRaw),
  WithLinks: stripVueExample(with_linksRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as IconOnly } from "./icon-only.vue";
export { default as WithLinks } from "./with-links.vue";
