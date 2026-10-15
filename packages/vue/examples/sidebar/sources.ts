import defaultRaw from "./default.ts?raw";
import disable_hotkeyRaw from "./disable-hotkey.vue?raw";

export const imports = `import { Sidebar } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  DisableHotkey: disable_hotkeyRaw,
} as const;
