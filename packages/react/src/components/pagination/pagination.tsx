import {
  Pagination as PaginationPrimitive,
  usePaginationContext as usePagination,
} from "@ark-ui/react/pagination";
import { CaretLeftIcon, CaretRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import {
  paginationEllipsisVariants,
  paginationInlineVariants,
  paginationVariants,
} from "@pisagor/styles/ui/pagination";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";

// #region Types
interface PaginationProps extends ComponentProps<typeof PaginationPrimitive.Root>, WithTestId {}

interface PaginationItemLinkProps extends ButtonProps {
  /** The page number to link to. */
  page?: "previous" | "next" | number;
}

// #endregion

// #region Components
export function PaginationRoot({ className, children, testId, ...rest }: PaginationProps) {
  return (
    <PaginationPrimitive.Root
      {...rest}
      className={cn(paginationVariants(), className)}
      data-testid={testId}
    >
      {children ?? (
        <>
          <PaginationPrevious />
          <PaginationItems />
          <PaginationNext />
        </>
      )}
    </PaginationPrimitive.Root>
  );
}
PaginationRoot.displayName = "Pagination";

export function PaginationPrevious(props: ComponentProps<typeof PaginationPrimitive.PrevTrigger>) {
  return (
    <PaginationPrimitive.PrevTrigger asChild {...props}>
      <Button variant="ghost">
        <CaretLeftIcon />
        Previous
      </Button>
    </PaginationPrimitive.PrevTrigger>
  );
}
PaginationPrevious.displayName = "Pagination.Previous";

export function PaginationNext(props: ComponentProps<typeof PaginationPrimitive.NextTrigger>) {
  return (
    <PaginationPrimitive.NextTrigger asChild {...props}>
      <Button variant="ghost">
        Next
        <CaretRightIcon />
      </Button>
    </PaginationPrimitive.NextTrigger>
  );
}
PaginationNext.displayName = "Pagination.Next";

export function PaginationItem({
  className,
  children,
  ...rest
}: ComponentProps<typeof PaginationPrimitive.Item>) {
  return (
    <PaginationPrimitive.Item {...rest} asChild>
      <Button className={cn(paginationInlineVariants(), className)} size="icon-md" variant="ghost">
        {children}
      </Button>
    </PaginationPrimitive.Item>
  );
}
PaginationItem.displayName = "Pagination.Item";

export function PaginationItems(
  props: Omit<ComponentProps<typeof PaginationPrimitive.Context>, "children">,
) {
  return (
    <PaginationPrimitive.Context {...props}>
      {({ pages }) =>
        pages.map((page, index) => {
          if (page.type === "page") {
            return (
              <PaginationItem key={page.value} type="page" value={page.value}>
                {page.value}
              </PaginationItem>
            );
          }

          const previousPage = pages.slice(0, index).findLast((item) => item.type === "page");
          const nextPage = pages.slice(index + 1).find((item) => item.type === "page");
          const ellipsisKey = `ellipsis-${previousPage?.value ?? "start"}-${nextPage?.value ?? "end"}`;

          return <PaginationEllipsis index={index} key={ellipsisKey} />;
        })
      }
    </PaginationPrimitive.Context>
  );
}
PaginationItems.displayName = "Pagination.Items";

export function PaginationItemLink({ page, children, ...rest }: PaginationItemLinkProps) {
  const pagination = usePagination();

  const pageValue = () => {
    if (page === "previous") {
      return pagination.previousPage;
    }

    if (page === "next") {
      return pagination.nextPage;
    }

    return page;
  };

  if (typeof page === "number") {
    return (
      <Button {...rest} asChild variant="outline">
        <a href={`?page=${pageValue()}`}>{children}</a>
      </Button>
    );
  }

  return (
    <Button {...rest} asChild variant="ghost">
      <a href={`?page=${pageValue()}`}>{children}</a>
    </Button>
  );
}
PaginationItemLink.displayName = "Pagination.ItemLink";

export function PaginationEllipsis({
  className,
  ...rest
}: ComponentProps<typeof PaginationPrimitive.Ellipsis>) {
  return (
    <PaginationPrimitive.Ellipsis {...rest} className={cn(paginationEllipsisVariants(), className)}>
      <DotsThreeIcon />
    </PaginationPrimitive.Ellipsis>
  );
}
PaginationEllipsis.displayName = "Pagination.Ellipsis";

// #endregion
