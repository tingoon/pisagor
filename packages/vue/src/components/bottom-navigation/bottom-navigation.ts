import { ark } from "@ark-ui/vue/factory";
import { Tabs as TabsPrimitive } from "@ark-ui/vue/tabs";
import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes/bottom-navigation";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface BottomNavigationItemProps {
  /**
   * Style recipe. Defaults to `bottomNavigationItemRecipe` from `@pisagor/recipes/bottom-navigation-item`.
   *
   * @defaultValue bottomNavigationItemRecipe
   */
  itemRecipe?: typeof bottomNavigationItemRecipe;
  class?: unknown;
}

export interface BottomNavigationRootProps {
  /**
   * Style recipe. Defaults to `bottomNavigationRecipe` from `@pisagor/recipes/bottom-navigation`.
   *
   * @defaultValue bottomNavigationRecipe
   */
  recipe?: typeof bottomNavigationRecipe;
  class?: unknown;
}
// #endregion

// #region Parts
export const BottomNavigationRoot = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: bottomNavigationRecipe,
      type: Function as PropType<typeof bottomNavigationRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TabsPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const BottomNavigationList = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationList",
  props: {
    ariaLabel: { default: undefined, type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: bottomNavigationRecipe,
      type: Function as PropType<typeof bottomNavigationRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TabsPrimitive.List as ArkPart,
        {
          ...attrs,
          "aria-label": props.ariaLabel ?? (attrs["aria-label"] as string | undefined),
          class: variantSlots.list({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const BottomNavigationItem = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: bottomNavigationItemRecipe,
      type: Function as PropType<typeof bottomNavigationItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        TabsPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const BottomNavigationItemIcon = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItemIcon",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: bottomNavigationItemRecipe,
      type: Function as PropType<typeof bottomNavigationItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          "aria-hidden": true,
          class: variantSlots.icon({ class: props.class }),
          "data-part": "item-icon",
          "data-scope": "bottom-navigation",
        },
        slots,
      );
    };
  },
});

export const BottomNavigationItemLabel = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItemLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: bottomNavigationItemRecipe,
      type: Function as PropType<typeof bottomNavigationItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: variantSlots.label({ class: props.class }),
          "data-part": "item-label",
          "data-scope": "bottom-navigation",
        },
        slots,
      );
    };
  },
});
// #endregion
