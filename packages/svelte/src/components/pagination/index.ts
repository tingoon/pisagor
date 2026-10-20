import { Pagination as PaginationPrimitive } from "@ark-ui/svelte";
import PaginationShorthand from "./pagination.svelte";
import Ellipsis from "./pagination-ellipsis.svelte";
import Item from "./pagination-item.svelte";
import ItemLink from "./pagination-item-link.svelte";
import NextTrigger from "./pagination-next-trigger.svelte";
import PrevTrigger from "./pagination-prev-trigger.svelte";
import Root from "./pagination-root.svelte";

export type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
} from "@ark-ui/svelte";

export const Pagination = Object.assign(PaginationShorthand, {
  Context: PaginationPrimitive.Context,
  Ellipsis,
  Item,
  ItemLink,
  NextTrigger,
  PrevTrigger,
  Root,
});
