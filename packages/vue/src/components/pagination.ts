import {
  Pagination as PaginationPrimitive,
  usePaginationContext,
} from "@ark-ui/vue";
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import type {
  PaginationContract,
  PaginationRootContract,
} from "@pisagor/contracts";
import { buttonRecipe, paginationRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Pagination",
  recipe: paginationRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];
type PageEntry = { type: "page"; value: number } | { type: "ellipsis" };

// #region Types
export type PaginationRootProps = PaginationRootContract;

export interface PaginationProps
  extends PaginationRootProps, PaginationContract {}

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

export type {
  PaginationContextProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
} from "@ark-ui/vue";
// #endregion

// #region Parts
export const PaginationRoot = withProvider<PaginationRootContract>(
  PaginationPrimitive.Root,
  { name: "Root", slot: "base" },
);

export const PaginationPrevTrigger = withContext(
  PaginationPrimitive.PrevTrigger,
  { name: "PrevTrigger" },
);

export const PaginationNextTrigger = withContext(
  PaginationPrimitive.NextTrigger,
  { name: "NextTrigger" },
);

export const PaginationItem = withContext(PaginationPrimitive.Item, {
  name: "Item",
});

export const PaginationEllipsis = withContext(PaginationPrimitive.Ellipsis, {
  name: "Ellipsis",
});

/** Link styled as a page button; for URL-driven pagination. Not an Ark part. */
export const PaginationItemLink = defineComponent({
  inheritAttrs: false,
  name: "PaginationItemLink",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    /**
     * Builds the link href for a page.
     *
     * @defaultValue (page) => `?page=${page}`
     */
    getHref: {
      default: (page: number) => `?page=${page}`,
      type: Function as PropType<(page: number) => string>,
    },
    page: {
      default: undefined,
      type: [String, Number] as PropType<"previous" | "next" | number>,
    },
    size: { default: undefined, type: String as PropType<ButtonProps["size"]> },
    variant: {
      default: undefined,
      type: String as PropType<ButtonProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const pagination = usePaginationContext();

    return () => {
      const pageValue = () => {
        if (props.page === "previous") {
          return pagination.value.previousPage;
        }

        if (props.page === "next") {
          return pagination.value.nextPage;
        }

        return props.page;
      };

      const variant =
        props.variant ?? (typeof props.page === "number" ? "outline" : "ghost");

      return h(
        "a",
        {
          ...attrs,
          "aria-current":
            props.page === pagination.value.page ? "page" : undefined,
          class: cn(
            buttonRecipe({ size: props.size, variant }).base(),
            props.class,
            attrs.class,
          ),
          href: props.getHref(pageValue() ?? 1),
        },
        slots,
      );
    };
  },
});

// #endregion

// #region Shorthand
export const PaginationShorthand = defineComponent({
  inheritAttrs: false,
  name: "Pagination",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<PaginationProps["classNames"]>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () => {
      const classNames = props.classNames;

      return h(PaginationRoot as ArkPart, { ...attrs }, () => [
        h(
          PaginationPrevTrigger,
          { asChild: true, class: classNames?.prevTrigger },
          () =>
            h(Button, { variant: "ghost" }, () => [
              h(PhCaretLeft),
              m("pagination.previous"),
            ]),
        ),
        h(PaginationPrimitive.Context as ArkPart, null, {
          default: ({ pages }: { pages: PageEntry[] }) =>
            pages.map((page, index) => {
              if (page.type === "page") {
                return h(
                  PaginationItem as ArkPart,
                  {
                    asChild: true,
                    class: classNames?.item,
                    key: page.value,
                    type: "page",
                    value: page.value,
                  },
                  () =>
                    h(Button, { size: "icon-md", variant: "ghost" }, () =>
                      String(page.value),
                    ),
                );
              }

              const previousPage = pages
                .slice(0, index)
                .findLast((item) => item.type === "page");
              const nextPage = pages
                .slice(index + 1)
                .find((item) => item.type === "page");
              const ellipsisKey = `ellipsis-${previousPage?.type === "page" ? previousPage.value : "start"}-${nextPage?.type === "page" ? nextPage.value : "end"}`;

              return h(
                PaginationEllipsis as ArkPart,
                { class: classNames?.ellipsis, index, key: ellipsisKey },
                () => h(PhDotsThree),
              );
            }),
        }),
        h(
          PaginationNextTrigger,
          { asChild: true, class: classNames?.nextTrigger },
          () =>
            h(Button, { variant: "ghost" }, () => [
              m("pagination.next"),
              h(PhCaretRight),
            ]),
        ),
      ]);
    };
  },
});
// #endregion

export const Pagination = Object.assign(PaginationShorthand, {
  Context: PaginationPrimitive.Context,
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  ItemLink: PaginationItemLink,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
  Root: PaginationRoot,
});
