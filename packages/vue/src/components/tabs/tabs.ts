import { Tabs as TabsPrimitive } from "@ark-ui/vue/tabs";
import {
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsVariants,
} from "@pisagor/styles/ui/tabs";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

// #region Types
export interface TabItem {
  content: VNodeChild;
  disabled?: boolean;
  label: VNodeChild;
  value: string;
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
    tabs: { default: undefined, type: Array as PropType<TabItem[]> },
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TabsPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(tabsVariants(), props.class, attrs.class),
          "data-testid": props.testId,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        () => [
          props.tabs
            ? h(TabsList, null, () =>
                props.tabs?.map((tab) =>
                  h(
                    TabsTrigger,
                    { disabled: tab.disabled, key: tab.value, value: tab.value },
                    () => tab.label,
                  ),
                ),
              )
            : undefined,
          ...(props.tabs?.map((tab) =>
            h(TabsContent, { key: tab.value, value: tab.value }, () => tab.content),
          ) ?? []),
          slots.default?.(),
        ],
      );
  },
});

export const TabsList = defineComponent({
  inheritAttrs: false,
  name: "TabsList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: "default", type: String as PropType<"default" | "underline"> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { indicator, list } = tabsListVariants({ variant: props.variant });

      return h(
        TabsPrimitive.List as ArkPart,
        {
          ...attrs,
          class: cn(list(), props.class, attrs.class),
        },
        () => [
          slots.default?.(),
          h(TabsPrimitive.Indicator as ArkPart, {
            class: indicator(),
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
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TabsPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: cn(tabsTriggerVariants(), props.class, attrs.class),
        },
        slots,
      );
  },
});

export const TabsContent = defineComponent({
  inheritAttrs: false,
  name: "TabsContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TabsPrimitive.Content as ArkPart,
        {
          ...attrs,
          class: cn(tabsContentVariants(), props.class, attrs.class),
        },
        slots,
      );
  },
});
// #endregion
