import { stripSvelteExample } from "@pisagor/utils";
import checkboxesRaw from "./checkboxes.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import destructiveRaw from "./destructive.svelte?raw";
import group_labelRaw from "./group-label.svelte?raw";
import iconsRaw from "./icons.svelte?raw";
import linkRaw from "./link.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import placementsRaw from "./placements.svelte?raw";
import quick_itemRaw from "./quick-item.svelte?raw";
import radio_groupRaw from "./radio-group.svelte?raw";
import shortcutsRaw from "./shortcuts.svelte?raw";
import with_scrollRaw from "./with-scroll.svelte?raw";
import with_separatorRaw from "./with-separator.svelte?raw";

export const imports = `import { DropdownMenu } from "@pisagor/svelte/dropdown-menu";`;

export const sources = {
  Checkboxes: stripSvelteExample(checkboxesRaw),
  Default: stripSvelteExample(defaultRaw),
  Destructive: stripSvelteExample(destructiveRaw),
  GroupLabel: stripSvelteExample(group_labelRaw),
  Icons: stripSvelteExample(iconsRaw),
  Link: stripSvelteExample(linkRaw),
  Nested: stripSvelteExample(nestedRaw),
  Placements: stripSvelteExample(placementsRaw),
  QuickItem: stripSvelteExample(quick_itemRaw),
  RadioGroup: stripSvelteExample(radio_groupRaw),
  Shortcuts: stripSvelteExample(shortcutsRaw),
  WithScroll: stripSvelteExample(with_scrollRaw),
  WithSeparator: stripSvelteExample(with_separatorRaw),
} as const;

export { default as Checkboxes } from "./checkboxes.svelte";
export { default as Default } from "./default.svelte";
export { default as Destructive } from "./destructive.svelte";
export { default as GroupLabel } from "./group-label.svelte";
export { default as Icons } from "./icons.svelte";
export { default as Link } from "./link.svelte";
export { default as Nested } from "./nested.svelte";
export { default as Placements } from "./placements.svelte";
export { default as QuickItem } from "./quick-item.svelte";
export { default as RadioGroup } from "./radio-group.svelte";
export { default as Shortcuts } from "./shortcuts.svelte";
export { default as WithScroll } from "./with-scroll.svelte";
export { default as WithSeparator } from "./with-separator.svelte";
