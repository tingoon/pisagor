import { ark } from "@ark-ui/react/factory";
import { type ItemVariantProps, itemVariants } from "@pisagor/styles/ui/item";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import type { WithTestId } from "../../internal/types";
import { Separator, type SeparatorProps } from "../separator";
import { ItemContext, useItem } from "./item.context";

// #region Types
export interface ItemProps extends ComponentProps<typeof ark.div>, ItemVariantProps, WithTestId {}

export interface ItemMediaProps extends ComponentProps<typeof ark.div>, ItemVariantProps {}

export interface ItemHeaderProps extends Omit<ComponentProps<typeof ark.div>, "title"> {
  /** Shorthand: renders an ItemTitle inside the header. */
  title?: ReactNode;
  /** Shorthand: renders an ItemDescription inside the header. */
  description?: ReactNode;
}

export interface ItemGroupProps extends ComponentProps<typeof ark.div> {}

export interface ItemContentProps extends ComponentProps<typeof ark.div> {}

export interface ItemTitleProps extends ComponentProps<typeof ark.div> {}

export interface ItemDescriptionProps extends ComponentProps<typeof ark.p> {}

export interface ItemActionsProps extends ComponentProps<typeof ark.div> {}

export interface ItemFooterProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Parts
export function ItemGroup({ className, children, ...rest }: ItemGroupProps) {
  const slots = useMemo(() => itemVariants(), []);

  return (
    <ItemContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.group({ className })}
        data-part="group"
        data-scope="item"
        role="list"
      >
        {children}
      </ark.div>
    </ItemContext>
  );
}

export function ItemSeparator({ className, ...rest }: SeparatorProps) {
  const { slots } = useItem();

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      dataPart="separator"
      dataScope="item"
      orientation="horizontal"
    />
  );
}

export function ItemRoot({ variant = "default", className, testId, ...rest }: ItemProps) {
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      className={slots.base({ className, variant })}
      data-part="root"
      data-scope="item"
      data-testid={testId}
      data-variant={variant}
    />
  );
}

export function ItemMedia({ variant = "default", className, ...rest }: ItemMediaProps) {
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      className={slots.media({ className, variant })}
      data-part="media"
      data-scope="item"
      data-variant={variant}
    />
  );
}

export function ItemContent({ className, ...rest }: ItemContentProps) {
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="item"
    />
  );
}

export function ItemTitle({ className, ...rest }: ItemTitleProps) {
  const { slots } = useItem();

  return (
    <ark.div {...rest} className={slots.title({ className })} data-part="title" data-scope="item" />
  );
}

export function ItemDescription({ className, ...rest }: ItemDescriptionProps) {
  const { slots } = useItem();

  return (
    <ark.p
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="item"
    />
  );
}

export function ItemActions({ className, ...rest }: ItemActionsProps) {
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      className={slots.actions({ className })}
      data-part="actions"
      data-scope="item"
    />
  );
}

export function ItemHeader({ title, description, className, children, ...rest }: ItemHeaderProps) {
  const { slots } = useItem();

  return (
    <ark.div {...rest} className={slots.header({ className })} data-part="header" data-scope="item">
      {(title || description) && (
        <div className={slots.inline()}>
          {title && <ItemTitle>{title}</ItemTitle>}

          {description && <ItemDescription>{description}</ItemDescription>}
        </div>
      )}

      {children}
    </ark.div>
  );
}

export function ItemFooter({ className, ...rest }: ItemFooterProps) {
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      className={slots.footer({ className })}
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
