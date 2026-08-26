import { ark } from "@ark-ui/react/factory";
import { type ItemVariantProps, itemVariants } from "@pisagor/styles/ui/item";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { Separator, type SeparatorProps } from "../separator";
import { ItemGroupContext } from "./item-group.context";

// #region Types
export interface ItemGroupProps extends ComponentProps<typeof ark.div>, ItemVariantProps {}
// #endregion

// #region Parts
export function ItemGroup({ className, children, variant = "default", ...rest }: ItemGroupProps) {
  const slots = useMemo(() => itemVariants(), []);

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
  const slots = useMemo(() => itemVariants(), []);

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
// #endregion

// #region Display Names
ItemGroup.displayName = "Item.Group";
ItemSeparator.displayName = "Item.Separator";
// #endregion
