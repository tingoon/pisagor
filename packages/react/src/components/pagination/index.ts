import {
  PaginationEllipsis,
  PaginationItem,
  PaginationItemLink,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
} from "./pagination";

export type {
  PaginationEllipsisProps,
  PaginationItemLinkProps,
  PaginationItemProps,
  PaginationItemsProps,
  PaginationNextProps,
  PaginationPreviousProps,
  PaginationRootProps,
} from "./pagination";

export const Pagination = Object.assign(PaginationRoot, {
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  ItemLink: PaginationItemLink,
  Items: PaginationItems,
  Next: PaginationNext,
  Previous: PaginationPrevious,
});
