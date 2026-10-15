import defaultRaw from "./default.tsx?raw";
import disable_hotkeyRaw from "./disable-hotkey.tsx?raw";

export const imports = `import { Sidebar } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  DisableHotkey: disable_hotkeyRaw,
} as const;
