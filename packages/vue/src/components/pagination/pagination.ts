import { ark } from "@ark-ui/vue/factory";
import { Pagination as PaginationPrimitive, usePaginationContext } from "@ark-ui/vue/pagination";
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import { buttonRecipe } from "@pisagor/recipes/button";
import { paginationRecipe } from "@pisagor/recipes/pagination";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { Button, type ButtonProps } from "../button";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface PaginationItemLinkProps extends ButtonProps {
  page?: "previous" | "next" | number;
}

export interface PaginationRootProps {
  /**
   * Style recipe. Defaults to `paginationRecipe` from `@pisagor/recipes/pagination`.
   *
   * @defaultValue paginationRecipe
   */
  recipe?: typeof paginationRecipe;
  class?: unknown;
}
// #endregion

// #region Parts
export const PaginationRoot = defineComponent({
  inheritAttrs: false,
  name: "PaginationRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: paginationRecipe,
      type: Function as PropType<typeof paginationRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        PaginationPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: cn(props.class, attrs.class) }),
        },
        slots.default ??
          (() => [h(PaginationPrevTrigger), h(PaginationItems), h(PaginationNextTrigger)]),
      );
    };
  },
});

export const PaginationPrevTrigger = defineComponent({
  inheritAttrs: false,
  name: "PaginationPrevTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(PaginationPrimitive.PrevTrigger as ArkPart, { ...attrs, asChild: true }, () =>
        h(Button as ArkPart, { variant: "ghost" }, () => [
          h(PhCaretLeft),
          slots.default?.() ?? "Previous",
        ]),
      );
  },
});

export const PaginationNextTrigger = defineComponent({
  inheritAttrs: false,
  name: "PaginationNextTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(PaginationPrimitive.NextTrigger as ArkPart, { ...attrs, asChild: true }, () =>
        h(Button as ArkPart, { variant: "ghost" }, () => [
          slots.default?.() ?? "Next",
          h(PhCaretRight),
        ]),
      );
  },
});

export const PaginationItem = defineComponent({
  inheritAttrs: false,
  name: "PaginationItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: paginationRecipe,
      type: Function as PropType<typeof paginationRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(PaginationPrimitive.Item as ArkPart, { ...attrs, asChild: true }, () =>
        h(
          Button as ArkPart,
          {
            class: variantSlots.item({ class: cn(props.class, attrs.class) }),
            size: "icon-md",
            variant: "ghost",
          },
          slots,
        ),
      );
    };
  },
});

export const PaginationItems = defineComponent({
  inheritAttrs: false,
  name: "PaginationItems",
  setup(_, { attrs }) {
    return () =>
      h(
        PaginationPrimitive.Context as ArkPart,
        { ...attrs },
        {
          default: ({ pages }: { pages: Array<{ type: string; value?: number }> }) =>
            pages.map((page, index) => {
              if (page.type === "page") {
                return h(
                  PaginationItem,
                  { key: page.value, type: "page", value: page.value },
                  () => page.value,
                );
              }

              const previousPage = [...pages.slice(0, index)]
                .reverse()
                .find((item: { type: string; value?: number }) => item.type === "page");
              const nextPage = pages
                .slice(index + 1)
                .find((item: { type: string; value?: number }) => item.type === "page");
              const ellipsisKey = `ellipsis-${previousPage?.value ?? "start"}-${nextPage?.value ?? "end"}`;

              return h(PaginationEllipsis, { index, key: ellipsisKey });
            }),
        },
      );
  },
});

export const PaginationItemLink = defineComponent({
  inheritAttrs: false,
  name: "PaginationItemLink",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    page: { default: undefined, type: [String, Number] as PropType<"previous" | "next" | number> },
    size: { default: undefined, type: String as PropType<ButtonProps["size"]> },
    variant: { default: undefined, type: String as PropType<ButtonProps["variant"]> },
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

      const variant = props.variant ?? (typeof props.page === "number" ? "outline" : "ghost");

      return h(
        ark.a as ArkPart,
        {
          ...attrs,
          class: cn(buttonRecipe({ size: props.size, variant }).base(), props.class, attrs.class),
          href: `?page=${pageValue()}`,
        },
        slots,
      );
    };
  },
});

export const PaginationEllipsis = defineComponent({
  inheritAttrs: false,
  name: "PaginationEllipsis",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: paginationRecipe,
      type: Function as PropType<typeof paginationRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        PaginationPrimitive.Ellipsis as ArkPart,
        {
          ...attrs,
          class: variantSlots.ellipsis({ class: cn(props.class, attrs.class) }),
        },
        slots.default ?? (() => h(PhDotsThree)),
      );
    };
  },
});
// #endregion
