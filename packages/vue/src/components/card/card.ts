import { ark } from "@ark-ui/vue/factory";
import { type CardVariantProps, cardVariants } from "@pisagor/styles/ui/card";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

export type CardMediaVariant = NonNullable<CardVariantProps["variant"]>;

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface CardRootProps extends WithTestId {
  class?: unknown;
}
// #endregion

// #region Parts
export const CardRoot = defineComponent({
  inheritAttrs: false,
  name: "CardRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = cardVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "card",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
    };
  },
});

export const CardMedia = defineComponent({
  inheritAttrs: false,
  name: "CardMedia",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
    variant: { default: "default", type: String as PropType<CardVariantProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = cardVariants({ variant: props.variant });

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.media({ class: props.class }),
          "data-part": "media",
          "data-scope": "card",
          "data-testid": props.testId,
          "data-variant": props.variant,
        },
        slots.default?.(),
      );
    };
  },
});

export const CardHeader = defineComponent({
  inheritAttrs: false,
  name: "CardHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    description: { default: undefined, type: String },
    testId: String,
    title: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = cardVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.header({ class: props.class }),
          "data-part": "header",
          "data-scope": "card",
          "data-testid": props.testId,
        },
        () => [
          props.title ? h(CardTitle, null, () => props.title) : null,
          props.description ? h(CardDescription, null, () => props.description) : null,
          slots.default?.(),
        ],
      );
    };
  },
});

export const CardTitle = defineComponent({
  inheritAttrs: false,
  name: "CardTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = cardVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.title({ class: props.class }),
          "data-part": "title",
          "data-scope": "card",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
    };
  },
});

export const CardDescription = defineComponent({
  inheritAttrs: false,
  name: "CardDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = cardVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.description({ class: props.class }),
          "data-part": "description",
          "data-scope": "card",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
    };
  },
});

export const CardAction = defineComponent({
  inheritAttrs: false,
  name: "CardAction",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = cardVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.action({ class: props.class }),
          "data-part": "action",
          "data-scope": "card",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
    };
  },
});

export const CardContent = defineComponent({
  inheritAttrs: false,
  name: "CardContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = cardVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.content({ class: props.class }),
          "data-part": "content",
          "data-scope": "card",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
    };
  },
});

export const CardFooter = defineComponent({
  inheritAttrs: false,
  name: "CardFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = cardVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.footer({ class: props.class }),
          "data-part": "footer",
          "data-scope": "card",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
    };
  },
});
// #endregion
