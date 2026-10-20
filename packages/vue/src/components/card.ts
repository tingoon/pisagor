import { ark, type HTMLArkProps } from "@ark-ui/vue";
import type { CardRootContract, CardContract } from "@pisagor/contracts";
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

export type CardHeaderProps = HTMLArkProps<"div">;

export type CardProps = CardRootProps & CardContract;
// #endregion

// #region Parts
export const CardRoot = withProvider<CardRootContract>(ark.div, {
  name: "Root",
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

export const CardHeader = withContext("div", { name: "Header" });

export const CardTitle = withContext(ark.h3, { name: "Title" });

export const CardDescription = withContext("p", { name: "Description" });

export const CardAction = withContext("div", { name: "Action" });

export const CardContent = withContext("div", { name: "Content" });

export const CardFooter = withContext("div", { name: "Footer" });
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
