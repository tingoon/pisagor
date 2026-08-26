import { ark } from "@ark-ui/vue/factory";
import { Steps as StepsPrimitive } from "@ark-ui/vue/steps";
import { PhCheck } from "@phosphor-icons/vue";
import { stepsItemVariants, stepsVariants } from "@pisagor/styles/ui/steps";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const StepsRoot = defineComponent({
  inheritAttrs: false,
  name: "StepsRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsVariants();

      return h(
        StepsPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsList = defineComponent({
  inheritAttrs: false,
  name: "StepsList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsVariants();

      return h(
        StepsPrimitive.List as ArkPart,
        {
          ...attrs,
          class: variantSlots.list({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsItem = defineComponent({
  inheritAttrs: false,
  name: "StepsItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsItemVariants();

      return h(
        StepsPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsItemVariants();

      return h(
        StepsPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: variantSlots.trigger({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsIndicator = defineComponent({
  inheritAttrs: false,
  name: "StepsIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const variantSlots = stepsItemVariants();

      return h(
        StepsPrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: variantSlots.indicator({ class: props.class }),
        },
        () => [
          h("span", { class: variantSlots.label() }, children.default?.()),
          h(PhCheck, { class: variantSlots.check() }),
        ],
      );
    };
  },
});

export const StepsSeparator = defineComponent({
  inheritAttrs: false,
  name: "StepsSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsItemVariants();

      return h(
        StepsPrimitive.Separator as ArkPart,
        {
          ...attrs,
          class: variantSlots.separator({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsTitle = defineComponent({
  inheritAttrs: false,
  name: "StepsTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsItemVariants();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: variantSlots.title({ class: props.class }),
          "data-part": "title",
          "data-scope": "steps",
        },
        slots,
      );
    };
  },
});

export const StepsDescription = defineComponent({
  inheritAttrs: false,
  name: "StepsDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsItemVariants();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: variantSlots.description({ class: props.class }),
          "data-part": "description",
          "data-scope": "steps",
        },
        slots,
      );
    };
  },
});

export const StepsContent = defineComponent({
  inheritAttrs: false,
  name: "StepsContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsVariants();

      return h(
        StepsPrimitive.Content as ArkPart,
        {
          ...attrs,
          class: variantSlots.content({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsCompletedContent = defineComponent({
  inheritAttrs: false,
  name: "StepsCompletedContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = stepsVariants();

      return h(
        StepsPrimitive.CompletedContent as ArkPart,
        {
          ...attrs,
          class: variantSlots.completedContent({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsPrevTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsPrevTrigger",
  setup(_, { attrs, slots }) {
    return () => h(StepsPrimitive.PrevTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const StepsNextTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsNextTrigger",
  setup(_, { attrs, slots }) {
    return () => h(StepsPrimitive.NextTrigger as ArkPart, { ...attrs }, slots);
  },
});
// #endregion
