import { ark } from "@ark-ui/react/factory";
import { type ItemVariantProps, itemVariants } from "@pisagor/recipes/item";
import type { ComponentProps } from "react";
import { Separator, type SeparatorProps } from "../separator";
import { ItemGroupContext } from "./item-group.context";

// #region Types
export type ItemGroupProps = ComponentProps<typeof ark.div> & ItemVariantProps;
// #endregion

// #region Parts
export function ItemGroup({ variant = "default", children, className, ...rest }: ItemGroupProps) {
  const slots = itemVariants();

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

export function ItemSeparator({ className, ...rest }: SeparatorProps) {
  const slots = itemVariants();

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
