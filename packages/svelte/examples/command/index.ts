import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import groupsRaw from "./groups.svelte?raw";
import scrollableRaw from "./scrollable.svelte?raw";
import shortcutsRaw from "./shortcuts.svelte?raw";
import with_dialogRaw from "./with-dialog.svelte?raw";
import with_footerRaw from "./with-footer.svelte?raw";

export const imports = `import { Command } from "@pisagor/svelte";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  Groups: stripSvelteExample(groupsRaw),
  Scrollable: stripSvelteExample(scrollableRaw),
  Shortcuts: stripSvelteExample(shortcutsRaw),
  WithDialog: stripSvelteExample(with_dialogRaw),
  WithFooter: stripSvelteExample(with_footerRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as Groups } from "./groups.svelte";
export { default as Scrollable } from "./scrollable.svelte";
export { default as Shortcuts } from "./shortcuts.svelte";
export { default as WithDialog } from "./with-dialog.svelte";
export { default as WithFooter } from "./with-footer.svelte";
