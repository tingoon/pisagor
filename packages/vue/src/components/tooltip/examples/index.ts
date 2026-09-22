import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.ts?raw";
import disabledRaw from "./disabled.ts?raw";
import placementsRaw from "./placements.ts?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.ts?raw";

export const imports = `import { Tooltip } from "@pisagor/vue/tooltip";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Placements: stripVueExample(placementsRaw),
  WithKeyboardShortcut: stripVueExample(with_keyboard_shortcutRaw),
} as const;

export { default as Default } from "./default";
export { default as Disabled } from "./disabled";
export { default as Placements } from "./placements";
export { default as WithKeyboardShortcut } from "./with-keyboard-shortcut";
