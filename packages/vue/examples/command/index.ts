import defaultRaw from "./default.ts?raw";
import groupsRaw from "./groups.ts?raw";
import scrollableRaw from "./scrollable.ts?raw";
import shortcutsRaw from "./shortcuts.ts?raw";
import with_dialogRaw from "./with-dialog.ts?raw";
import with_footerRaw from "./with-footer.ts?raw";

export const imports = `import { Command } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Groups: groupsRaw,
  Scrollable: scrollableRaw,
  Shortcuts: shortcutsRaw,
  WithDialog: with_dialogRaw,
  WithFooter: with_footerRaw,
} as const;

export { default as Default } from "./default";
export { default as Groups } from "./groups";
export { default as Scrollable } from "./scrollable";
export { default as Shortcuts } from "./shortcuts";
export { default as WithDialog } from "./with-dialog";
export { default as WithFooter } from "./with-footer";
