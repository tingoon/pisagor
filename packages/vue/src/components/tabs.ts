import { Tabs as TabsPrimitive } from "@ark-ui/vue";
import type {
  TabsPresetItem as BaseTabsPresetItem,
  TabsRootContract,
  TabsContract,
} from "@pisagor/contracts";
import { tabsRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Slot recipe context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Tabs",
  recipe: tabsRecipe,
});
// #endregion

// #region Types
export interface TabsPresetItem extends Omit<
  BaseTabsPresetItem,
  "label" | "content"
> {
  content: VNodeChild;
  disabled?: boolean;
  label: VNodeChild;
  value: string;
}

export interface TabsRootProps extends TabsRootContract {
  class?: unknown;
}

export interface TabsProps
  extends Omit<TabsRootProps, "children">, TabsContract {
  items?: TabsPresetItem[];
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const TabsRoot = withProvider<TabsRootContract>(TabsPrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const TabsList = defineComponent({
  inheritAttrs: false,
  name: "TabsList",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    showIndicator: { default: true, type: Boolean },
    variant: {
      default: "default",
      type: String as PropType<"default" | "underline">,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

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
          props.showIndicator
            ? h(TabsPrimitive.Indicator as ArkPart, {
                class: variantSlots.indicator({ variant: props.variant }),
              })
            : null,
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
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    items: { default: undefined, type: Array as PropType<TabsPresetItem[]> },
    lazyMount: { default: true, type: Boolean },
    showIndicator: { default: true, type: Boolean },
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
          h(
            TabsList,
            { showIndicator: props.showIndicator, variant: props.variant },
            () =>
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
