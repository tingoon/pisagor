import PaginationEllipsis from "./pagination-ellipsis.svelte";
import PaginationItem from "./pagination-item.svelte";
import PaginationItemLink from "./pagination-item-link.svelte";
import PaginationItems from "./pagination-items.svelte";
import PaginationNextTrigger from "./pagination-next-trigger.svelte";
import PaginationPrevTrigger from "./pagination-prev-trigger.svelte";
import PaginationRoot from "./pagination-root.svelte";

export const Pagination = Object.assign(PaginationRoot, {
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  ItemLink: PaginationItemLink,
  Items: PaginationItems,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
  Root: PaginationRoot,
});
