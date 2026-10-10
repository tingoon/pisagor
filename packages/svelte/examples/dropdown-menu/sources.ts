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

export const imports = `import { DropdownMenu } from "@pisagor/svelte";`;

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
