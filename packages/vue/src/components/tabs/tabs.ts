import { Tabs as TabsPrimitive } from "@ark-ui/vue/tabs";
import { tabsRecipe } from "@pisagor/recipes/tabs";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

// #region Types
export interface TabsPresetItem {
  content: VNodeChild;
  disabled?: boolean;
  label: VNodeChild;
  value: string;
}

export interface TabsRootProps {
  /**
   * Style recipe. Defaults to `tabsRecipe` from `@pisagor/recipes/tabs`.
   *
   * @defaultValue tabsRecipe
   */
  recipe?: typeof tabsRecipe;
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const TabsRoot = defineComponent({
  inheritAttrs: false,
  name: "TabsRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    lazyMount: { default: true, type: Boolean },
    recipe: {
      default: tabsRecipe,
      type: Function as PropType<typeof tabsRecipe>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TabsPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: cn(props.class, attrs.class) }),
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
    };
  },
});

export const TabsList = defineComponent({
  inheritAttrs: false,
  name: "TabsList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: tabsRecipe,
      type: Function as PropType<typeof tabsRecipe>,
    },
    variant: { default: "default", type: String as PropType<"default" | "underline"> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TabsPrimitive.List as ArkPart,
        {
          ...attrs,
          class: variantSlots.list({ class: cn(props.class, attrs.class), variant: props.variant }),
        },
        () => [
          slots.default?.(),
          h(TabsPrimitive.Indicator as ArkPart, {
            class: variantSlots.indicator({ variant: props.variant }),
          }),
        ],
      );
    };
  },
});

export const TabsTrigger = defineComponent({
  inheritAttrs: false,
  name: "TabsTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: tabsRecipe,
      type: Function as PropType<typeof tabsRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TabsPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: variantSlots.trigger({ class: cn(props.class, attrs.class) }),
        },
        slots,
      );
    };
  },
});

export const TabsContent = defineComponent({
  inheritAttrs: false,
  name: "TabsContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: tabsRecipe,
      type: Function as PropType<typeof tabsRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TabsPrimitive.Content as ArkPart,
        {
          ...attrs,
          class: variantSlots.content({ class: cn(props.class, attrs.class) }),
        },
        slots,
      );
    };
  },
});
// #endregion

// #region Shorthand
export const TabsShorthand = defineComponent({
  inheritAttrs: false,
  name: "TabsShorthand",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    items: { default: undefined, type: Array as PropType<TabsPresetItem[]> },
    lazyMount: { default: true, type: Boolean },
    unmountOnExit: { default: true, type: Boolean },
    variant: { default: undefined, type: String as PropType<"default" | "underline"> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        TabsRoot,
        {
          ...attrs,
          class: props.class,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        () => [
          h(TabsList, { variant: props.variant }, () =>
            props.items?.map((tab) =>
              h(
                TabsTrigger,
                { disabled: tab.disabled, key: tab.value, value: tab.value },
                () => tab.label,
              ),
            ),
          ),
          ...(props.items?.map((tab) =>
            h(TabsContent, { key: tab.value, value: tab.value }, () => tab.content),
          ) ?? []),
        ],
      );
  },
});
// #endregion
