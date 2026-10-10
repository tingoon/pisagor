import type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  PaginationRootProps as PaginationPrimitiveRootProps,
} from "@ark-ui/react/pagination";
import {
  Pagination as PaginationPrimitive,
  usePaginationContext,
} from "@ark-ui/react/pagination";
import {
  CaretLeftIcon,
  CaretRightIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";
import type { PaginationProps as BasePaginationRootProps } from "@pisagor/props";
import { paginationRecipe } from "@pisagor/recipes";
import type { FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Button, type ButtonProps } from "./button";

// #region Context
const { useStyles: usePagination, withProvider } = createSlotRecipeContext({
  name: "Pagination",
  recipe: paginationRecipe,
});
// #endregion

// #region Types
export interface LocalPaginationRootProps
  extends PaginationPrimitiveRootProps,
    BasePaginationRootProps {}

export type PaginationItemsProps = Omit<PaginationContextProps, "children">;

export interface PaginationItemLinkProps extends ButtonProps {
  /** The page number to link to. */
  page?: "previous" | "next" | number;
}
// #endregion

// #region Parts
const PaginationRootBase = withProvider(PaginationPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<LocalPaginationRootProps>;

export function PaginationRoot({
  children,
  ...rest
}: LocalPaginationRootProps) {
  return (
    <PaginationRootBase {...rest}>
      {children ?? (
        <>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </>
      )}
    </PaginationRootBase>
  );
}

export function PaginationPrevTrigger(props: PaginationPrevTriggerProps) {
  return (
    <PaginationPrimitive.PrevTrigger {...props} asChild>
      <Button variant="ghost">
        <CaretLeftIcon />
        Previous
      </Button>
    </PaginationPrimitive.PrevTrigger>
  );
}

export function PaginationNextTrigger(props: PaginationNextTriggerProps) {
  return (
    <PaginationPrimitive.NextTrigger {...props} asChild>
      <Button variant="ghost">
        Next
        <CaretRightIcon />
      </Button>
    </PaginationPrimitive.NextTrigger>
  );
}

export function PaginationItem({
  children,
  className,
  ...rest
}: PaginationItemProps) {
  const { slots } = usePagination();

  return (
    <PaginationPrimitive.Item {...rest} asChild>
      <Button
        className={slots.item({ className })}
        size="icon-md"
        variant="ghost"
      >
        {children}
      </Button>
    </PaginationPrimitive.Item>
  );
}

export function PaginationItems(props: PaginationItemsProps) {
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

          const previousPage = pages
            .slice(0, index)
            .findLast((item) => item.type === "page");
          const nextPage = pages
            .slice(index + 1)
            .find((item) => item.type === "page");
          const ellipsisKey = `ellipsis-${previousPage?.value ?? "start"}-${nextPage?.value ?? "end"}`;

          return <PaginationEllipsis index={index} key={ellipsisKey} />;
        })
      }
    </PaginationPrimitive.Context>
  );
}

export function PaginationItemLink({
  page,
  children,
  ...rest
}: PaginationItemLinkProps) {
  const pagination = usePaginationContext();

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

export function PaginationEllipsis({
  className,
  ...rest
}: PaginationEllipsisProps) {
  const { slots } = usePagination();

  return (
    <PaginationPrimitive.Ellipsis
      {...rest}
      className={slots.ellipsis({ className })}
    >
      <DotsThreeIcon />
    </PaginationPrimitive.Ellipsis>
  );
}
// #endregion

// #region Display Names
PaginationRoot.displayName = "Pagination";
PaginationPrevTrigger.displayName = "Pagination.PrevTrigger";
PaginationNextTrigger.displayName = "Pagination.NextTrigger";
PaginationItem.displayName = "Pagination.Item";
PaginationItems.displayName = "Pagination.Items";
PaginationItemLink.displayName = "Pagination.ItemLink";
PaginationEllipsis.displayName = "Pagination.Ellipsis";

// #endregion

export type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  PaginationRootProps,
} from "@ark-ui/react/pagination";

export const Pagination = Object.assign(PaginationRoot, {
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  ItemLink: PaginationItemLink,
  Items: PaginationItems,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
});
