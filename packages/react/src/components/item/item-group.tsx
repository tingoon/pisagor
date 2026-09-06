import { ark } from "@ark-ui/react/factory";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes/item";
import type { ComponentProps } from "react";
import { Separator, type SeparatorProps } from "../separator";
import { ItemGroupContext } from "./item-group.context";

// #region Types
export interface ItemGroupProps extends ComponentProps<typeof ark.div>, ItemVariantProps {
  /**
   * Style recipe. Defaults to `itemRecipe` from `@pisagor/recipes/item`.
   *
   * @defaultValue itemRecipe
   */
  recipe?: typeof itemRecipe;
}

export interface ItemSeparatorProps extends Omit<SeparatorProps, "recipe"> {
  /**
   * Style recipe. Defaults to `itemRecipe` from `@pisagor/recipes/item`.
   *
   * @defaultValue itemRecipe
   */
  recipe?: typeof itemRecipe;
}
// #endregion

// #region Parts
export function ItemGroup({
  variant = "default",
  children,
  recipe = itemRecipe,
  className,
  ...rest
}: ItemGroupProps) {
  const slots = recipe();

  return (
    <ItemGroupContext value={{ variant }}>
      <ark.div
        {...rest}
        className={slots.group({ className })}
        data-part="group"
        data-scope="item"
        data-variant={variant}
        role="list"
      >
        {children}
      </ark.div>
    </ItemGroupContext>
  );
}

export function ItemSeparator({ recipe = itemRecipe, className, ...rest }: ItemSeparatorProps) {
  const slots = recipe();

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="item"
      orientation="horizontal"
    />
  );
}
// #endregion

// #region Display Names
ItemGroup.displayName = "Item.Group";
ItemSeparator.displayName = "Item.Separator";
// #endregion
