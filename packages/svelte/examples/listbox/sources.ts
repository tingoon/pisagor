import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import DisabledItem from "./disabled-item.svelte?raw";
import Empty from "./empty.svelte?raw";
import Grid from "./grid.svelte?raw";
import Grouping from "./grouping.svelte?raw";
import Horizontal from "./horizontal.svelte?raw";
import ImageExplorer from "./image-explorer.svelte?raw";
import SelectionExtended from "./selection-extended.svelte?raw";
import SelectionMultiple from "./selection-multiple.svelte?raw";
import SelectionNone from "./selection-none.svelte?raw";
import TransferList from "./transfer-list.svelte?raw";
import WithDescription from "./with-description.svelte?raw";
import WithFilter from "./with-filter.svelte?raw";
import WithIcon from "./with-icon.svelte?raw";
import WithPopover from "./with-popover.svelte?raw";

export const imports = `import { Listbox } from "@pisagor/svelte";`;

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
