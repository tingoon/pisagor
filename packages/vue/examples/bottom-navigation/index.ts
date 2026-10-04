import defaultRaw from "./default.vue?raw";
import icon_onlyRaw from "./icon-only.vue?raw";
import with_linksRaw from "./with-links.vue?raw";

export const imports = `import { BottomNavigation } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  IconOnly: icon_onlyRaw,
  WithLinks: with_linksRaw,
} as const;

export { default as Default } from "./default.vue";
export { default as IconOnly } from "./icon-only.vue";
export { default as WithLinks } from "./with-links.vue";
