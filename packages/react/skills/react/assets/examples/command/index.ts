import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import groupsRaw from "./groups.tsx?raw";
import scrollableRaw from "./scrollable.tsx?raw";
import shortcutsRaw from "./shortcuts.tsx?raw";
import with_dialogRaw from "./with-dialog.tsx?raw";
import with_footerRaw from "./with-footer.tsx?raw";

export const imports = `import { Command } from "@pisagor/react/command";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Groups: stripTsxExample(groupsRaw),
  Scrollable: stripTsxExample(scrollableRaw),
  Shortcuts: stripTsxExample(shortcutsRaw),
  WithDialog: stripTsxExample(with_dialogRaw),
  WithFooter: stripTsxExample(with_footerRaw),
} as const;

export { Default } from "./default";
export { Groups } from "./groups";
export { Scrollable } from "./scrollable";
export { Shortcuts } from "./shortcuts";
export { WithDialog } from "./with-dialog";
export { WithFooter } from "./with-footer";
