import type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  PaginationRootProps as PaginationPrimitiveRootProps,
} from "@ark-ui/solid/pagination";
import {
  Pagination as PaginationPrimitive,
  usePaginationContext,
} from "@ark-ui/solid/pagination";
import type { PaginationProps as BasePaginationRootProps } from "@pisagor/props";
import { paginationRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import {
  CaretLeftIcon,
  CaretRightIcon,
  DotsThreeIcon,
} from "../internal/icons";
import { Button, type ButtonProps } from "./button";

// #region Context
const { useStyles: usePagination, withProvider } = createSlotRecipeContext({
  name: "Pagination",
  recipe: paginationRecipe,
});
// #endregion

export interface LocalPaginationRootProps
  extends PaginationPrimitiveRootProps,
    BasePaginationRootProps {}

export type PaginationItemsProps = Omit<PaginationContextProps, "children">;

export interface PaginationItemLinkProps extends ButtonProps {
  page?: "previous" | "next" | number;
}

const PaginationRootProvider: Component<LocalPaginationRootProps> =
  withProvider(PaginationPrimitive.Root, { name: "Root", slot: "base" });

export function PaginationRoot(props: LocalPaginationRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <PaginationRootProvider {...rest}>
      <Show
        fallback={
          <>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </>
        }
        when={local.children}
      >
        {local.children}
      </Show>
    </PaginationRootProvider>
  );
}

export function PaginationPrevTrigger(
  props: PaginationPrevTriggerProps,
): JSX.Element {
  return (
    <PaginationPrimitive.PrevTrigger
      {...props}
      asChild={(triggerProps) => (
        <Button {...triggerProps()} variant="ghost">
          <CaretLeftIcon />
          Previous
        </Button>
      )}
    />
  );
}

export function PaginationNextTrigger(
  props: PaginationNextTriggerProps,
): JSX.Element {
  return (
    <PaginationPrimitive.NextTrigger
      {...props}
      asChild={(triggerProps) => (
        <Button {...triggerProps()} variant="ghost">
          Next
          <CaretRightIcon />
        </Button>
      )}
    />
  );
}

export function PaginationItem(props: PaginationItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = usePagination();

  return (
    <PaginationPrimitive.Item
      {...rest}
      asChild={(itemProps) => (
        <Button
          {...itemProps({ class: styles.slots.item({ class: local.class }) })}
          size="icon-md"
          variant="ghost"
        >
          {local.children}
        </Button>
      )}
    />
  );
}

export function PaginationItems(props: PaginationItemsProps): JSX.Element {
  return (
    <PaginationPrimitive.Context {...props}>
      {(api) => (
        <For each={api().pages}>
          {(page, index) => (
            <Show
              fallback={<PaginationEllipsis index={index()} />}
              when={page.type === "page" ? page : undefined}
            >
              {(pageItem) => (
                <PaginationItem type="page" value={pageItem().value}>
                  {pageItem().value}
                </PaginationItem>
              )}
            </Show>
          )}
        </For>
      )}
    </PaginationPrimitive.Context>
  );
}

export function PaginationItemLink(
  props: PaginationItemLinkProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["page", "children"]);
  const pagination = usePaginationContext();

  const pageValue = () => {
    if (local.page === "previous") return pagination().previousPage;
    if (local.page === "next") return pagination().nextPage;
    return local.page;
  };

  const variant = () => (typeof local.page === "number" ? "outline" : "ghost");

  return (
    <Button
      {...rest}
      asChild={(buttonProps) => (
        <a {...buttonProps()} href={`?page=${pageValue()}`}>
          {local.children}
        </a>
      )}
      variant={variant()}
    />
  );
}

export function PaginationEllipsis(
  props: PaginationEllipsisProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = usePagination();

  return (
    <PaginationPrimitive.Ellipsis
      {...rest}
      class={styles.slots.ellipsis({ class: local.class })}
    >
      <DotsThreeIcon />
    </PaginationPrimitive.Ellipsis>
  );
}

export type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  PaginationRootProps,
} from "@ark-ui/solid/pagination";

export const Pagination = Object.assign(PaginationRoot, {
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  ItemLink: PaginationItemLink,
  Items: PaginationItems,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
});
