import { ark } from "@ark-ui/vue/factory";
import { PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import {
  type BreadcrumbItemVariants,
  type BreadcrumbVariants,
  breadcrumbItemVariants,
  breadcrumbVariants,
} from "@pisagor/recipes/breadcrumb";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createContext } from "../../internal/utils/create-context";

// #region Types
export interface BreadcrumbPresetItem {
  href?: string;
  isCurrentPage?: boolean;
  label: VNodeChild;
}

export interface BreadcrumbRootProps {
  /**
   * Accessible label for the breadcrumb navigation landmark.
   *
   * @defaultValue "Breadcrumb"
   */
  ariaLabel?: string;
}

export interface BreadcrumbProps extends BreadcrumbRootProps {
  items?: BreadcrumbPresetItem[];
}

interface BreadcrumbContextValue {
  slots: BreadcrumbVariants;
}

interface BreadcrumbItemContextValue {
  slots: BreadcrumbItemVariants;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Context
const [provideBreadcrumbContext, useBreadcrumbContext] = createContext<BreadcrumbContextValue>({
  name: "Breadcrumb",
});

const [provideBreadcrumbItemContext, useBreadcrumbItemContext] =
  createContext<BreadcrumbItemContextValue>({
    name: "BreadcrumbItem",
  });
// #endregion

// #region Parts
export const BreadcrumbRoot = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbRoot",
  props: {
    ariaLabel: { default: "Breadcrumb", type: String },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = breadcrumbVariants();

    provideBreadcrumbContext({ slots: recipeSlots });

    return () =>
      h(
        ark.nav as ArkPart,
        {
          ...attrs,
          "aria-label": props.ariaLabel,
          "data-part": "root",
          "data-scope": "breadcrumb",
        },
        slots,
      );
  },
});

export const BreadcrumbList = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const context = useBreadcrumbContext();

    return () =>
      h(
        ark.ol as ArkPart,
        {
          ...attrs,
          class: context?.slots.list({ class: props.class }),
          "data-part": "list",
          "data-scope": "breadcrumb",
          role: "list",
        },
        slots,
      );
  },
});

export const BreadcrumbItem = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = breadcrumbItemVariants();

    provideBreadcrumbItemContext({ slots: recipeSlots });

    return () =>
      h(
        ark.li as ArkPart,
        {
          ...attrs,
          class: recipeSlots.base({ class: props.class }),
          "data-part": "item",
          "data-scope": "breadcrumb",
        },
        slots,
      );
  },
});

export const BreadcrumbLink = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbLink",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const context = useBreadcrumbItemContext();

    return () =>
      h(
        ark.a as ArkPart,
        {
          ...attrs,
          class: context?.slots.link({ class: props.class }),
          "data-part": "link",
          "data-scope": "breadcrumb",
        },
        slots,
      );
  },
});

export const BreadcrumbPage = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbPage",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const context = useBreadcrumbItemContext();

    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          "aria-current": "page",
          class: context?.slots.page({ class: props.class }),
          "data-part": "page",
          "data-scope": "breadcrumb",
        },
        slots,
      );
  },
});

export const BreadcrumbSeparator = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const context = useBreadcrumbContext();

    return () =>
      h(
        ark.li as ArkPart,
        {
          ...attrs,
          "aria-hidden": "true",
          class: context?.slots.separator({ class: props.class }),
          "data-part": "separator",
          "data-scope": "breadcrumb",
          role: "presentation",
        },
        slots.default ?? (() => h(PhCaretRight)),
      );
  },
});

export const BreadcrumbEllipsis = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbEllipsis",
  setup(_, { attrs }) {
    const context = useBreadcrumbContext();

    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          "aria-hidden": "true",
          "data-part": "ellipsis",
          "data-scope": "breadcrumb",
          role: "presentation",
        },
        () => h(PhDotsThree, { class: context?.slots.ellipsis() }),
      );
  },
});

export const BreadcrumbShorthand = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbShorthand",
  props: {
    ariaLabel: { default: "Breadcrumb", type: String },
    items: { default: undefined, type: Array as PropType<BreadcrumbPresetItem[]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(BreadcrumbRoot, { ...attrs, ariaLabel: props.ariaLabel }, () =>
        props.items
          ? h(BreadcrumbList, null, () =>
              props.items?.flatMap((item, index) => {
                const key = item.href ?? String(item.label);
                const nodes = [
                  h(BreadcrumbItem, { key }, () =>
                    item.isCurrentPage
                      ? h(BreadcrumbPage, null, () => item.label)
                      : item.href
                        ? h(BreadcrumbLink, { href: item.href }, () => item.label)
                        : item.label,
                  ),
                ];

                if (index > 0) {
                  nodes.unshift(h(BreadcrumbSeparator, { key: `separator-${key}` }));
                }

                return nodes;
              }),
            )
          : undefined,
      );
  },
});
// #endregion
