import { ark, type HTMLArkProps } from "@ark-ui/react";
import type {
  CardContract,
  CardHeaderContract,
  CardRootContract,
} from "@pisagor/contracts";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
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
export interface CardHeaderProps
  extends Omit<ComponentPropsWithRef<"div">, "title">, CardHeaderContract {
  description?: ReactNode;
  title?: ReactNode;
}
export type CardProps = CardRootProps & CardContract;
// #endregion

// #region Parts
export const CardRoot = withProvider<CardRootProps>(ark.div, {
  name: "Root",
  slot: "base",
});

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

export function CardHeader({
  children,
  description,
  title,
  className,
  ...rest
}: CardHeaderProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="card"
    >
      {title != null && <CardTitle>{title}</CardTitle>}

      {description != null && <CardDescription>{description}</CardDescription>}

      {children}
    </div>
  );
}

export const CardTitle = withContext<CardTitleProps>(ark.h3, {
  name: "Title",
  slot: "title",
});

export const CardDescription = withContext<CardDescriptionProps>("p", {
  name: "Description",
  slot: "description",
});

export const CardAction = withContext<CardActionProps>("div", {
  name: "Action",
  slot: "action",
});

export const CardContent = withContext<CardContentProps>("div", {
  name: "Content",
  slot: "content",
});

export const CardFooter = withContext<CardFooterProps>("div", {
  name: "Footer",
  slot: "footer",
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
