import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { CardProps as BaseCardRootProps } from "@pisagor/props";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import type {
  ComponentProps,
  FunctionComponent,
  ReactNode,
  RefAttributes,
} from "react";
import { createSlotRecipeContext } from "../internal";

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

// #region Parts
export const CardRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  HTMLArkProps<"div"> & RefAttributes<HTMLDivElement> & BaseCardRootProps
>;

export function CardMedia({
  variant = "default",
  className,
  ...rest
}: HTMLArkProps<"div"> & RefAttributes<HTMLDivElement> & CardVariantProps) {
  const { slots } = useCard();

  return (
    <ark.div
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
}: HTMLArkProps<"div"> &
  RefAttributes<HTMLDivElement> & {
    /** Supporting text rendered in `Card.Description`. */
    description?: ReactNode;
    /**
     * Heading rendered in `Card.Title` (an `h3`; use `asChild` on `Card.Title`
     * for another level).
     */
    title?: ReactNode;
  }) {
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="card"
    >
      {title != null && <CardTitle>{title}</CardTitle>}

      {description != null && <CardDescription>{description}</CardDescription>}

      {children}
    </ark.div>
  );
}

export const CardTitle = withContext(ark.h3, {
  name: "Title",
  slot: "title",
});

export const CardDescription = withContext(ark.p, {
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

// #region Types
export type CardRootProps = ComponentProps<typeof CardRoot>;
export type CardMediaProps = ComponentProps<typeof CardMedia>;
export type CardHeaderProps = ComponentProps<typeof CardHeader>;
export type CardTitleProps = ComponentProps<typeof CardTitle>;
export type CardDescriptionProps = ComponentProps<typeof CardDescription>;
export type CardActionProps = ComponentProps<typeof CardAction>;
export type CardContentProps = ComponentProps<typeof CardContent>;
export type CardFooterProps = ComponentProps<typeof CardFooter>;
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
