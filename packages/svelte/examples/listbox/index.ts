import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import disabled_itemRaw from "./disabled-item.svelte?raw";
import gridRaw from "./grid.svelte?raw";
import groupingRaw from "./grouping.svelte?raw";
import horizontalRaw from "./horizontal.svelte?raw";
import image_explorerRaw from "./image-explorer.svelte?raw";
import selection_extendedRaw from "./selection-extended.svelte?raw";
import selection_multipleRaw from "./selection-multiple.svelte?raw";
import selection_noneRaw from "./selection-none.svelte?raw";
import transfer_listRaw from "./transfer-list.svelte?raw";
import with_descriptionRaw from "./with-description.svelte?raw";
import with_filterRaw from "./with-filter.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";
import with_popoverRaw from "./with-popover.svelte?raw";

export const imports = `import { Listbox } from "@pisagor/svelte";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  DisabledItem: stripSvelteExample(disabled_itemRaw),
  Grid: stripSvelteExample(gridRaw),
  Grouping: stripSvelteExample(groupingRaw),
  Horizontal: stripSvelteExample(horizontalRaw),
  ImageExplorer: stripSvelteExample(image_explorerRaw),
  SelectionExtended: stripSvelteExample(selection_extendedRaw),
  SelectionMultiple: stripSvelteExample(selection_multipleRaw),
  SelectionNone: stripSvelteExample(selection_noneRaw),
  TransferList: stripSvelteExample(transfer_listRaw),
  WithDescription: stripSvelteExample(with_descriptionRaw),
  WithFilter: stripSvelteExample(with_filterRaw),
  WithIcon: stripSvelteExample(with_iconRaw),
  WithPopover: stripSvelteExample(with_popoverRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as DisabledItem } from "./disabled-item.svelte";
export { default as Grid } from "./grid.svelte";
export { default as Grouping } from "./grouping.svelte";
export { default as Horizontal } from "./horizontal.svelte";
export { default as ImageExplorer } from "./image-explorer.svelte";
export { default as SelectionExtended } from "./selection-extended.svelte";
export { default as SelectionMultiple } from "./selection-multiple.svelte";
export { default as SelectionNone } from "./selection-none.svelte";
export { default as TransferList } from "./transfer-list.svelte";
export { default as WithDescription } from "./with-description.svelte";
export { default as WithFilter } from "./with-filter.svelte";
export { default as WithIcon } from "./with-icon.svelte";
export { default as WithPopover } from "./with-popover.svelte";
