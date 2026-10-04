import compoundRaw from "./compound.ts?raw";
import defaultRaw from "./default.ts?raw";
import variantsRaw from "./variants.ts?raw";
import with_iconRaw from "./with-icon.ts?raw";
import with_linkRaw from "./with-link.ts?raw";
import without_badgeRaw from "./without-badge.ts?raw";

export const imports = `import { Announcement } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
  WithLink: with_linkRaw,
  WithoutBadge: without_badgeRaw,
} as const;

export { default as Compound } from "./compound";
export { default as Default } from "./default";
export { default as Variants } from "./variants";
export { default as WithIcon } from "./with-icon";
export { default as WithLink } from "./with-link";
export { default as WithoutBadge } from "./without-badge";
