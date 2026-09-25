import DataListShorthand from "./data-list.svelte";
import DataListItem from "./data-list-item.svelte";
import DataListRoot from "./data-list-root.svelte";

export const DataList = Object.assign(DataListShorthand, {
  Item: DataListItem,
  Root: DataListRoot,
});
