import { ark } from "@ark-ui/react/factory";
import {
  type ItemMediaVariantProps,
  type ItemVariantProps,
  itemActionsVariants,
  itemContentVariants,
  itemDescriptionVariants,
  itemFooterVariants,
  itemGroupVariants,
  itemHeaderVariants,
  itemInlineVariants,
  itemMediaVariants,
  itemSeparatorVariants,
  itemTitleVariants,
  itemVariants,
} from "@pisagor/styles/ui/item";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";
import { Separator, type SeparatorProps } from "../separator";

// #region Types
interface ItemProps extends ComponentProps<typeof ark.div>, ItemVariantProps, WithTestId {}

interface ItemMediaProps extends ComponentProps<typeof ark.div>, ItemMediaVariantProps {}

interface ItemHeaderProps extends Omit<ComponentProps<typeof ark.div>, "title"> {
  /** Shorthand: renders an ItemTitle inside the header. */
  title?: ReactNode;
  /** Shorthand: renders an ItemDescription inside the header. */
  description?: ReactNode;
}
// #endregion

// #region Parts
export function ItemGroup({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(itemGroupVariants(), className)}
      data-part="group"
      data-scope="item"
      role="list"
    />
  );
}
ItemGroup.displayName = "Item.Group";

export function ItemSeparator({ className, ...rest }: SeparatorProps) {
  return (
    <Separator
      {...rest}
      className={cn(itemSeparatorVariants(), className)}
      dataPart="separator"
      dataScope="item"
      orientation="horizontal"
    />
  );
}
ItemSeparator.displayName = "Item.Separator";

export function ItemRoot({ variant = "default", className, testId, ...rest }: ItemProps) {
  return (
    <ark.div
      {...rest}
      className={cn(itemVariants({ variant }), className)}
      data-part="root"
      data-scope="item"
      data-testid={testId}
      data-variant={variant}
    />
  );
}
ItemRoot.displayName = "Item";

export function ItemMedia({ variant = "default", className, ...rest }: ItemMediaProps) {
  return (
    <ark.div
      {...rest}
      className={cn(itemMediaVariants({ className, variant }))}
      data-part="media"
      data-scope="item"
      data-variant={variant}
    />
  );
}
ItemMedia.displayName = "Item.Media";

export function ItemContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(itemContentVariants(), className)}
      data-part="content"
      data-scope="item"
    />
  );
}
ItemContent.displayName = "Item.Content";

export function ItemTitle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(itemTitleVariants(), className)}
      data-part="title"
      data-scope="item"
    />
  );
}
ItemTitle.displayName = "Item.Title";

export function ItemDescription({ className, ...rest }: ComponentProps<typeof ark.p>) {
  return (
    <ark.p
      {...rest}
      className={cn(itemDescriptionVariants(), className)}
      data-part="description"
      data-scope="item"
    />
  );
}
ItemDescription.displayName = "Item.Description";

export function ItemActions({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(itemActionsVariants(), className)}
      data-part="actions"
      data-scope="item"
    />
  );
}
ItemActions.displayName = "Item.Actions";

export function ItemHeader({ title, description, className, children, ...rest }: ItemHeaderProps) {
  return (
    <ark.div
      {...rest}
      className={cn(itemHeaderVariants(), className)}
      data-part="header"
      data-scope="item"
    >
      {(title || description) && (
        <div className={itemInlineVariants()}>
          {title && <ItemTitle>{title}</ItemTitle>}

          {description && <ItemDescription>{description}</ItemDescription>}
        </div>
      )}

      {children}
    </ark.div>
  );
}
ItemHeader.displayName = "Item.Header";

export function ItemFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(itemFooterVariants(), className)}
      data-part="footer"
      data-scope="item"
    />
  );
}
ItemFooter.displayName = "Item.Footer";
// #endregion
