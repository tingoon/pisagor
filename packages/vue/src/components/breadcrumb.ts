import { ark } from "@ark-ui/vue";
import { PhCaretRight } from "@phosphor-icons/vue";
import type {
  BreadcrumbItemRootContract,
  BreadcrumbItemContract,
  BreadcrumbPresetItem as BaseBreadcrumbPresetItem,
  BreadcrumbRootContract,
  BreadcrumbContract,
} from "@pisagor/contracts";
import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { contentProp, slotOrProp } from "../internal/shorthand";
import { useLocale } from "./provider/context";

// #region Context
const {
  withContext: withBreadcrumbContext,
  withProvider: withBreadcrumbProvider,
} = createSlotRecipeContext({
  name: "Breadcrumb",
  recipe: breadcrumbRecipe,
});

const {
  withContext: withBreadcrumbItemContext,
  withProvider: withBreadcrumbItemProvider,
} = createSlotRecipeContext({
  name: "BreadcrumbItem",
  recipe: breadcrumbItemRecipe,
});
// #endregion

// #region Types
export interface BreadcrumbPresetItem extends Omit<
  BaseBreadcrumbPresetItem,
  "label"
> {
  href?: string;
  isCurrentPage?: boolean;
  label: VNodeChild;
}

export interface BreadcrumbRootProps extends Omit<
  BreadcrumbRootContract,
  "items"
> {
  /**
   * Accessible label for the breadcrumb navigation landmark.
   *
   * @defaultValue "Breadcrumb"
   */
  ariaLabel?: string;
}

export interface BreadcrumbProps
  extends BreadcrumbRootProps, BreadcrumbRootContract, BreadcrumbContract {
  items?: BreadcrumbPresetItem[];
  /**
   * Separator content between items; also the `separator` slot.
   *
   * @defaultValue <PhCaretRight />
   */
  separator?: VNodeChild;
}

type ArkPart = Parameters<typeof h>[0];

export interface BreadcrumbItemProps
  extends BreadcrumbItemRootContract, BreadcrumbItemContract {
  class?: unknown;
}
// #endregion

// #region Parts
const BreadcrumbRootBase = withBreadcrumbProvider<BreadcrumbRootContract>(
  "nav",
  { name: "Root", slot: "base" },
);

/** Navigation landmark with a localized default `aria-label`. */
export const BreadcrumbRoot = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb.Root",
  props: {
    ariaLabel: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        BreadcrumbRootBase as ArkPart,
        { ...attrs, "aria-label": m("breadcrumb.label", props.ariaLabel) },
        slots,
      );
  },
});

export const BreadcrumbList = withBreadcrumbContext("ol", {
  defaultProps: { role: "list" },
  name: "List",
});

export const BreadcrumbItem =
  withBreadcrumbItemProvider<BreadcrumbItemRootContract>("li", {
    name: "Item",
    slot: "base",
  });

export const BreadcrumbLink = withBreadcrumbItemContext(ark.a, {
  name: "Link",
});

export const BreadcrumbPage = withBreadcrumbItemContext("span", {
  defaultProps: { "aria-current": "page" },
  name: "Page",
});

export const BreadcrumbSeparator = withBreadcrumbContext("li", {
  defaultProps: { "aria-hidden": "true", role: "presentation" },
  name: "Separator",
});

const BreadcrumbEllipsisBase = withBreadcrumbContext("span", {
  name: "Ellipsis",
});

/**
 * Collapsed-items marker; render your icon inside. Adds localized screen-reader
 * text.
 */
export const BreadcrumbEllipsis = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb.Ellipsis",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(BreadcrumbEllipsisBase as ArkPart, attrs, () => [
        slots.default?.(),
        h("span", { class: "sr-only" }, m("breadcrumb.more")),
      ]);
  },
});
// #endregion

// #region Shorthand
export const BreadcrumbShorthand = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb",
  props: {
    ariaLabel: { default: undefined, type: String },
    classNames: {
      default: undefined,
      type: Object as PropType<BreadcrumbProps["classNames"]>,
    },
    items: {
      default: undefined,
      type: Array as PropType<BreadcrumbPresetItem[]>,
    },
    separator: contentProp,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;
      const separator =
        slotOrProp(slots.separator, props.separator) ?? (() => h(PhCaretRight));

      return h(
        BreadcrumbRoot,
        {
          ...attrs,
          ariaLabel: props.ariaLabel,
          class: cn(classNames?.base, attrs.class as ClassValue),
        },
        () =>
          props.items
            ? h(BreadcrumbList, { class: classNames?.list }, () =>
                props.items?.flatMap((item, index) => {
                  const key = item.href ?? String(item.label);
                  const nodes = [
                    h(BreadcrumbItem, { key }, () =>
                      item.isCurrentPage
                        ? h(BreadcrumbPage, null, () => item.label)
                        : item.href
                          ? h(
                              BreadcrumbLink,
                              { href: item.href },
                              () => item.label,
                            )
                          : item.label,
                    ),
                  ];

                  if (index > 0) {
                    nodes.unshift(
                      h(
                        BreadcrumbSeparator,
                        {
                          class: classNames?.separator,
                          key: `separator-${key}`,
                        },
                        separator,
                      ),
                    );
                  }

                  return nodes;
                }),
              )
            : undefined,
      );
    };
  },
});
// #endregion

export const Breadcrumb = Object.assign(BreadcrumbShorthand, {
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Root: BreadcrumbRoot,
  Separator: BreadcrumbSeparator,
});
