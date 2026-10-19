import { ark } from "@ark-ui/vue";
import type {
  CardHeaderContract,
  CardRootContract,
  CardContract,
} from "@pisagor/contracts";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
// #endregion

// #region Types
export type CardMediaVariant = NonNullable<CardVariantProps["variant"]>;

export interface CardRootProps extends CardRootContract {
  class?: unknown;
}

export interface CardHeaderProps extends CardHeaderContract {
  class?: unknown;
  description?: string;
  title?: string;
}

export type CardProps = CardRootProps & CardContract;
// #endregion

// #region Parts
export const CardRoot = withProvider<CardRootContract>(ark.div, {
  name: "Root",
  slot: "base",
});

export const CardMedia = defineComponent({
  inheritAttrs: false,
  name: "Card.Media",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    variant: {
      default: "default",
      type: String as PropType<CardVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const { slots: styleSlots } = useStyles();

    return () =>
      h(
        "div",
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
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    description: { default: undefined, type: String },
    title: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const { slots: styleSlots } = useStyles();

    return () =>
      h(
        "div",
        {
          ...attrs,
          class: styleSlots.header({ class: props.class }),
          "data-part": "header",
          "data-scope": "card",
        },
        () => [
          props.title != null || slots.title
            ? h(CardTitle, null, () => slots.title?.() ?? props.title)
            : null,
          props.description != null || slots.description
            ? h(
                CardDescription,
                null,
                () => slots.description?.() ?? props.description,
              )
            : null,
          slots.default?.(),
        ],
      );
  },
});

export const CardTitle = withContext(ark.h3, {
  name: "Title",
  slot: "title",
});

export const CardDescription = withContext("p", {
  name: "Description",
  slot: "description",
});

export const CardAction = withContext("div", {
  name: "Action",
  slot: "action",
});

export const CardContent = withContext("div", {
  name: "Content",
  slot: "content",
});

export const CardFooter = withContext("div", {
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
