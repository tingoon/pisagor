import { ark } from "@ark-ui/vue";
import type {
  BottomNavigationItemProps as BaseBottomNavigationItemProps,
  BottomNavigationProps as BaseBottomNavigationRootProps,
} from "@pisagor/props";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
import {
  computed,
  defineComponent,
  h,
  type InjectionKey,
  inject,
  provide,
  type Ref,
} from "vue";
import { createSlotRecipeContext } from "../internal";
import { useTranslation } from "./provider/context";

// #region Context
const {
  withContext: withBottomNavigationContext,
  withProvider: withBottomNavigationProvider,
} = createSlotRecipeContext({
  name: "BottomNavigation",
  recipe: bottomNavigationRecipe,
});

const {
  withContext: withBottomNavigationItemContext,
  withProvider: withBottomNavigationItemProvider,
} = createSlotRecipeContext({
  name: "BottomNavigation",
  recipe: bottomNavigationItemRecipe,
});

const BottomNavigationValueKey: InjectionKey<Ref<string | undefined>> = Symbol(
  "BottomNavigationValue",
);
// #endregion

// #region Types
export interface BottomNavigationRootProps extends BaseBottomNavigationRootProps {
  class?: unknown;
  /**
   * Value of the item for the current page; that item gets
   * `aria-current="page"`.
   */
  value?: string;
}

export type BottomNavigationProps = BottomNavigationRootProps;

export interface BottomNavigationItemProps extends BaseBottomNavigationItemProps {
  class?: unknown;
  /** Marks the item as the current page. Defaults to `value === root value`. */
  current?: boolean;
  /** Whether the item is disabled. */
  disabled?: boolean;
  /** Identifier compared with the root `value`. */
  value?: string;
}
// #endregion

// #region Parts
const BottomNavigationNav = withBottomNavigationProvider(ark.nav, {
  name: "Root",
  slot: "base",
});

export const BottomNavigationRoot = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigation",
  props: {
    value: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const label = useTranslation("bottomNavigation.label");
    provide(
      BottomNavigationValueKey,
      computed(() => props.value),
    );
    return () =>
      h(BottomNavigationNav, { "aria-label": label, ...attrs }, slots);
  },
});

export const BottomNavigationList = withBottomNavigationContext(ark.div, {
  name: "List",
});

const BottomNavigationItemBase = withBottomNavigationItemProvider(ark.a, {
  name: "Item",
  slot: "base",
});

export const BottomNavigationItem = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItem",
  props: {
    current: { default: undefined, type: Boolean },
    disabled: { default: false, type: Boolean },
    value: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const rootValue = inject(BottomNavigationValueKey, undefined);
    return () => {
      const root = rootValue?.value;
      const isCurrent =
        props.current ??
        (props.value !== undefined &&
          root !== undefined &&
          props.value === root);
      return h(
        BottomNavigationItemBase,
        {
          ...attrs,
          "aria-current": isCurrent ? "page" : undefined,
          "aria-disabled": props.disabled || undefined,
          "data-current": isCurrent ? "" : undefined,
          "data-disabled": props.disabled ? "" : undefined,
          tabindex: props.disabled ? -1 : attrs.tabindex,
        },
        slots,
      );
    };
  },
});

export const BottomNavigationItemIcon = withBottomNavigationItemContext(
  ark.span,
  {
    defaultProps: { "aria-hidden": true, "data-part": "item-icon" },
    name: "ItemIcon",
    slot: "icon",
  },
);

export const BottomNavigationItemLabel = withBottomNavigationItemContext(
  ark.span,
  {
    defaultProps: { "data-part": "item-label" },
    name: "ItemLabel",
    slot: "label",
  },
);
// #endregion

export const BottomNavigation = Object.assign(BottomNavigationRoot, {
  Item: BottomNavigationItem,
  ItemIcon: BottomNavigationItemIcon,
  ItemLabel: BottomNavigationItemLabel,
  List: BottomNavigationList,
});
