import { stripTsxExample } from "@pisagor/utils";
import checkboxesRaw from "./checkboxes.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import destructiveRaw from "./destructive.tsx?raw";
import group_labelRaw from "./group-label.tsx?raw";
import iconsRaw from "./icons.tsx?raw";
import linkRaw from "./link.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import quick_itemRaw from "./quick-item.tsx?raw";
import radio_groupRaw from "./radio-group.tsx?raw";
import shortcutsRaw from "./shortcuts.tsx?raw";
import with_scrollRaw from "./with-scroll.tsx?raw";
import with_separatorRaw from "./with-separator.tsx?raw";

export const imports = `import { DropdownMenu } from "@pisagor/solid";`;

export const sources = {
  Checkboxes: stripTsxExample(checkboxesRaw),
  Default: stripTsxExample(defaultRaw),
  Destructive: stripTsxExample(destructiveRaw),
  GroupLabel: stripTsxExample(group_labelRaw),
  Icons: stripTsxExample(iconsRaw),
  Link: stripTsxExample(linkRaw),
  Nested: stripTsxExample(nestedRaw),
  Placements: stripTsxExample(placementsRaw),
  QuickItem: stripTsxExample(quick_itemRaw),
  RadioGroup: stripTsxExample(radio_groupRaw),
  Shortcuts: stripTsxExample(shortcutsRaw),
  WithScroll: stripTsxExample(with_scrollRaw),
  WithSeparator: stripTsxExample(with_separatorRaw),
} as const;

export * from "./checkboxes";
export * from "./default";
export * from "./destructive";
export * from "./group-label";
export * from "./icons";
export * from "./link";
export * from "./nested";
export * from "./placements";
export * from "./quick-item";
export * from "./radio-group";
export * from "./shortcuts";
export * from "./with-scroll";
export * from "./with-separator";
