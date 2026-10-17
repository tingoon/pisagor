import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import DisabledItem from "./disabled-item.vue?raw";
import Empty from "./empty.vue?raw";
import Grid from "./grid.vue?raw";
import Grouping from "./grouping.vue?raw";
import Horizontal from "./horizontal.vue?raw";
import ImageExplorer from "./image-explorer.vue?raw";
import SelectionExtended from "./selection-extended.vue?raw";
import SelectionMultiple from "./selection-multiple.vue?raw";
import SelectionNone from "./selection-none.vue?raw";
import TransferList from "./transfer-list.vue?raw";
import WithDescription from "./with-description.vue?raw";
import WithFilter from "./with-filter.vue?raw";
import WithIcon from "./with-icon.vue?raw";
import WithPopover from "./with-popover.ts?raw";

export const imports = `import { Listbox } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  DisabledItem,
  Empty,
  Grid,
  Grouping,
  Horizontal,
  ImageExplorer,
  SelectionExtended,
  SelectionMultiple,
  SelectionNone,
  TransferList,
  WithDescription,
  WithFilter,
  WithIcon,
  WithPopover,
} as const;
