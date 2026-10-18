import {
  Accordion as AccordionPrimitive,
  type AccordionItemProps as AccordionItemPrimitiveProps,
} from "@ark-ui/vue";
import { PhCaretDown } from "@phosphor-icons/vue";
import type { AccordionItemProps as BaseAccordionItemProps } from "@pisagor/props";
import { accordionItemRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles: useAccordionItem, withProvider } = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
// #endregion

// #region Types
export interface LocalAccordionItemProps
  extends AccordionItemPrimitiveProps, BaseAccordionItemProps {}

export interface AccordionPresetItem {
  value: string;
  title: VNodeChild;
  content: VNodeChild;
  disabled?: boolean;
}

export interface AccordionProps {
  items?: AccordionPresetItem[];
  collapsible?: boolean;
  /** Size scale applied to every item. */
  size?: "sm" | "md" | "lg";
  lazyMount?: boolean;
  unmountOnExit?: boolean;
}
// #endregion

// Ark Vue parts are polymorphic; `h()` overloads reject attr spreads without a cast.
type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const AccordionRoot = defineComponent({
  inheritAttrs: false,
  name: "Accordion.Root",
  props: {
    collapsible: { default: true, type: Boolean },
    lazyMount: { default: true, type: Boolean },
    size: {
      default: undefined,
      type: String as PropType<"sm" | "md" | "lg">,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        AccordionPrimitive.Root as ArkPart,
        {
          ...attrs,
          collapsible: props.collapsible,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const AccordionItem = withProvider<LocalAccordionItemProps>(
  AccordionPrimitive.Item,
  {
    name: "Item",
    slot: "base",
  },
);

export const AccordionItemTrigger = defineComponent({
  inheritAttrs: false,
  name: "Accordion.ItemTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useAccordionItem();

    return () =>
      h(
        AccordionPrimitive.ItemTrigger as ArkPart,
        {
          ...attrs,
          class: styles.slots.trigger({ class: props.class }),
        },
        () => [
          children.default?.(),
          h(AccordionPrimitive.ItemIndicator as ArkPart, null, () =>
            h(PhCaretDown, { class: styles.slots.indicator() }),
          ),
        ],
      );
  },
});

export const AccordionItemContent = defineComponent({
  inheritAttrs: false,
  name: "Accordion.ItemContent",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useAccordionItem();

    return () =>
      h(
        AccordionPrimitive.ItemContent as ArkPart,
        {
          ...attrs,
          class: styles.slots.content({ class: props.class }),
        },
        () => h("div", { class: styles.slots.body() }, children.default?.()),
      );
  },
});
// #endregion

// #region Shorthand
export const AccordionShorthand = defineComponent({
  inheritAttrs: false,
  name: "Accordion",
  props: {
    collapsible: { default: true, type: Boolean },
    items: {
      default: undefined,
      type: Array as PropType<AccordionPresetItem[]>,
    },
    lazyMount: { default: true, type: Boolean },
    size: {
      default: undefined,
      type: String as PropType<"sm" | "md" | "lg">,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        AccordionRoot,
        {
          ...attrs,
          collapsible: props.collapsible,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        () =>
          props.items?.map((item) =>
            h(
              AccordionItem,
              {
                disabled: item.disabled,
                key: item.value,
                size: props.size,
                value: item.value,
              },
              () => [
                h(AccordionItemTrigger, null, () => item.title),
                h(AccordionItemContent, null, () => item.content),
              ],
            ),
          ),
      );
  },
});
// #endregion

export type {
  AccordionItemContentProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "@ark-ui/vue";

export type AccordionItemProps = LocalAccordionItemProps;

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
