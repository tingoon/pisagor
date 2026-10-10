import { Carousel as CarouselPrimitive } from "@ark-ui/vue/carousel";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import type { CarouselProps as BaseCarouselProps } from "@pisagor/props";
import { carouselRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Button } from "./button";

// #region Context
const {
  useStyles: useCarousel,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Carousel",
  recipe: carouselRecipe,
});
// #endregion

// #region Types
export interface CarouselPresetItem {
  content: VNodeChild;
  key?: string;
}

export interface CarouselProps extends BaseCarouselProps {
  class?: unknown;
  slides?: CarouselPresetItem[];
  spacing?: string;
}

type ArkPart = Parameters<typeof h>[0];
// #endregion

// #region Parts
const CarouselRootBase = withProvider(CarouselPrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const CarouselRoot = defineComponent({
  inheritAttrs: false,
  name: "Carousel.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    slideCount: { required: true, type: Number },
    spacing: { default: "16px", type: String },
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

function createNavTrigger(
  direction: "prev" | "next",
  primitive: Parameters<typeof h>[0],
) {
  const isPrev = direction === "prev";

  return defineComponent({
    inheritAttrs: false,
    name: isPrev ? "Carousel.PrevTrigger" : "Carousel.NextTrigger",
    props: {
      class: {
        default: undefined,
        type: [String, Object, Array] as PropType<unknown>,
      },
    },
    setup(props, { attrs }) {
      const styles = useCarousel();

      return () =>
        h(
          primitive,
          {
            ...attrs,
            asChild: true,
            class: (isPrev
              ? styles.slots.prevTrigger
              : styles.slots.nextTrigger)({ class: cn(props.class) }),
          },
          () =>
            h(
              Button as ArkPart,
              {
                "aria-label": isPrev ? "Previous" : "Next",
                clickEffect: false,
                pill: true,
                size: "icon-md",
                variant: "outline",
              },
              () => [
                h(isPrev ? PhCaretLeft : PhCaretRight, { "aria-hidden": true }),
              ],
            ),
        );
    },
  });
}

export const CarouselPrevTrigger = createNavTrigger(
  "prev",
  CarouselPrimitive.PrevTrigger as ArkPart,
);

export const CarouselNextTrigger = createNavTrigger(
  "next",
  CarouselPrimitive.NextTrigger as ArkPart,
);

export const CarouselIndicatorGroup = withContext(
  CarouselPrimitive.IndicatorGroup,
  {
    defaultProps: { "data-part": "indicator-group" },
    name: "IndicatorGroup",
    slot: "indicatorGroup",
  },
);

export const CarouselIndicator = withContext(CarouselPrimitive.Indicator, {
  name: "Indicator",
});

export const CarouselItemGroup = withContext(CarouselPrimitive.ItemGroup, {
  defaultProps: { "data-part": "item-group" },
  name: "ItemGroup",
  slot: "itemGroup",
});

export const CarouselItem = withContext(CarouselPrimitive.Item, {
  name: "Item",
});
// #endregion

// #region Shorthand
export const CarouselShorthand = defineComponent({
  inheritAttrs: false,
  name: "Carousel",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    slides: {
      default: () => [],
      type: Array as PropType<CarouselPresetItem[]>,
    },
    spacing: { default: "16px", type: String },
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
            h(CarouselPrevTrigger),
            h(CarouselNextTrigger),
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

export const Carousel = Object.assign(CarouselShorthand, {
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  Item: CarouselItem,
  ItemGroup: CarouselItemGroup,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
  Root: CarouselRoot,
});
