import { DefaultSource as Default } from "./default";
import { DisableHotkeySource as DisableHotkey } from "./disable-hotkey";

export const imports = `import { Sidebar } from "@pisagor/solid";`;

export const sources = {
  Default,
  DisableHotkey,
} as const;
