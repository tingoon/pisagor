import defaultRaw from "./default.svelte?raw";
import disable_hotkeyRaw from "./disable-hotkey.svelte?raw";

export const imports = `import { Sidebar } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  DisableHotkey: disable_hotkeyRaw,
} as const;
