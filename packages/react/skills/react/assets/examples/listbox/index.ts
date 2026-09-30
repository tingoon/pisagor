import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import disabled_itemRaw from "./disabled-item.tsx?raw";
import gridRaw from "./grid.tsx?raw";
import groupingRaw from "./grouping.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";
import image_explorerRaw from "./image-explorer.tsx?raw";
import selection_extendedRaw from "./selection-extended.tsx?raw";
import selection_multipleRaw from "./selection-multiple.tsx?raw";
import selection_noneRaw from "./selection-none.tsx?raw";
import transfer_listRaw from "./transfer-list.tsx?raw";
import with_descriptionRaw from "./with-description.tsx?raw";
import with_filterRaw from "./with-filter.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";
import with_popoverRaw from "./with-popover.tsx?raw";

export const imports = `import { Listbox } from "@pisagor/react/listbox";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  DisabledItem: stripTsxExample(disabled_itemRaw),
  Grid: stripTsxExample(gridRaw),
  Grouping: stripTsxExample(groupingRaw),
  Horizontal: stripTsxExample(horizontalRaw),
  ImageExplorer: stripTsxExample(image_explorerRaw),
  SelectionExtended: stripTsxExample(selection_extendedRaw),
  SelectionMultiple: stripTsxExample(selection_multipleRaw),
  SelectionNone: stripTsxExample(selection_noneRaw),
  TransferList: stripTsxExample(transfer_listRaw),
  WithDescription: stripTsxExample(with_descriptionRaw),
  WithFilter: stripTsxExample(with_filterRaw),
  WithIcon: stripTsxExample(with_iconRaw),
  WithPopover: stripTsxExample(with_popoverRaw),
} as const;

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { DisabledItem } from "./disabled-item";
export { Grid } from "./grid";
export { Grouping } from "./grouping";
export { Horizontal } from "./horizontal";
export { ImageExplorer } from "./image-explorer";
export { SelectionExtended } from "./selection-extended";
export { SelectionMultiple } from "./selection-multiple";
export { SelectionNone } from "./selection-none";
export { TransferList } from "./transfer-list";
export { WithDescription } from "./with-description";
export { WithFilter } from "./with-filter";
export { WithIcon } from "./with-icon";
export { WithPopover } from "./with-popover";
