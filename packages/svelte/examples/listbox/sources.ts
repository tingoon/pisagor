import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
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
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
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
