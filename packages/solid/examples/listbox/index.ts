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

export const imports = `import { Listbox } from "@pisagor/solid";`;

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

export * from "./compound";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./disabled-item";
export * from "./grid";
export * from "./grouping";
export * from "./horizontal";
export * from "./image-explorer";
export * from "./selection-extended";
export * from "./selection-multiple";
export * from "./selection-none";
export * from "./transfer-list";
export * from "./with-description";
export * from "./with-filter";
export * from "./with-icon";
export * from "./with-popover";
