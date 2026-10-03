import { stripTsxExample } from "@pisagor/utils";
import collapsedRaw from "./collapsed.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import custom_separatorRaw from "./custom-separator.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";
import with_menuRaw from "./with-menu.tsx?raw";

export const imports = `import { Breadcrumb } from "@pisagor/react/breadcrumb";`;

export const sources = {
  Collapsed: stripTsxExample(collapsedRaw),
  Compound: stripTsxExample(compoundRaw),
  CustomSeparator: stripTsxExample(custom_separatorRaw),
  Default: stripTsxExample(defaultRaw),
  WithLink: stripTsxExample(with_linkRaw),
  WithMenu: stripTsxExample(with_menuRaw),
} as const;

export { Collapsed } from "./collapsed";
export { Compound } from "./compound";
export { CustomSeparator } from "./custom-separator";
export { Default } from "./default";
export { WithLink } from "./with-link";
export { WithMenu } from "./with-menu";
