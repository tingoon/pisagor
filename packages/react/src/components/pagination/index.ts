import {
  PaginationEllipsis,
  PaginationItem,
  PaginationItemLink,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./pagination";

export type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  PaginationRootProps,
} from "@ark-ui/react/pagination";

export type { PaginationItemLinkProps, PaginationItemsProps } from "./pagination";

export const Pagination = Object.assign(PaginationRoot, {
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  ItemLink: PaginationItemLink,
  Items: PaginationItems,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
});
