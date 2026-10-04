import { stripTsxExample } from "@pisagor/utils";
import close_triggerRaw from "./close-trigger.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import gutterRaw from "./gutter.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import with_dialogRaw from "./with-dialog.tsx?raw";
import with_menuRaw from "./with-menu.tsx?raw";

export const imports = `import { ActionBar } from "@pisagor/react";`;

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

export * from "./close-trigger";
export * from "./controlled";
export * from "./custom-spacing";
export * from "./default";
export * from "./gutter";
export * from "./placements";
export * from "./with-dialog";
export * from "./with-menu";
