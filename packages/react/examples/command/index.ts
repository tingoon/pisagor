import defaultRaw from "./default.tsx?raw";
import groupsRaw from "./groups.tsx?raw";
import scrollableRaw from "./scrollable.tsx?raw";
import shortcutsRaw from "./shortcuts.tsx?raw";
import with_dialogRaw from "./with-dialog.tsx?raw";
import with_footerRaw from "./with-footer.tsx?raw";

export const imports = `import { Command } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Groups: groupsRaw,
  Scrollable: scrollableRaw,
  Shortcuts: shortcutsRaw,
  WithDialog: with_dialogRaw,
  WithFooter: with_footerRaw,
} as const;

export * from "./default";
export * from "./groups";
export * from "./scrollable";
export * from "./shortcuts";
export * from "./with-dialog";
export * from "./with-footer";
