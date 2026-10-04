import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import icon_onlyRaw from "./icon-only.tsx?raw";
import with_linksRaw from "./with-links.tsx?raw";

export const imports = `import { BottomNavigation } from "@pisagor/solid";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  IconOnly: stripTsxExample(icon_onlyRaw),
  WithLinks: stripTsxExample(with_linksRaw),
} as const;

export * from "./default";
export * from "./icon-only";
export * from "./with-links";
