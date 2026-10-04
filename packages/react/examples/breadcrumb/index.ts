import collapsedRaw from "./collapsed.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import custom_separatorRaw from "./custom-separator.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";
import with_menuRaw from "./with-menu.tsx?raw";

export const imports = `import { Breadcrumb } from "@pisagor/react";`;

export const sources = {
  Collapsed: collapsedRaw,
  Compound: compoundRaw,
  CustomSeparator: custom_separatorRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
  WithMenu: with_menuRaw,
} as const;

export * from "./collapsed";
export * from "./compound";
export * from "./custom-separator";
export * from "./default";
export * from "./with-link";
export * from "./with-menu";
