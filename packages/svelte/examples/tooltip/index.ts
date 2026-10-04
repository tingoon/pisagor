import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import placementsRaw from "./placements.svelte?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.svelte?raw";

export const imports = `import { Tooltip } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Placements: placementsRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Placements } from "./placements.svelte";
export { default as WithKeyboardShortcut } from "./with-keyboard-shortcut.svelte";
