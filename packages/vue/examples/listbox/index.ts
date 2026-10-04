import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import disabled_itemRaw from "./disabled-item.vue?raw";
import gridRaw from "./grid.vue?raw";
import groupingRaw from "./grouping.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";
import image_explorerRaw from "./image-explorer.vue?raw";
import selection_extendedRaw from "./selection-extended.vue?raw";
import selection_multipleRaw from "./selection-multiple.vue?raw";
import selection_noneRaw from "./selection-none.vue?raw";
import transfer_listRaw from "./transfer-list.vue?raw";
import with_descriptionRaw from "./with-description.vue?raw";
import with_filterRaw from "./with-filter.vue?raw";
import with_iconRaw from "./with-icon.vue?raw";
import with_popoverRaw from "./with-popover.ts?raw";

export const imports = `import { Listbox } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  DisabledItem: disabled_itemRaw,
  Grid: gridRaw,
  Grouping: groupingRaw,
  Horizontal: horizontalRaw,
  ImageExplorer: image_explorerRaw,
  SelectionExtended: selection_extendedRaw,
  SelectionMultiple: selection_multipleRaw,
  SelectionNone: selection_noneRaw,
  TransferList: transfer_listRaw,
  WithDescription: with_descriptionRaw,
  WithFilter: with_filterRaw,
  WithIcon: with_iconRaw,
  WithPopover: with_popoverRaw,
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as DisabledItem } from "./disabled-item.vue";
export { default as Grid } from "./grid.vue";
export { default as Grouping } from "./grouping.vue";
export { default as Horizontal } from "./horizontal.vue";
export { default as ImageExplorer } from "./image-explorer.vue";
export { default as SelectionExtended } from "./selection-extended.vue";
export { default as SelectionMultiple } from "./selection-multiple.vue";
export { default as SelectionNone } from "./selection-none.vue";
export { default as TransferList } from "./transfer-list.vue";
export { default as WithDescription } from "./with-description.vue";
export { default as WithFilter } from "./with-filter.vue";
export { default as WithIcon } from "./with-icon.vue";
export { default as WithPopover } from "./with-popover";
