import { ark } from "@ark-ui/vue/factory";
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
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  provideStyles: provideBreadcrumbStyles,
  useStyles: useBreadcrumb,
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

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const BreadcrumbRoot = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb.Root",
  props: {
    ariaLabel: { default: "Breadcrumb", type: String },
    recipe: {
      default: breadcrumbRecipe,
      type: Function as PropType<typeof breadcrumbRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideBreadcrumbStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

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

export const BreadcrumbList = withBreadcrumbContext(ark.ol, {
  defaultProps: { role: "list" },
  name: "List",
});

export const BreadcrumbItem = withBreadcrumbItemProvider(ark.li, {
  name: "Item",
  slot: "base",
});

export const BreadcrumbLink = withBreadcrumbItemContext(ark.a, {
  name: "Link",
});

export const BreadcrumbPage = withBreadcrumbItemContext(ark.span, {
  defaultProps: { "aria-current": "page" },
  name: "Page",
});

export const BreadcrumbSeparator = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb.Separator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useBreadcrumb();

    return () =>
      h(
        ark.li as ArkPart,
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
    const styles = useBreadcrumb();

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
        () => h(PhDotsThree, { class: styles.slots.ellipsis() }),
      );
  },
});

export const BreadcrumbShorthand = defineComponent({
  inheritAttrs: false,
  name: "Breadcrumb",
  props: {
    ariaLabel: { default: "Breadcrumb", type: String },
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
