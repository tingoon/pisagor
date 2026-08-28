import { DataListItem, DataListRoot, DataListShorthand } from "./data-list";

export type { DataListItemProps, DataListProps, DataListRootProps } from "./data-list";

export const DataList = Object.assign(DataListShorthand, {
  Item: DataListItem,
  Root: DataListRoot,
});
