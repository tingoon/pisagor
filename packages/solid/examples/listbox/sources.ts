import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { DisabledItemSource as DisabledItem } from "./disabled-item";
import { EmptySource as Empty } from "./empty";
import { GridSource as Grid } from "./grid";
import { GroupingSource as Grouping } from "./grouping";
import { HorizontalSource as Horizontal } from "./horizontal";
import { ImageExplorerSource as ImageExplorer } from "./image-explorer";
import { SelectionExtendedSource as SelectionExtended } from "./selection-extended";
import { SelectionMultipleSource as SelectionMultiple } from "./selection-multiple";
import { SelectionNoneSource as SelectionNone } from "./selection-none";
import { TransferListSource as TransferList } from "./transfer-list";
import { WithDescriptionSource as WithDescription } from "./with-description";
import { WithFilterSource as WithFilter } from "./with-filter";
import { WithIconSource as WithIcon } from "./with-icon";
import { WithPopoverSource as WithPopover } from "./with-popover";

export const imports = `import { Listbox } from "@pisagor/solid";`;

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
