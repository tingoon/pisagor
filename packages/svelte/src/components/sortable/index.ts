import SortableHandle from "./sortable-handle.svelte";
import SortableItem from "./sortable-item.svelte";
import SortableItemContent from "./sortable-item-content.svelte";
import SortableRoot from "./sortable-root.svelte";

export const Sortable = Object.assign(SortableRoot, {
  Handle: SortableHandle,
  Item: SortableItem,
  ItemContent: SortableItemContent,
});
