import { Collapsible as CollapsiblePrimitive } from "@ark-ui/vue/collapsible";
import { PhCaretDown } from "@phosphor-icons/vue";
import {
  collapsibleContentVariants,
  collapsibleIndicatorVariants,
  collapsibleTriggerVariants,
  collapsibleVariants,
} from "@pisagor/styles/ui/collapsible";
import { cn } from "@pisagor/utils";
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
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const partialCollapse = props.collapsedHeight !== undefined;

    return () =>
      h(
        CollapsiblePrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(collapsibleVariants(), props.class),
          collapsedHeight: props.collapsedHeight,
          "data-partial-collapse": props.collapsedHeight ? "" : undefined,
          "data-testid": props.testId,
          lazyMount: partialCollapse ? false : props.lazyMount,
          unmountOnExit: partialCollapse ? false : props.unmountOnExit,
        },
        slots,
      );
  },
});

export const CollapsibleTrigger = defineComponent({
  inheritAttrs: false,
  name: "CollapsibleTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        CollapsiblePrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: cn(collapsibleTriggerVariants(), props.class),
        },
        slots,
      );
  },
});

export const CollapsibleContent = defineComponent({
  inheritAttrs: false,
  name: "CollapsibleContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        CollapsiblePrimitive.Content as ArkPart,
        {
          ...attrs,
          class: cn(collapsibleContentVariants()),
        },
        () => h("div", { class: props.class }, slots.default?.()),
      );
  },
});

export const CollapsibleIndicator = defineComponent({
  inheritAttrs: false,
  name: "CollapsibleIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const recipe = collapsibleIndicatorVariants();

      return h(
        CollapsiblePrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: recipe.base({ class: props.class }),
        },
        () => [slots.default?.(), h(PhCaretDown, { class: recipe.icon() })],
      );
    };
  },
});
// #endregion
