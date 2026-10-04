import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import with_sidebarRaw from "./with-sidebar.tsx?raw";

export const imports = `import { Navbar } from "@pisagor/react";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  WithSidebar: stripTsxExample(with_sidebarRaw),
} as const;

export * from "./default";
export * from "./with-sidebar";
