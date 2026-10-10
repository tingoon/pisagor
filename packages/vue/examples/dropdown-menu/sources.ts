import checkboxesRaw from "./checkboxes.vue?raw";
import defaultRaw from "./default.vue?raw";
import destructiveRaw from "./destructive.vue?raw";
import group_labelRaw from "./group-label.vue?raw";
import iconsRaw from "./icons.vue?raw";
import linkRaw from "./link.vue?raw";
import nestedRaw from "./nested.vue?raw";
import placementsRaw from "./placements.vue?raw";
import quick_itemRaw from "./quick-item.vue?raw";
import radio_groupRaw from "./radio-group.vue?raw";
import shortcutsRaw from "./shortcuts.vue?raw";
import with_scrollRaw from "./with-scroll.vue?raw";
import with_separatorRaw from "./with-separator.vue?raw";

export const imports = `import { DropdownMenu } from "@pisagor/vue";`;

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
