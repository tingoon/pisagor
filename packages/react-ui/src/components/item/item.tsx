import { ark } from "@ark-ui/react/factory";
import { type ItemVariantProps, itemVariants } from "@pisagor/recipes/item";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { ItemContext, useItem } from "./item.context";
import { useItemGroup } from "./item-group.context";

// #region Types
export type ItemProps = ComponentProps<typeof ark.div> & ItemVariantProps;

export type ItemMediaProps = ComponentProps<typeof ark.div> & ItemVariantProps;

export type ItemHeaderProps = ComponentProps<typeof ark.div>;

export type ItemContentProps = ComponentProps<typeof ark.div>;

export type ItemTitleProps = ComponentProps<typeof ark.div>;

export type ItemDescriptionProps = ComponentProps<typeof ark.p>;

export type ItemActionsProps = ComponentProps<typeof ark.div>;

export type ItemFooterProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function ItemRoot({ variant: variantProp, children, className, ...rest }: ItemProps) {
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

export function ItemMedia({ variant = "default", children, className, ...rest }: ItemMediaProps) {
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

export function ItemContent({ children, className, ...rest }: ItemContentProps) {
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

export function ItemTitle({ children, className, ...rest }: ItemTitleProps) {
  const { slots } = useItem();

  return (
    <ark.div {...rest} className={slots.title({ className })} data-part="title" data-scope="item">
      {children}
    </ark.div>
  );
}

export function ItemDescription({ children, className, ...rest }: ItemDescriptionProps) {
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

export function ItemActions({ children, className, ...rest }: ItemActionsProps) {
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

export function ItemHeader({ children, className, ...rest }: ItemHeaderProps) {
  const { slots } = useItem();

  return (
    <ark.div {...rest} className={slots.header({ className })} data-part="header" data-scope="item">
      {children}
    </ark.div>
  );
}

export function ItemFooter({ children, className, ...rest }: ItemFooterProps) {
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
