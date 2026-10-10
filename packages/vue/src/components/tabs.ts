import { Tabs as TabsPrimitive } from "@ark-ui/vue/tabs";
import type { TabsProps as BaseTabsRootProps } from "@pisagor/props";
import { tabsRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Slot recipe context
const {
  useStyles: useTabs,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Tabs",
  recipe: tabsRecipe,
});
// #endregion

// #region Types
export interface TabsPresetItem {
  content: VNodeChild;
  disabled?: boolean;
  label: VNodeChild;
  value: string;
}

export interface TabsRootProps extends BaseTabsRootProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const TabsRoot = withProvider(TabsPrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const TabsList = defineComponent({
  inheritAttrs: false,
  name: "TabsList",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    variant: {
      default: "default",
      type: String as PropType<"default" | "underline">,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useTabs();

    return () => {
      const variantSlots = styles.slots;

      return h(
        TabsPrimitive.List as ArkPart,
        {
          ...attrs,
          class: variantSlots.list({
            class: cn(props.class, attrs.class),
            variant: props.variant,
          }),
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

export const TabsTrigger = withContext(TabsPrimitive.Trigger, {
  name: "Trigger",
});

export const TabsContent = withContext(TabsPrimitive.Content, {
  name: "Content",
});
// #endregion

// #region Shorthand
export const TabsShorthand = defineComponent({
  inheritAttrs: false,
  name: "TabsShorthand",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    items: { default: undefined, type: Array as PropType<TabsPresetItem[]> },
    lazyMount: { default: true, type: Boolean },
    unmountOnExit: { default: true, type: Boolean },
    variant: {
      default: undefined,
      type: String as PropType<"default" | "underline">,
    },
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
            h(
              TabsContent,
              { key: tab.value, value: tab.value },
              () => tab.content,
            ),
          ) ?? []),
        ],
      );
  },
});
// #endregion

export const Tabs = Object.assign(TabsShorthand, {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
