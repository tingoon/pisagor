import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";
import without_badgeRaw from "./without-badge.tsx?raw";

export const imports = `import { Announcement } from "@pisagor/react/announcement";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
  Variants: stripTsxExample(variantsRaw),
  WithIcon: stripTsxExample(with_iconRaw),
  WithLink: stripTsxExample(with_linkRaw),
  WithoutBadge: stripTsxExample(without_badgeRaw),
} as const;

export { Compound } from "./compound";
export { Default } from "./default";
export { Variants } from "./variants";
export { WithIcon } from "./with-icon";
export { WithLink } from "./with-link";
export { WithoutBadge } from "./without-badge";
