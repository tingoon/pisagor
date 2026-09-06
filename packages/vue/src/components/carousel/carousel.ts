import { Carousel as CarouselPrimitive } from "@ark-ui/vue/carousel";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { carouselRecipe } from "@pisagor/recipes/carousel";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { Button } from "../button";

// #region Types
export interface CarouselPresetItem {
  content: VNodeChild;
  key?: string;
}

export interface CarouselProps {
  /**
   * Style recipe. Defaults to `carouselRecipe` from `@pisagor/recipes/carousel`.
   *
   * @defaultValue carouselRecipe
   */
  recipe?: typeof carouselRecipe;
  class?: unknown;
  slides?: CarouselPresetItem[];
  spacing?: string;
}

type ArkPart = Parameters<typeof h>[0];
// #endregion

// #region Parts
export const CarouselRoot = defineComponent({
  inheritAttrs: false,
  name: "CarouselRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: carouselRecipe,
      type: Function as PropType<typeof carouselRecipe>,
    },
    slideCount: { required: true, type: Number },
    spacing: { default: "16px", type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        CarouselPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          slideCount: props.slideCount,
          spacing: props.spacing,
        },
        slots,
      );
    };
  },
});

export const CarouselControl = defineComponent({
  inheritAttrs: false,
  name: "CarouselControl",
  props: {
    recipe: {
      default: carouselRecipe,
      type: Function as PropType<typeof carouselRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        CarouselPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.control(), attrs.class),
        },
        slots,
      );
    };
  },
});

export const CarouselPrevTrigger = defineComponent({
  inheritAttrs: false,
  name: "CarouselPrevTrigger",
  props: {
    recipe: {
      default: carouselRecipe,
      type: Function as PropType<typeof carouselRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        CarouselPrimitive.PrevTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(variantSlots.prevTrigger(), attrs.class),
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
    };
  },
});

export const CarouselNextTrigger = defineComponent({
  inheritAttrs: false,
  name: "CarouselNextTrigger",
  props: {
    recipe: {
      default: carouselRecipe,
      type: Function as PropType<typeof carouselRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        CarouselPrimitive.NextTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: cn(variantSlots.nextTrigger(), attrs.class),
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
    };
  },
});

export const CarouselIndicatorGroup = defineComponent({
  inheritAttrs: false,
  name: "CarouselIndicatorGroup",
  props: {
    recipe: {
      default: carouselRecipe,
      type: Function as PropType<typeof carouselRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        CarouselPrimitive.IndicatorGroup as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.indicatorGroup(), attrs.class),
        },
        slots,
      );
    };
  },
});

export const CarouselIndicator = defineComponent({
  inheritAttrs: false,
  name: "CarouselIndicator",
  props: {
    recipe: {
      default: carouselRecipe,
      type: Function as PropType<typeof carouselRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        CarouselPrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.indicator(), attrs.class),
        },
        slots,
      );
    };
  },
});

export const CarouselItemGroup = defineComponent({
  inheritAttrs: false,
  name: "CarouselItemGroup",
  props: {
    recipe: {
      default: carouselRecipe,
      type: Function as PropType<typeof carouselRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        CarouselPrimitive.ItemGroup as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.itemGroup(), attrs.class),
        },
        slots,
      );
    };
  },
});

export const CarouselItem = defineComponent({
  inheritAttrs: false,
  name: "CarouselItem",
  props: {
    recipe: {
      default: carouselRecipe,
      type: Function as PropType<typeof carouselRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        CarouselPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.item(), attrs.class),
        },
        slots,
      );
    };
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
          h(CarouselControl, null, () => [h(CarouselPrevTrigger), h(CarouselNextTrigger)]),
          h(CarouselItemGroup, null, () =>
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
