import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { ItemRootContract } from "@pisagor/contracts";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../../internal";
import { useItemGroup } from "./item-group.context";

// #region Context
const {
  Context: ItemStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "Item",
  recipe: itemRecipe,
});
// #endregion

// #region Parts
export function ItemRoot({
  size: sizeProp,
  variant: variantProp,
  children,
  recipe = itemRecipe,
  className,
  ...rest
}: HTMLArkProps<"div"> & ItemRootContract) {
  const group = useItemGroup();
  const variant = variantProp ?? group?.variant ?? "default";
  const resolved = {
    ...itemRecipe.defaultVariants,
    ...recipe.defaultVariants,
    ...(sizeProp ? { size: sizeProp } : {}),
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
}: ComponentProps<"div"> & ItemVariantProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.media({ className, variant })}
      data-part="media"
      data-scope="item"
      data-variant={variant}
    >
      {children}
    </div>
  );
}

export const ItemContent = withContext<ComponentProps<"div">>("div", {
  name: "Content",
});

export const ItemTitle = withContext<ComponentProps<"div">>("div", {
  name: "Title",
});

export const ItemDescription = withContext<ComponentProps<"p">>("p", {
  name: "Description",
});

export const ItemActions = withContext<ComponentProps<"div">>("div", {
  name: "Actions",
});

export const ItemHeader = withContext<ComponentProps<"div">>("div", {
  name: "Header",
});

export const ItemFooter = withContext<ComponentProps<"div">>("div", {
  name: "Footer",
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
