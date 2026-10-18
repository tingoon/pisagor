import { ark, type HTMLArkProps } from "@ark-ui/react";
import type {
  ItemProps as BaseItemGroupProps,
  ItemProps as BaseItemSeparatorProps,
} from "@pisagor/props";
import { itemRecipe } from "@pisagor/recipes";

import { Separator, type SeparatorProps } from "../separator";
import { ItemGroupContext } from "./item-group.context";

// #region Types
export interface ItemGroupProps
  extends HTMLArkProps<"div">, BaseItemGroupProps {}

export interface ItemSeparatorProps
  extends Omit<SeparatorProps, "recipe">, BaseItemSeparatorProps {}
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
      >
        {children}
      </ark.div>
    </ItemGroupContext>
  );
}

export function ItemSeparator({
  recipe = itemRecipe,
  className,
  ...rest
}: ItemSeparatorProps) {
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
