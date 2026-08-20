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
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface CardRootProps extends ComponentProps<typeof ark.div>, WithTestId {}

interface CardMediaProps extends ComponentProps<typeof ark.div>, CardMediaVariantProps {}

interface HeaderProps extends ComponentProps<typeof ark.div> {
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
      className={cn(cardVariants(), className)}
      data-part="root"
      data-scope="card"
      data-testid={testId}
    >
      {children}
    </ark.div>
  );
}
CardRoot.displayName = "Card";

export function CardMedia({ variant = "default", className, ...rest }: CardMediaProps) {
  return (
    <ark.div
      {...rest}
      className={cn(cardMediaVariants({ variant }), className)}
      data-part="media"
      data-scope="card"
      data-variant={variant}
    />
  );
}
CardMedia.displayName = "Card.Media";

export function CardHeader({ title, description, className, children, ...rest }: HeaderProps) {
  return (
    <ark.div
      {...rest}
      className={cn(cardHeaderVariants(), className)}
      data-part="header"
      data-scope="card"
    >
      {!!title && <CardTitle>{title}</CardTitle>}

      {!!description && <CardDescription>{description}</CardDescription>}

      {children}
    </ark.div>
  );
}
CardHeader.displayName = "Card.Header";

export function CardTitle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(cardTitleVariants(), className)}
      data-part="title"
      data-scope="card"
    />
  );
}
CardTitle.displayName = "Card.Title";

export function CardDescription({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(cardDescriptionVariants(), className)}
      data-part="description"
      data-scope="card"
    />
  );
}
CardDescription.displayName = "Card.Description";

export function CardAction({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(cardActionVariants(), className)}
      data-part="action"
      data-scope="card"
    />
  );
}
CardAction.displayName = "Card.Action";

export function CardContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(cardContentVariants(), className)}
      data-part="content"
      data-scope="card"
    />
  );
}
CardContent.displayName = "Card.Content";

export function CardFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(cardFooterVariants(), className)}
      data-part="footer"
      data-scope="card"
    />
  );
}
CardFooter.displayName = "Card.Footer";
// #endregion
