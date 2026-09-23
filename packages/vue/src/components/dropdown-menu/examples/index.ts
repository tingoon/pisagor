import { stripVueExample } from "@pisagor/utils";
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

export const imports = `import { DropdownMenu } from "@pisagor/vue/dropdown-menu";`;

export const sources = {
  Checkboxes: stripVueExample(checkboxesRaw),
  Default: stripVueExample(defaultRaw),
  Destructive: stripVueExample(destructiveRaw),
  GroupLabel: stripVueExample(group_labelRaw),
  Icons: stripVueExample(iconsRaw),
  Link: stripVueExample(linkRaw),
  Nested: stripVueExample(nestedRaw),
  Placements: stripVueExample(placementsRaw),
  QuickItem: stripVueExample(quick_itemRaw),
  RadioGroup: stripVueExample(radio_groupRaw),
  Shortcuts: stripVueExample(shortcutsRaw),
  WithScroll: stripVueExample(with_scrollRaw),
  WithSeparator: stripVueExample(with_separatorRaw),
} as const;

export { default as Checkboxes } from "./checkboxes.vue";
export { default as Default } from "./default.vue";
export { default as Destructive } from "./destructive.vue";
export { default as GroupLabel } from "./group-label.vue";
export { default as Icons } from "./icons.vue";
export { default as Link } from "./link.vue";
export { default as Nested } from "./nested.vue";
export { default as Placements } from "./placements.vue";
export { default as QuickItem } from "./quick-item.vue";
export { default as RadioGroup } from "./radio-group.vue";
export { default as Shortcuts } from "./shortcuts.vue";
export { default as WithScroll } from "./with-scroll.vue";
export { default as WithSeparator } from "./with-separator.vue";
