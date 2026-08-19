import { SortableHandle, SortableItem, SortableItemContent, SortableRoot } from "./sortable";

export type { SortableHandleProps, SortableItemProps, SortableRootProps } from "./sortable";
export { useSortable } from "./sortable";

export const Sortable = Object.assign(SortableRoot, {
  Handle: SortableHandle,
  Item: SortableItem,
  ItemContent: SortableItemContent,
  Root: SortableRoot,
});
