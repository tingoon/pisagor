import { ark } from "@ark-ui/react/factory";
import type { ItemProps as BaseItemProps } from "@pisagor/props";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";
import { useItemGroup } from "./item-group.context";

// #region Context
const {
  Context: ItemStylesContext,
  useStyles: useItem,
  withContext,
} = createSlotRecipeContext({
  name: "Item",
  recipe: itemRecipe,
});
// #endregion

// #region Parts
export function ItemRoot({
  variant: variantProp,
  children,
  recipe = itemRecipe,
  className,
  ...rest
}: ComponentProps<typeof ark.div> & BaseItemProps) {
  const group = useItemGroup();
  const variant = variantProp ?? group?.variant ?? "default";
  const resolved = {
    ...itemRecipe.defaultVariants,
    ...recipe.defaultVariants,
    variant,
  };
  const slots = recipe(resolved);

  return (
    <ItemStylesContext value={{ slots, variants: resolved as never }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="item"
        data-variant={variant}
      >
        {children}
      </ark.div>
    </ItemStylesContext>
  );
}

export function ItemMedia({
  variant = "default",
  children,
  className,
  ...rest
}: ComponentProps<typeof ark.div> & ItemVariantProps) {
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

export const ItemContent = withContext(ark.div, {
  name: "Content",
  slot: "content",
});

export const ItemTitle = withContext(ark.div, {
  name: "Title",
  slot: "title",
});

export const ItemDescription = withContext(ark.p, {
  name: "Description",
  slot: "description",
});

export const ItemActions = withContext(ark.div, {
  name: "Actions",
  slot: "actions",
});

export const ItemHeader = withContext(ark.div, {
  name: "Header",
  slot: "header",
});

export const ItemFooter = withContext(ark.div, {
  name: "Footer",
  slot: "footer",
});
// #endregion

// #region Types
export type ItemProps = ComponentProps<typeof ItemRoot>;
export type ItemMediaProps = ComponentProps<typeof ItemMedia>;
export type ItemHeaderProps = ComponentProps<typeof ItemHeader>;
export type ItemContentProps = ComponentProps<typeof ItemContent>;
export type ItemTitleProps = ComponentProps<typeof ItemTitle>;
export type ItemDescriptionProps = ComponentProps<typeof ItemDescription>;
export type ItemActionsProps = ComponentProps<typeof ItemActions>;
export type ItemFooterProps = ComponentProps<typeof ItemFooter>;
// #endregion

ItemRoot.displayName = "Item";
ItemMedia.displayName = "Item.Media";
