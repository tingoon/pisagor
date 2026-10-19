import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { CardContract, CardRootContract } from "@pisagor/contracts";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
// #endregion

// #region Types
export type CardRootProps = HTMLArkProps<"div"> & CardRootContract;

export type CardMediaProps = ComponentProps<"div"> & CardVariantProps;

export type CardHeaderProps = HTMLArkProps<"div">;

export type CardTitleProps = HTMLArkProps<"h3">;
export type CardDescriptionProps = ComponentProps<"p">;
export type CardActionProps = ComponentProps<"div">;
export type CardContentProps = ComponentProps<"div">;
export type CardFooterProps = ComponentProps<"div">;

export type CardProps = CardRootProps & CardContract;
// #endregion

// #region Parts
export const CardRoot = withProvider<CardRootProps>(ark.div, { name: "Root" });

/** Part-level `variant` stays on Media (not lifted to Root). */
export function CardMedia(props: CardMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const styles = useStyles();
  const variant = () => local.variant ?? "default";

  return (
    <div
      {...rest}
      class={styles.slots.media({ class: local.class, variant: variant() })}
      data-part="media"
      data-scope="card"
      data-variant={variant()}
    />
  );
}

export const CardTitle = withContext<CardTitleProps>(ark.h3, {
  name: "Title",
});

export const CardDescription = withContext<CardDescriptionProps>("p", {
  name: "Description",
});

export const CardAction = withContext<CardActionProps>("div", {
  name: "Action",
});

export const CardContent = withContext<CardContentProps>("div", {
  name: "Content",
});

export const CardFooter = withContext<CardFooterProps>("div", {
  name: "Footer",
});

export const CardHeader = withContext<CardHeaderProps>(ark.div, {
  name: "Header",
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
