import { Collapsible as CollapsiblePrimitive } from "@ark-ui/vue/collapsible";
import { PhCaretDown } from "@phosphor-icons/vue";
import { collapsibleVariants } from "@pisagor/recipes/collapsible";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const CollapsibleRoot = defineComponent({
  inheritAttrs: false,
  name: "CollapsibleRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    collapsedHeight: { default: undefined, type: [Number, String] as PropType<number | string> },
    lazyMount: { default: true, type: Boolean },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const partialCollapse = props.collapsedHeight !== undefined;

    return () => {
      const variantSlots = collapsibleVariants();

      return h(
        CollapsiblePrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          collapsedHeight: props.collapsedHeight,
          "data-partial-collapse": props.collapsedHeight ? "" : undefined,
          lazyMount: partialCollapse ? false : props.lazyMount,
          unmountOnExit: partialCollapse ? false : props.unmountOnExit,
        },
        slots,
      );
    };
  },
});

export const CollapsibleTrigger = defineComponent({
  inheritAttrs: false,
  name: "CollapsibleTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = collapsibleVariants();

      return h(
        CollapsiblePrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: variantSlots.trigger({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const CollapsibleContent = defineComponent({
  inheritAttrs: false,
  name: "CollapsibleContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = collapsibleVariants();

      return h(
        CollapsiblePrimitive.Content as ArkPart,
        {
          ...attrs,
          class: variantSlots.content(),
        },
        () => h("div", { class: props.class }, slots.default?.()),
      );
    };
  },
});

export const CollapsibleIndicator = defineComponent({
  inheritAttrs: false,
  name: "CollapsibleIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const variantSlots = collapsibleVariants();

      return h(
        CollapsiblePrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: variantSlots.indicator({ class: props.class }),
        },
        () => [children.default?.(), h(PhCaretDown, { class: variantSlots.icon() })],
      );
    };
  },
});
// #endregion
