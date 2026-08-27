import { ark } from "@ark-ui/react/factory";
import { type CardVariantProps, cardVariants } from "@pisagor/recipes/card";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { CardContext, useCard } from "./card.context";

// #region Types
export type CardRootProps = ComponentProps<typeof ark.div>;

export type CardMediaProps = ComponentProps<typeof ark.div> & CardVariantProps;

export interface CardHeaderProps extends ComponentProps<typeof ark.div> {
  /** The description of the card */
  description?: string;
  /** The title of the card */
  title?: string;
}

export type CardTitleProps = ComponentProps<typeof ark.div>;

export type CardDescriptionProps = ComponentProps<typeof ark.div>;

export type CardActionProps = ComponentProps<typeof ark.div>;

export type CardContentProps = ComponentProps<typeof ark.div>;

export type CardFooterProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function CardRoot({ children, className, ...rest }: CardRootProps) {
  const slots = useMemo(() => cardVariants(), []);

  return (
    <CardContext value={{ slots }}>
      <ark.div {...rest} className={slots.base({ className })} data-part="root" data-scope="card">
        {children}
      </ark.div>
    </CardContext>
  );
}

export function CardMedia({ variant = "default", className, ...rest }: CardMediaProps) {
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

export function CardHeader({ children, description, title, className, ...rest }: CardHeaderProps) {
  const { slots } = useCard();

  return (
    <ark.div {...rest} className={slots.header({ className })} data-part="header" data-scope="card">
      {!!title && <CardTitle>{title}</CardTitle>}

      {!!description && <CardDescription>{description}</CardDescription>}

      {children}
    </ark.div>
  );
}

export function CardTitle({ className, ...rest }: CardTitleProps) {
  const { slots } = useCard();

  return (
    <ark.div {...rest} className={slots.title({ className })} data-part="title" data-scope="card" />
  );
}

export function CardDescription({ className, ...rest }: CardDescriptionProps) {
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="card"
    />
  );
}

export function CardAction({ className, ...rest }: CardActionProps) {
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      className={slots.action({ className })}
      data-part="action"
      data-scope="card"
    />
  );
}

export function CardContent({ className, ...rest }: CardContentProps) {
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="card"
    />
  );
}

export function CardFooter({ className, ...rest }: CardFooterProps) {
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="card"
    />
  );
}
// #endregion

// #region Display Names
CardRoot.displayName = "Card";
CardMedia.displayName = "Card.Media";
CardHeader.displayName = "Card.Header";
CardTitle.displayName = "Card.Title";
CardDescription.displayName = "Card.Description";
CardAction.displayName = "Card.Action";
CardContent.displayName = "Card.Content";
CardFooter.displayName = "Card.Footer";
// #endregion
