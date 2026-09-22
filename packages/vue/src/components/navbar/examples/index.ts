import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import with_sidebarRaw from "./with-sidebar.ts?raw";

export const imports = `import { Navbar } from "@pisagor/vue/navbar";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  WithSidebar: stripVueExample(with_sidebarRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as WithSidebar } from "./with-sidebar";
