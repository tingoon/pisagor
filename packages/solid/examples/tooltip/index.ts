import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.tsx?raw";

export const imports = `import { Tooltip } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Placements: placementsRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
} as const;

export * from "./default";
export * from "./disabled";
export * from "./placements";
export * from "./with-keyboard-shortcut";
