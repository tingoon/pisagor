import { ark } from "@ark-ui/react/factory";
import {
  type CardMediaVariantProps,
  cardActionVariants,
  cardContentVariants,
  cardDescriptionVariants,
  cardFooterVariants,
  cardHeaderVariants,
  cardMediaVariants,
  cardTitleVariants,
  cardVariants,
} from "@pisagor/styles/ui/card";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface CardRootProps extends ComponentProps<typeof ark.div>, WithTestId {}

export interface CardMediaProps extends ComponentProps<typeof ark.div>, CardMediaVariantProps {}

export interface CardHeaderProps extends ComponentProps<typeof ark.div> {
  /** The description of the card */
  description?: string;
  /** The title of the card */
  title?: string;
}
// #endregion

// #region Parts
export function CardRoot({ className, children, testId, ...rest }: CardRootProps) {
  return (
    <ark.div
      {...rest}
      className={cardVariants({ className })}
      data-part="root"
      data-scope="card"
      data-testid={testId}
    >
      {children}
    </ark.div>
  );
}

export function CardMedia({ variant = "default", className, ...rest }: CardMediaProps) {
  return (
    <ark.div
      {...rest}
      className={cardMediaVariants({ className, variant })}
      data-part="media"
      data-scope="card"
      data-variant={variant}
    />
  );
}

export function CardHeader({ title, description, className, children, ...rest }: CardHeaderProps) {
  return (
    <ark.div
      {...rest}
      className={cardHeaderVariants({ className })}
      data-part="header"
      data-scope="card"
    >
      {!!title && <CardTitle>{title}</CardTitle>}

      {!!description && <CardDescription>{description}</CardDescription>}

      {children}
    </ark.div>
  );
}

export function CardTitle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cardTitleVariants({ className })}
      data-part="title"
      data-scope="card"
    />
  );
}

export function CardDescription({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cardDescriptionVariants({ className })}
      data-part="description"
      data-scope="card"
    />
  );
}

export function CardAction({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cardActionVariants({ className })}
      data-part="action"
      data-scope="card"
    />
  );
}

export function CardContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cardContentVariants({ className })}
      data-part="content"
      data-scope="card"
    />
  );
}

export function CardFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cardFooterVariants({ className })}
      data-part="footer"
      data-scope="card"
    />
  );
}

CardRoot.displayName = "Card";
CardMedia.displayName = "Card.Media";
CardHeader.displayName = "Card.Header";
CardTitle.displayName = "Card.Title";
CardDescription.displayName = "Card.Description";
CardAction.displayName = "Card.Action";
CardContent.displayName = "Card.Content";
CardFooter.displayName = "Card.Footer";
// #endregion
