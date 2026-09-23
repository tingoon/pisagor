import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.ts?raw";
import defaultRaw from "./default.ts?raw";
import variantsRaw from "./variants.ts?raw";
import with_iconRaw from "./with-icon.ts?raw";
import with_linkRaw from "./with-link.ts?raw";
import without_badgeRaw from "./without-badge.ts?raw";

export const imports = `import { Announcement } from "@pisagor/vue/announcement";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Default: stripVueExample(defaultRaw),
  Variants: stripVueExample(variantsRaw),
  WithIcon: stripVueExample(with_iconRaw),
  WithLink: stripVueExample(with_linkRaw),
  WithoutBadge: stripVueExample(without_badgeRaw),
} as const;

export { default as Compound } from "./compound";
export { default as Default } from "./default";
export { default as Variants } from "./variants";
export { default as WithIcon } from "./with-icon";
export { default as WithLink } from "./with-link";
export { default as WithoutBadge } from "./without-badge";
