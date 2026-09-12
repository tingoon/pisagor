import DataListShorthand from "./data-list.astro";
import DataListItem from "./data-list-item.astro";
import DataListRoot from "./data-list-root.astro";

export const DataList = Object.assign(DataListShorthand, {
  Item: DataListItem,
  Root: DataListRoot,
});
