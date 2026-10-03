import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.tsx?raw";

export const imports = `import { Tooltip } from "@pisagor/react/tooltip";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Placements: stripTsxExample(placementsRaw),
  WithKeyboardShortcut: stripTsxExample(with_keyboard_shortcutRaw),
} as const;

export { Default } from "./default";
export { Disabled } from "./disabled";
export { Placements } from "./placements";
export { WithKeyboardShortcut } from "./with-keyboard-shortcut";
