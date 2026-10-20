import { Carousel as CarouselPrimitive, useCarouselContext } from "@ark-ui/vue";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import type {
  CarouselPresetItem as BaseCarouselPresetItem,
  CarouselRootContract,
  CarouselContract,
} from "@pisagor/contracts";
import { carouselRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Carousel",
  recipe: carouselRecipe,
});
// #endregion

// #region Types
export interface CarouselPresetItem extends Omit<
  BaseCarouselPresetItem,
  "content"
> {
  content: VNodeChild;
  key?: string;
}

export interface CarouselProps extends CarouselRootContract, CarouselContract {
  class?: unknown;
  slides?: CarouselPresetItem[];
  spacing?: string;
}

type ArkPart = Parameters<typeof h>[0];
// #endregion

// #region Parts
const CarouselRootBase = withProvider<CarouselRootContract>(
  CarouselPrimitive.Root,
  { name: "Root" },
);

export const CarouselRoot = defineComponent({
  inheritAttrs: false,
  name: "Carousel.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    slideCount: { required: true, type: Number },
    spacing: { default: "calc(var(--spacing) * 4)", type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        CarouselRootBase,
        {
          ...attrs,
          class: props.class,
          slideCount: props.slideCount,
          spacing: props.spacing,
        },
        slots,
      );
  },
});

export const CarouselControl = withContext(CarouselPrimitive.Control, {
  name: "Control",
});

const CarouselPrevTriggerBase = withContext(CarouselPrimitive.PrevTrigger, {
  name: "PrevTrigger",
});

/**
 * Previous trigger with a localized default `aria-label`; pass your button /
 * icon.
 */
export const CarouselPrevTrigger = defineComponent({
  inheritAttrs: false,
  name: "Carousel.PrevTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        CarouselPrevTriggerBase,
        { "aria-label": m("carousel.previous"), ...attrs },
        slots,
      );
  },
});

const CarouselNextTriggerBase = withContext(CarouselPrimitive.NextTrigger, {
  name: "NextTrigger",
});

/** Next trigger with a localized default `aria-label`; pass your button / icon. */
export const CarouselNextTrigger = defineComponent({
  inheritAttrs: false,
  name: "Carousel.NextTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        CarouselNextTriggerBase,
        { "aria-label": m("carousel.next"), ...attrs },
        slots,
      );
  },
});

const CarouselAutoplayTriggerBase = withContext(
  CarouselPrimitive.AutoplayTrigger,
  { name: "AutoplayTrigger" },
);

/** Autoplay trigger with a localized play / pause `aria-label`. */
export const CarouselAutoplayTrigger = defineComponent({
  inheritAttrs: false,
  name: "Carousel.AutoplayTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();
    const carousel = useCarouselContext();

    return () =>
      h(
        CarouselAutoplayTriggerBase,
        {
          "aria-label": m(
            carousel.value.isPlaying ? "carousel.pause" : "carousel.play",
          ),
          ...attrs,
        },
        slots,
      );
  },
});

/** Shows the default slot while playing and `#fallback` while paused. */
export const CarouselAutoplayIndicator = withContext(
  CarouselPrimitive.AutoplayIndicator,
  { name: "AutoplayIndicator" },
);

export const CarouselProgressText = withContext(
  CarouselPrimitive.ProgressText,
  { name: "ProgressText" },
);

export const CarouselIndicatorGroup = withContext(
  CarouselPrimitive.IndicatorGroup,
  { name: "IndicatorGroup" },
);

export const CarouselIndicator = withContext(CarouselPrimitive.Indicator, {
  name: "Indicator",
});

export const CarouselItemGroup = withContext(CarouselPrimitive.ItemGroup, {
  name: "ItemGroup",
});

export const CarouselItem = withContext(CarouselPrimitive.Item, {
  name: "Item",
});
// #endregion

// #region Shorthand
const navButtonProps = {
  clickEffect: false,
  pill: true,
  size: "icon-md",
  variant: "outline",
} as const;

export const CarouselShorthand = defineComponent({
  inheritAttrs: false,
  name: "Carousel",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    slides: {
      default: () => [],
      type: Array as PropType<CarouselPresetItem[]>,
    },
    spacing: { default: "calc(var(--spacing) * 4)", type: String },
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
        },
        () => [
          h(CarouselControl, null, () => [
            h(CarouselPrevTrigger, { asChild: true }, () =>
              h(Button as ArkPart, navButtonProps, () =>
                h(PhCaretLeft, { "aria-hidden": true }),
              ),
            ),
            h(CarouselNextTrigger, { asChild: true }, () =>
              h(Button as ArkPart, navButtonProps, () =>
                h(PhCaretRight, { "aria-hidden": true }),
              ),
            ),
          ]),
          h(CarouselItemGroup, null, () =>
            props.slides?.map((slide, index) =>
              h(
                CarouselItem,
                { index, key: slide.key ?? String(index) },
                () => slide.content,
              ),
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

export type {
  CarouselAutoplayIndicatorProps,
  CarouselAutoplayTriggerProps,
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
  CarouselProgressTextProps,
} from "@ark-ui/vue";

export const Carousel = Object.assign(CarouselShorthand, {
  AutoplayIndicator: CarouselAutoplayIndicator,
  AutoplayTrigger: CarouselAutoplayTrigger,
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  Item: CarouselItem,
  ItemGroup: CarouselItemGroup,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
  ProgressText: CarouselProgressText,
  Root: CarouselRoot,
});
