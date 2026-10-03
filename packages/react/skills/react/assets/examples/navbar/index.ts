import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import with_sidebarRaw from "./with-sidebar.tsx?raw";

export const imports = `import { Navbar } from "@pisagor/react/navbar";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  WithSidebar: stripTsxExample(with_sidebarRaw),
} as const;

export { Default } from "./default";
export { WithSidebar } from "./with-sidebar";
