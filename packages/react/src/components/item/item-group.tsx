import { ark } from "@ark-ui/react/factory";
import type {
  ItemProps as ItemGroupSharedProps,
  ItemProps as ItemSeparatorSharedProps,
} from "@pisagor/props";
import { itemRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { Separator, type SeparatorProps } from "../separator";
import { ItemGroupContext } from "./item-group.context";

// #region Types
export interface ItemGroupProps
  extends ComponentProps<typeof ark.div>,
    ItemGroupSharedProps {}

export interface ItemSeparatorProps
  extends Omit<SeparatorProps, "recipe">,
    ItemSeparatorSharedProps {}
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
