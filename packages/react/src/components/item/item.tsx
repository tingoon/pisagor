import { ark } from "@ark-ui/react/factory";
import { type ItemVariantProps, itemVariants } from "@pisagor/recipes/item";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { ItemContext, useItem } from "./item.context";
import { useItemGroup } from "./item-group.context";

// #region Types
export interface ItemProps extends ComponentProps<typeof ark.div>, ItemVariantProps {}

export interface ItemMediaProps extends ComponentProps<typeof ark.div>, ItemVariantProps {}

export interface ItemHeaderProps extends ComponentProps<typeof ark.div> {}

export interface ItemContentProps extends ComponentProps<typeof ark.div> {}

export interface ItemTitleProps extends ComponentProps<typeof ark.div> {}

export interface ItemDescriptionProps extends ComponentProps<typeof ark.p> {}

export interface ItemActionsProps extends ComponentProps<typeof ark.div> {}

export interface ItemFooterProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Parts
export function ItemRoot({ variant: variantProp, className, children, ...rest }: ItemProps) {
  const group = useItemGroup();
  const variant = variantProp ?? group?.variant ?? "default";
  const slots = useMemo(() => itemVariants(), []);

  return (
    <ItemContext value={{ slots, variant }}>
      <ark.div
        {...rest}
        className={slots.base({ className, variant })}
        data-part="root"
        data-scope="item"
        data-variant={variant}
      >
        {children}
      </ark.div>
    </ItemContext>
  );
}

export function ItemMedia({ variant = "default", className, children, ...rest }: ItemMediaProps) {
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      className={slots.media({ className, variant })}
      data-part="media"
      data-scope="item"
      data-variant={variant}
    >
      {children}
    </ark.div>
  );
}

export function ItemContent({ className, children, ...rest }: ItemContentProps) {
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="item"
    >
      {children}
    </ark.div>
  );
}

export function ItemTitle({ className, children, ...rest }: ItemTitleProps) {
  const { slots } = useItem();

  return (
    <ark.div {...rest} className={slots.title({ className })} data-part="title" data-scope="item">
      {children}
    </ark.div>
  );
}

export function ItemDescription({ className, children, ...rest }: ItemDescriptionProps) {
  const { slots } = useItem();

  return (
    <ark.p
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="item"
    >
      {children}
    </ark.p>
  );
}

export function ItemActions({ className, children, ...rest }: ItemActionsProps) {
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      className={slots.actions({ className })}
      data-part="actions"
      data-scope="item"
    >
      {children}
    </ark.div>
  );
}

export function ItemHeader({ className, children, ...rest }: ItemHeaderProps) {
  const { slots } = useItem();

  return (
    <ark.div {...rest} className={slots.header({ className })} data-part="header" data-scope="item">
      {children}
    </ark.div>
  );
}

export function ItemFooter({ className, children, ...rest }: ItemFooterProps) {
  const { slots } = useItem();

  return (
    <ark.div {...rest} className={slots.footer({ className })} data-part="footer" data-scope="item">
      {children}
    </ark.div>
  );
}
// #endregion

// #region Display Names
ItemRoot.displayName = "Item";
ItemMedia.displayName = "Item.Media";
ItemContent.displayName = "Item.Content";
ItemTitle.displayName = "Item.Title";
ItemDescription.displayName = "Item.Description";
ItemActions.displayName = "Item.Actions";
ItemHeader.displayName = "Item.Header";
ItemFooter.displayName = "Item.Footer";
// #endregion
