import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { CardContract, CardRootContract } from "@pisagor/contracts";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
// #endregion

// #region Types
export type CardRootProps = HTMLArkProps<"div"> & CardRootContract;
export type CardTitleProps = HTMLArkProps<"h3">;
export type CardDescriptionProps = ComponentProps<"p">;
export type CardActionProps = ComponentProps<"div">;
export type CardContentProps = ComponentProps<"div">;
export type CardFooterProps = ComponentProps<"div">;
export type CardMediaProps = ComponentPropsWithRef<"div"> & CardVariantProps;
export type CardHeaderProps = ComponentPropsWithRef<"div">;
export type CardProps = CardRootProps & CardContract;
// #endregion

// #region Parts
export const CardRoot = withProvider<CardRootProps>(ark.div, { name: "Root" });

export function CardMedia({
  variant = "default",
  className,
  ...rest
}: CardMediaProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.media({ className, variant })}
      data-part="media"
      data-scope="card"
      data-variant={variant}
    />
  );
}

export const CardHeader = withContext<CardHeaderProps>("div", {
  name: "Header",
});

export const CardTitle = withContext<CardTitleProps>(ark.h3, { name: "Title" });

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
// #endregion

CardMedia.displayName = "Card.Media";
CardHeader.displayName = "Card.Header";

export const Card = Object.assign(CardRoot, {
  Action: CardAction,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Media: CardMedia,
  Title: CardTitle,
});
