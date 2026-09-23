import { stripTsxExample } from "@pisagor/utils";
import close_triggerRaw from "./close-trigger.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import gutterRaw from "./gutter.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import with_dialogRaw from "./with-dialog.tsx?raw";
import with_menuRaw from "./with-menu.tsx?raw";

export const imports = `import { ActionBar } from "@pisagor/react/action-bar";`;

export const sources = {
  CloseTrigger: stripTsxExample(close_triggerRaw),
  Controlled: stripTsxExample(controlledRaw),
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  Gutter: stripTsxExample(gutterRaw),
  Placements: stripTsxExample(placementsRaw),
  WithDialog: stripTsxExample(with_dialogRaw),
  WithMenu: stripTsxExample(with_menuRaw),
} as const;

export { CloseTrigger } from "./close-trigger";
export { Controlled } from "./controlled";
export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { Gutter } from "./gutter";
export { Placements } from "./placements";
export { WithDialog } from "./with-dialog";
export { WithMenu } from "./with-menu";
