import {
  Pagination as PaginationPrimitive,
  usePaginationContext,
} from "@ark-ui/react";
import type {
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  PaginationRootProps as PaginationRootPrimitiveProps,
} from "@ark-ui/react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";
import type {
  PaginationContract,
  PaginationRootContract,
} from "@pisagor/contracts";
import { paginationRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";
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
function ItemLink({
  page,
  getHref = (value) => `?page=${value}`,
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
        <a
          aria-current={page === pagination.page ? "page" : undefined}
          href={getHref(pageValue() ?? 1)}
        >
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button {...rest} asChild variant="ghost">
      <a href={getHref(pageValue() ?? 1)}>{children}</a>
    </Button>
  );
}

// #endregion

// #region Shorthand
export function PaginationShorthand({ classNames, ...rest }: PaginationProps) {
  const { m } = useLocale();

  return (
    <Root {...rest}>
      <PrevTrigger asChild className={classNames?.prevTrigger}>
        <Button variant="ghost">
          <CaretLeftIcon />
          {m("pagination.previous")}
        </Button>
      </PrevTrigger>

      <PaginationPrimitive.Context>
        {({ pages }) =>
          pages.map((page, index) => {
            if (page.type === "page") {
              return (
                <Item
                  asChild
                  className={classNames?.item}
                  key={page.value}
                  type="page"
                  value={page.value}
                >
                  <Button size="icon-md" variant="ghost">
                    {page.value}
                  </Button>
                </Item>
              );
            }

            const previousPage = pages
              .slice(0, index)
              .findLast((item) => item.type === "page");
            const nextPage = pages
              .slice(index + 1)
              .find((item) => item.type === "page");
            const ellipsisKey = `ellipsis-${previousPage?.value ?? "start"}-${nextPage?.value ?? "end"}`;

            return (
              <Ellipsis
                className={classNames?.ellipsis}
                index={index}
                key={ellipsisKey}
              >
                <DotsThreeIcon />
              </Ellipsis>
            );
          })
        }
      </PaginationPrimitive.Context>

      <NextTrigger asChild className={classNames?.nextTrigger}>
        <Button variant="ghost">
          {m("pagination.next")}
          <CaretRightIcon />
        </Button>
      </NextTrigger>
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
} from "@ark-ui/react";

export const Pagination = Object.assign(PaginationShorthand, {
  Context: PaginationPrimitive.Context,
  Ellipsis,
  Item,
  ItemLink,
  NextTrigger,
  PrevTrigger,
  Root,
});
