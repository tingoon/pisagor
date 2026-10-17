import Default from "./default.svelte?raw";
import DisableHotkey from "./disable-hotkey.svelte?raw";

export const imports = `import { Sidebar } from "@pisagor/svelte";`;

export const sources = {
  Default,
  DisableHotkey,
} as const;
