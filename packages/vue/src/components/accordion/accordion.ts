import { Accordion as AccordionPrimitive } from "@ark-ui/vue/accordion";
import { PhCaretDown } from "@phosphor-icons/vue";
import {
  accordionItemContentVariants,
  accordionItemTriggerVariants,
  accordionItemVariants,
} from "@pisagor/styles/accordion";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface AccordionPresetItem {
  value: string;
  title: VNodeChild;
  content: VNodeChild;
  disabled?: boolean;
}

export interface AccordionProps extends WithTestId {
  items?: AccordionPresetItem[];
  collapsible?: boolean;
  lazyMount?: boolean;
  unmountOnExit?: boolean;
}
// #endregion

// Ark Vue parts are polymorphic; `h()` overloads reject attr spreads without a cast.
type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const AccordionRoot = defineComponent({
  inheritAttrs: false,
  name: "AccordionRoot",
  props: {
    collapsible: { default: true, type: Boolean },
    lazyMount: { default: true, type: Boolean },
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        AccordionPrimitive.Root as ArkPart,
        {
          ...attrs,
          collapsible: props.collapsible,
          "data-testid": props.testId,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const AccordionItem = defineComponent({
  inheritAttrs: false,
  name: "AccordionItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        AccordionPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: cn(accordionItemVariants(), props.class),
        },
        slots,
      );
  },
});

export const AccordionItemTrigger = defineComponent({
  inheritAttrs: false,
  name: "AccordionItemTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const recipe = accordionItemTriggerVariants();

      return h(
        AccordionPrimitive.ItemTrigger as ArkPart,
        {
          ...attrs,
          class: recipe.base({ class: props.class }),
        },
        () => [
          slots.default?.(),
          h(AccordionPrimitive.ItemIndicator as ArkPart, {}, () =>
            h(PhCaretDown, { class: recipe.indicator() }),
          ),
        ],
      );
    };
  },
});

export const AccordionItemContent = defineComponent({
  inheritAttrs: false,
  name: "AccordionItemContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const recipe = accordionItemContentVariants();

      return h(
        AccordionPrimitive.ItemContent as ArkPart,
        {
          ...attrs,
          class: recipe.base({ class: props.class }),
        },
        () => h("div", { class: recipe.body() }, slots.default?.()),
      );
    };
  },
});

export const AccordionShorthand = defineComponent({
  inheritAttrs: false,
  name: "AccordionShorthand",
  props: {
    collapsible: { default: true, type: Boolean },
    items: { default: undefined, type: Array as PropType<AccordionPresetItem[]> },
    lazyMount: { default: true, type: Boolean },
    testId: String,
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
          testId: props.testId,
          unmountOnExit: props.unmountOnExit,
        },
        () =>
          props.items?.map((item) =>
            h(
              AccordionItem,
              { disabled: item.disabled, key: item.value, value: item.value },
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
