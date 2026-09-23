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

export const imports = `import { DropdownMenu } from "@pisagor/react/dropdown-menu";`;

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

export { Checkboxes } from "./checkboxes";
export { Default } from "./default";
export { Destructive } from "./destructive";
export { GroupLabel } from "./group-label";
export { Icons } from "./icons";
export { Link } from "./link";
export { Nested } from "./nested";
export { Placements } from "./placements";
export { QuickItem } from "./quick-item";
export { RadioGroup } from "./radio-group";
export { Shortcuts } from "./shortcuts";
export { WithScroll } from "./with-scroll";
export { WithSeparator } from "./with-separator";
