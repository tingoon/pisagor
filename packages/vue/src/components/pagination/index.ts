import {
  PaginationEllipsis,
  PaginationItem,
  PaginationItemLink,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./pagination";

export type { PaginationItemLinkProps } from "./pagination";

export const Pagination = Object.assign(PaginationRoot, {
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  ItemLink: PaginationItemLink,
  Items: PaginationItems,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
});
