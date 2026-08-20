import { Carousel as CarouselPrimitive } from "@ark-ui/vue/carousel";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import {
  carouselControlVariants,
  carouselGroupVariants,
  carouselIndicatorGroupVariants,
  carouselIndicatorVariants,
  carouselItemVariants,
  carouselNextVariants,
  carouselPreviousVariants,
  carouselVariants,
} from "@pisagor/styles/ui/carousel";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { WithTestId } from "../../internal/types";
import { Button } from "../button";

// #region Types
export interface CarouselPresetItem {
  content: VNodeChild;
  key?: string;
}

export interface CarouselProps extends WithTestId {
  class?: unknown;
  slides?: CarouselPresetItem[];
  spacing?: string;
}

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const CarouselRoot = defineComponent({
  inheritAttrs: false,
  name: "CarouselRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    slideCount: { required: true, type: Number },
    spacing: { default: "16px", type: String },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        CarouselPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(carouselVariants(), props.class),
          "data-testid": props.testId,
          slideCount: props.slideCount,
          spacing: props.spacing,
        },
        slots,
      );
  },
});

export const CarouselControl = defineComponent({
  inheritAttrs: false,
  name: "CarouselControl",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        CarouselPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: cn(carouselControlVariants(), attrs.class),
        },
        slots,
      );
  },
});

export const CarouselPrevious = defineComponent({
  inheritAttrs: false,
  name: "CarouselPrevious",
  setup(_, { attrs }) {
    return () =>
      h(
        CarouselPrimitive.PrevTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(carouselPreviousVariants(), attrs.class),
        },
        () =>
          h(
            Button as ArkPart,
            {
              "aria-label": "Previous",
              clickEffect: false,
              pill: true,
              size: "icon-md",
              variant: "outline",
            },
            () => [h(PhCaretLeft)],
          ),
      );
  },
});

export const CarouselNext = defineComponent({
  inheritAttrs: false,
  name: "CarouselNext",
  setup(_, { attrs }) {
    return () =>
      h(
        CarouselPrimitive.NextTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(carouselNextVariants(), attrs.class),
        },
        () =>
          h(
            Button as ArkPart,
            {
              "aria-label": "Next",
              clickEffect: false,
              pill: true,
              size: "icon-md",
              variant: "outline",
            },
            () => [h(PhCaretRight)],
          ),
      );
  },
});

export const CarouselIndicatorGroup = defineComponent({
  inheritAttrs: false,
  name: "CarouselIndicatorGroup",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        CarouselPrimitive.IndicatorGroup as ArkPart,
        {
          ...attrs,
          class: cn(carouselIndicatorGroupVariants(), attrs.class),
        },
        slots,
      );
  },
});

export const CarouselIndicator = defineComponent({
  inheritAttrs: false,
  name: "CarouselIndicator",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        CarouselPrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: cn(carouselIndicatorVariants(), attrs.class),
        },
        slots,
      );
  },
});

export const CarouselContent = defineComponent({
  inheritAttrs: false,
  name: "CarouselContent",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        CarouselPrimitive.ItemGroup as ArkPart,
        {
          ...attrs,
          class: cn(carouselGroupVariants(), attrs.class),
        },
        slots,
      );
  },
});

export const CarouselItem = defineComponent({
  inheritAttrs: false,
  name: "CarouselItem",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        CarouselPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: cn(carouselItemVariants(), attrs.class),
        },
        slots,
      );
  },
});
// #endregion

// #region Shorthand
export const CarouselShorthand = defineComponent({
  inheritAttrs: false,
  name: "CarouselShorthand",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    slides: {
      default: () => [],
      type: Array as PropType<CarouselPresetItem[]>,
    },
    spacing: { default: "16px", type: String },
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h(
        CarouselRoot,
        {
          ...attrs,
          class: props.class,
          slideCount: props.slides?.length ?? 0,
          spacing: props.spacing,
          testId: props.testId,
        },
        () => [
          h(CarouselControl, null, () => [h(CarouselPrevious), h(CarouselNext)]),
          h(CarouselContent, null, () =>
            props.slides?.map((slide, index) =>
              h(CarouselItem, { index, key: slide.key ?? String(index) }, () => slide.content),
            ),
          ),
          h(CarouselIndicatorGroup, null, () =>
            props.slides?.map((slide, index) =>
              h(CarouselIndicator, { index, key: slide.key ?? String(index) }),
            ),
          ),
        ],
      );
  },
});
// #endregion
