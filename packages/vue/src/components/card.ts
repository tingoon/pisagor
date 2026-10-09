import { ark } from "@ark-ui/vue/factory";
import type { CardProps as BaseCardRootProps } from "@pisagor/props";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useCard,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
// #endregion

// #region Types
export type CardMediaVariant = NonNullable<CardVariantProps["variant"]>;

export interface CardRootProps extends BaseCardRootProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const CardRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const CardMedia = defineComponent({
  inheritAttrs: false,
  name: "Card.Media",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    variant: {
      default: "default",
      type: String as PropType<CardVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const { slots: styleSlots } = useCard();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: styleSlots.media({
            class: props.class,
            variant: props.variant,
          }),
          "data-part": "media",
          "data-scope": "card",
          "data-variant": props.variant,
        },
        slots,
      );
  },
});

export const CardHeader = defineComponent({
  inheritAttrs: false,
  name: "Card.Header",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    description: { default: undefined, type: String },
    title: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const { slots: styleSlots } = useCard();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: styleSlots.header({ class: props.class }),
          "data-part": "header",
          "data-scope": "card",
        },
        () => [
          props.title ? h(CardTitle, null, () => props.title) : null,
          props.description
            ? h(CardDescription, null, () => props.description)
            : null,
          slots.default?.(),
        ],
      );
  },
});

export const CardTitle = withContext(ark.div, {
  name: "Title",
  slot: "title",
});

export const CardDescription = withContext(ark.div, {
  name: "Description",
  slot: "description",
});

export const CardAction = withContext(ark.div, {
  name: "Action",
  slot: "action",
});

export const CardContent = withContext(ark.div, {
  name: "Content",
  slot: "content",
});

export const CardFooter = withContext(ark.div, {
  name: "Footer",
  slot: "footer",
});
// #endregion

export const Card = Object.assign(CardRoot, {
  Action: CardAction,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Media: CardMedia,
  Title: CardTitle,
});
