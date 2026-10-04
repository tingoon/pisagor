import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";
import without_badgeRaw from "./without-badge.tsx?raw";

export const imports = `import { Announcement } from "@pisagor/react";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
  Variants: stripTsxExample(variantsRaw),
  WithIcon: stripTsxExample(with_iconRaw),
  WithLink: stripTsxExample(with_linkRaw),
  WithoutBadge: stripTsxExample(without_badgeRaw),
} as const;

export * from "./compound";
export * from "./default";
export * from "./variants";
export * from "./with-icon";
export * from "./with-link";
export * from "./without-badge";
