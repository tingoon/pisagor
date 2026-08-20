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
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";
import { Separator, type SeparatorProps } from "../separator";

// #region Types
export interface ItemProps extends ComponentProps<typeof ark.div>, ItemVariantProps, WithTestId {}

export interface ItemMediaProps extends ComponentProps<typeof ark.div>, ItemMediaVariantProps {}

export interface ItemHeaderProps extends Omit<ComponentProps<typeof ark.div>, "title"> {
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
      className={itemGroupVariants({ className })}
      data-part="group"
      data-scope="item"
      role="list"
    />
  );
}

export function ItemSeparator({ className, ...rest }: SeparatorProps) {
  return (
    <Separator
      {...rest}
      className={itemSeparatorVariants({ className })}
      dataPart="separator"
      dataScope="item"
      orientation="horizontal"
    />
  );
}

export function ItemRoot({ variant = "default", className, testId, ...rest }: ItemProps) {
  return (
    <ark.div
      {...rest}
      className={itemVariants({ className, variant })}
      data-part="root"
      data-scope="item"
      data-testid={testId}
      data-variant={variant}
    />
  );
}

export function ItemMedia({ variant = "default", className, ...rest }: ItemMediaProps) {
  return (
    <ark.div
      {...rest}
      className={itemMediaVariants({ className, variant })}
      data-part="media"
      data-scope="item"
      data-variant={variant}
    />
  );
}

export function ItemContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={itemContentVariants({ className })}
      data-part="content"
      data-scope="item"
    />
  );
}

export function ItemTitle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={itemTitleVariants({ className })}
      data-part="title"
      data-scope="item"
    />
  );
}

export function ItemDescription({ className, ...rest }: ComponentProps<typeof ark.p>) {
  return (
    <ark.p
      {...rest}
      className={itemDescriptionVariants({ className })}
      data-part="description"
      data-scope="item"
    />
  );
}

export function ItemActions({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={itemActionsVariants({ className })}
      data-part="actions"
      data-scope="item"
    />
  );
}

export function ItemHeader({ title, description, className, children, ...rest }: ItemHeaderProps) {
  return (
    <ark.div
      {...rest}
      className={itemHeaderVariants({ className })}
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

export function ItemFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={itemFooterVariants({ className })}
      data-part="footer"
      data-scope="item"
    />
  );
}
// #endregion

// #region Display Names
ItemGroup.displayName = "Item.Group";
ItemSeparator.displayName = "Item.Separator";
ItemRoot.displayName = "Item";
ItemMedia.displayName = "Item.Media";
ItemContent.displayName = "Item.Content";
ItemTitle.displayName = "Item.Title";
ItemDescription.displayName = "Item.Description";
ItemActions.displayName = "Item.Actions";
ItemHeader.displayName = "Item.Header";
ItemFooter.displayName = "Item.Footer";
// #endregion
