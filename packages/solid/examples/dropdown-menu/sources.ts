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
  Checkboxes: checkboxesRaw,
  Default: defaultRaw,
  Destructive: destructiveRaw,
  GroupLabel: group_labelRaw,
  Icons: iconsRaw,
  Link: linkRaw,
  Nested: nestedRaw,
  Placements: placementsRaw,
  QuickItem: quick_itemRaw,
  RadioGroup: radio_groupRaw,
  Shortcuts: shortcutsRaw,
  WithScroll: with_scrollRaw,
  WithSeparator: with_separatorRaw,
} as const;
