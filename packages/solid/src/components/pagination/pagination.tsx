import type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  PaginationRootProps as PaginationPrimitiveRootProps,
} from "@ark-ui/solid/pagination";
import { Pagination as PaginationPrimitive, usePaginationContext } from "@ark-ui/solid/pagination";
import { paginationRecipe } from "@pisagor/recipes/pagination";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { CaretLeftIcon, CaretRightIcon, DotsThreeIcon } from "../../internal/icons";
import { Button, type ButtonProps } from "../button";
import { PaginationContext, usePagination } from "./pagination.context";

export interface PaginationRootProps extends PaginationPrimitiveRootProps {
  recipe?: typeof paginationRecipe;
}

export type PaginationItemsProps = Omit<PaginationContextProps, "children">;

export interface PaginationItemLinkProps extends ButtonProps {
  page?: "previous" | "next" | number;
}

export function PaginationRoot(props: PaginationRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? paginationRecipe)();

  return (
    <PaginationContext value={{ slots: slots() }}>
      <PaginationPrimitive.Root {...rest} class={slots().base({ class: cn(local.class) })}>
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
      </PaginationPrimitive.Root>
    </PaginationContext>
  );
}

export function PaginationPrevTrigger(props: PaginationPrevTriggerProps): JSX.Element {
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

export function PaginationNextTrigger(props: PaginationNextTriggerProps): JSX.Element {
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
  const { slots } = usePagination();

  return (
    <PaginationPrimitive.Item
      {...rest}
      asChild={(itemProps) => (
        <Button
          {...itemProps({ class: slots.item({ class: cn(local.class) }) })}
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

export function PaginationItemLink(props: PaginationItemLinkProps): JSX.Element {
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

export function PaginationEllipsis(props: PaginationEllipsisProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = usePagination();

  return (
    <PaginationPrimitive.Ellipsis {...rest} class={slots.ellipsis({ class: cn(local.class) })}>
      <DotsThreeIcon />
    </PaginationPrimitive.Ellipsis>
  );
}
