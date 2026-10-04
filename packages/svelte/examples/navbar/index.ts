import defaultRaw from "./default.svelte?raw";
import with_sidebarRaw from "./with-sidebar.svelte?raw";

export const imports = `import { Navbar } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  WithSidebar: with_sidebarRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as WithSidebar } from "./with-sidebar.svelte";
