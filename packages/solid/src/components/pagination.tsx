import {
  Pagination as PaginationPrimitive,
  usePaginationContext,
} from "@ark-ui/solid";
import type {
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  PaginationRootProps as PaginationRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  PaginationContract,
  PaginationRootContract,
} from "@pisagor/contracts";
import { paginationRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import {
  CaretLeftIcon,
  CaretRightIcon,
  DotsThreeIcon,
  createSlotRecipeContext,
} from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Pagination",
  recipe: paginationRecipe,
});
// #endregion

// #region Types
export type PaginationRootProps = PaginationRootPrimitiveProps &
  PaginationRootContract;

export interface PaginationProps
  extends Omit<PaginationRootProps, "children">, PaginationContract {}

export interface PaginationItemLinkProps extends ButtonProps {
  /** The page number to link to. */
  page?: "previous" | "next" | number;
  /**
   * Builds the link URL for a page.
   *
   * @defaultValue (page) => `?page=${page}`
   */
  getHref?: (page: number) => string;
}
// #endregion

// #region Parts
const Root = withProvider<PaginationRootProps>(PaginationPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const PrevTrigger = withContext<PaginationPrevTriggerProps>(
  PaginationPrimitive.PrevTrigger,
  { name: "PrevTrigger" },
);

const NextTrigger = withContext<PaginationNextTriggerProps>(
  PaginationPrimitive.NextTrigger,
  { name: "NextTrigger" },
);

const Item = withContext<PaginationItemProps>(PaginationPrimitive.Item, {
  name: "Item",
});

const Ellipsis = withContext<PaginationEllipsisProps>(
  PaginationPrimitive.Ellipsis,
  { name: "Ellipsis" },
);

/** Link styled as a page button; for URL-driven pagination. Not an Ark part. */
function ItemLink(props: PaginationItemLinkProps): JSX.Element {
  const [local, rest] = splitProps(props, ["page", "children", "getHref"]);
  const pagination = usePaginationContext();

  const pageValue = () => {
    if (local.page === "previous") {
      return pagination().previousPage;
    }

    if (local.page === "next") {
      return pagination().nextPage;
    }

    return local.page;
  };

  const isPage = () => typeof local.page === "number";

  return (
    <Button
      {...rest}
      asChild={(buttonProps) => (
        <a
          {...buttonProps()}
          aria-current={
            isPage() && local.page === pagination().page ? "page" : undefined
          }
          href={(local.getHref ?? ((value) => `?page=${value}`))(
            pageValue() ?? 1,
          )}
        >
          {local.children}
        </a>
      )}
      variant={isPage() ? "outline" : "ghost"}
    />
  );
}
// #endregion

// #region Shorthand
export function PaginationShorthand(props: PaginationProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["classNames"]);

  return (
    <Root {...rest}>
      <PrevTrigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="ghost">
            <CaretLeftIcon />
            {m("pagination.previous")}
          </Button>
        )}
        class={local.classNames?.prevTrigger}
      />

      <PaginationPrimitive.Context>
        {(api) => (
          <For each={api().pages}>
            {(page, index) => (
              <Show
                fallback={
                  <Ellipsis class={local.classNames?.ellipsis} index={index()}>
                    <DotsThreeIcon />
                  </Ellipsis>
                }
                when={page.type === "page" ? page : undefined}
              >
                {(pageItem) => (
                  <Item
                    asChild={(itemProps) => (
                      <Button {...itemProps()} size="icon-md" variant="ghost">
                        {pageItem().value}
                      </Button>
                    )}
                    class={local.classNames?.item}
                    type="page"
                    value={pageItem().value}
                  />
                )}
              </Show>
            )}
          </For>
        )}
      </PaginationPrimitive.Context>

      <NextTrigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="ghost">
            {m("pagination.next")}
            <CaretRightIcon />
          </Button>
        )}
        class={local.classNames?.nextTrigger}
      />
    </Root>
  );
}
// #endregion

export type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
} from "@ark-ui/solid";

export const Pagination = Object.assign(PaginationShorthand, {
  Context: PaginationPrimitive.Context,
  Ellipsis,
  Item,
  ItemLink,
  NextTrigger,
  PrevTrigger,
  Root,
});
