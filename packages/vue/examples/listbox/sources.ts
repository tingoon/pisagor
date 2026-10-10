import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
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
