import { ark } from "@ark-ui/vue/factory";
import { PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import {
  breadcrumbInlineVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbListVariants,
  breadcrumbPageVariants,
  breadcrumbSeparatorVariants,
} from "@pisagor/styles/ui/breadcrumb";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

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
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const BreadcrumbRoot = defineComponent({
  inheritAttrs: false,
  name: "BreadcrumbRoot",
  props: {
    ariaLabel: { default: "Breadcrumb", type: String },
  },
  setup(props, { attrs, slots }) {
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
    return () =>
      h(
        ark.ol as ArkPart,
        {
          ...attrs,
          class: cn(breadcrumbListVariants(), props.class, attrs.class),
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
    return () =>
      h(
        ark.li as ArkPart,
        {
          ...attrs,
          class: cn(breadcrumbItemVariants(), props.class, attrs.class),
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
    return () =>
      h(
        ark.a as ArkPart,
        {
          ...attrs,
          class: cn(breadcrumbLinkVariants(), props.class, attrs.class),
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
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          "aria-current": "page",
          class: cn(breadcrumbPageVariants(), props.class, attrs.class),
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
    return () =>
      h(
        ark.li as ArkPart,
        {
          ...attrs,
          "aria-hidden": "true",
          class: cn(breadcrumbSeparatorVariants(), props.class, attrs.class),
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
        () => h(PhDotsThree, { class: breadcrumbInlineVariants() }),
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
