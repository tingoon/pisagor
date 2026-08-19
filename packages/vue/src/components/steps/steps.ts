import { ark } from "@ark-ui/vue/factory";
import { Steps as StepsPrimitive } from "@ark-ui/vue/steps";
import { PhCheck } from "@phosphor-icons/vue";
import {
  stepsCompletedContentVariants,
  stepsContentVariants,
  stepsDescriptionVariants,
  stepsIndicatorVariants,
  stepsInline2Variants,
  stepsInlineVariants,
  stepsItemVariants,
  stepsListVariants,
  stepsSeparatorVariants,
  stepsTitleVariants,
  stepsTriggerVariants,
  stepsVariants,
} from "@pisagor/styles/ui/steps";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export type StepsProps = WithTestId;

type ArkPart = Parameters<typeof h>[0];

// #region Components
export const StepsRoot = defineComponent({
  inheritAttrs: false,
  name: "StepsRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StepsPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(stepsVariants(), props.class),
          "data-testid": props.testId,
        },
        slots,
      );
  },
});

export const StepsList = defineComponent({
  inheritAttrs: false,
  name: "StepsList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StepsPrimitive.List as ArkPart,
        {
          ...attrs,
          class: cn(stepsListVariants(), props.class),
        },
        slots,
      );
  },
});

export const StepsItem = defineComponent({
  inheritAttrs: false,
  name: "StepsItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StepsPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: cn(stepsItemVariants(), props.class),
        },
        slots,
      );
  },
});

export const StepsTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StepsPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: cn(stepsTriggerVariants(), props.class),
        },
        slots,
      );
  },
});

export const StepsIndicator = defineComponent({
  inheritAttrs: false,
  name: "StepsIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StepsPrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: cn(stepsIndicatorVariants(), props.class),
        },
        () => [
          h("span", { class: stepsInlineVariants() }, slots.default?.()),
          h(PhCheck, { class: stepsInline2Variants() }),
        ],
      );
  },
});

export const StepsSeparator = defineComponent({
  inheritAttrs: false,
  name: "StepsSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StepsPrimitive.Separator as ArkPart,
        {
          ...attrs,
          class: cn(stepsSeparatorVariants(), props.class),
        },
        slots,
      );
  },
});

export const StepsTitle = defineComponent({
  inheritAttrs: false,
  name: "StepsTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(stepsTitleVariants(), props.class),
          "data-part": "title",
          "data-scope": "steps",
        },
        slots,
      );
  },
});

export const StepsDescription = defineComponent({
  inheritAttrs: false,
  name: "StepsDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(stepsDescriptionVariants(), props.class),
          "data-part": "description",
          "data-scope": "steps",
        },
        slots,
      );
  },
});

export const StepsContent = defineComponent({
  inheritAttrs: false,
  name: "StepsContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StepsPrimitive.Content as ArkPart,
        {
          ...attrs,
          class: cn(stepsContentVariants(), props.class),
        },
        slots,
      );
  },
});

export const StepsCompletedContent = defineComponent({
  inheritAttrs: false,
  name: "StepsCompletedContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StepsPrimitive.CompletedContent as ArkPart,
        {
          ...attrs,
          class: cn(stepsCompletedContentVariants(), props.class),
        },
        slots,
      );
  },
});

export const StepsPrevious = defineComponent({
  inheritAttrs: false,
  name: "StepsPrevious",
  setup(_, { attrs, slots }) {
    return () => h(StepsPrimitive.PrevTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const StepsNext = defineComponent({
  inheritAttrs: false,
  name: "StepsNext",
  setup(_, { attrs, slots }) {
    return () => h(StepsPrimitive.NextTrigger as ArkPart, { ...attrs }, slots);
  },
});

// #endregion
