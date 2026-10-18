import { ark } from "@ark-ui/vue";
import { PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import type {
  BreadcrumbItemProps as BaseBreadcrumbItemProps,
  BreadcrumbProps as BaseBreadcrumbRootProps,
} from "@pisagor/props";
import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import {
  computed,
  defineComponent,
  h,
  type PropType,
  type VNodeChild,
} from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const {
  provideStyles: provideBreadcrumbStyles,
  useStyles,
  withContext: withBreadcrumbContext,
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
export interface BreadcrumbPresetItem {
  href?: string;
  isCurrentPage?: boolean;
  label: VNodeChild;
}

export interface BreadcrumbRootProps extends BaseBreadcrumbRootProps {
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

export interface BreadcrumbItemProps extends BaseBreadcrumbItemProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const BreadcrumbRoot = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb.Root",
  props: {
    ariaLabel: { default: undefined, type: String },
    recipe: {
      default: breadcrumbRecipe,
      type: Function as PropType<typeof breadcrumbRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const recipeSlots = computed(() => props.recipe());

    provideBreadcrumbStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () =>
      h(
        "nav",
        {
          ...attrs,
          "aria-label": m("breadcrumb.label", props.ariaLabel),
          "data-part": "root",
          "data-scope": "breadcrumb",
        },
        slots,
      );
  },
});

export const BreadcrumbList = withBreadcrumbContext("ol", {
  defaultProps: { role: "list" },
  name: "List",
});

export const BreadcrumbItem = withBreadcrumbItemProvider("li", {
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

export const BreadcrumbSeparator = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb.Separator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        "li",
        {
          ...attrs,
          "aria-hidden": "true",
          class: styles.slots.separator({ class: props.class }),
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
  name: "Breadcrumb.Ellipsis",
  setup(_, { attrs }) {
    const styles = useStyles();

    return () =>
      h(
        "span",
        {
          ...attrs,
          "aria-hidden": "true",
          "data-part": "ellipsis",
          "data-scope": "breadcrumb",
          role: "presentation",
        },
        () => h(PhDotsThree, { class: styles.slots.ellipsis() }),
      );
  },
});

export const BreadcrumbShorthand = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb",
  props: {
    ariaLabel: { default: undefined, type: String },
    items: {
      default: undefined,
      type: Array as PropType<BreadcrumbPresetItem[]>,
    },
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
                    h(BreadcrumbSeparator, { key: `separator-${key}` }),
                  );
                }

                return nodes;
              }),
            )
          : undefined,
      );
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
