import { ark } from "@ark-ui/react";
import type {
  CardContract,
  CardHeaderContract,
  CardRootContract,
} from "@pisagor/props";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
// #endregion

// #region Parts
export const CardRoot = withProvider(ark.div)<CardRootContract>({
  name: "Root",
  slot: "base",
});

export function CardMedia({
  variant = "default",
  className,
  ...rest
}: ComponentPropsWithRef<"div"> & CardVariantProps) {
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

// #region Types
export type CardRootProps = ComponentProps<typeof CardRoot>;
export type CardMediaProps = ComponentProps<typeof CardMedia>;
export interface CardHeaderProps
  extends Omit<ComponentPropsWithRef<"div">, "title">, CardHeaderContract {
  description?: ReactNode;
  title?: ReactNode;
}
export type CardTitleProps = ComponentProps<typeof CardTitle>;
export type CardDescriptionProps = ComponentProps<typeof CardDescription>;
export type CardActionProps = ComponentProps<typeof CardAction>;
export type CardContentProps = ComponentProps<typeof CardContent>;
export type CardFooterProps = ComponentProps<typeof CardFooter>;

export interface CardProps extends CardRootProps, CardContract {}
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
