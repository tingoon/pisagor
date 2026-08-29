import { ark } from "@ark-ui/react/factory";
import { type KbdVariantProps, kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes/kbd";
import type { ComponentProps } from "react";

// #region Types
export type KbdProps = ComponentProps<typeof ark.kbd> & KbdVariantProps;

export type KbdGroupProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function KbdRoot({ variant = "default", className, ...rest }: KbdProps) {
  return (
    <ark.kbd
      {...rest}
      className={kbdRecipe({ className, variant })}
      data-part="root"
      data-scope="kbd"
    />
  );
}

export function KbdGroup({ className, ...rest }: KbdGroupProps) {
  return (
    <ark.div
      {...rest}
      className={kbdGroupRecipe({ className })}
      data-part="group"
      data-scope="kbd"
    />
  );
}
// #endregion

// #region Display Names
KbdRoot.displayName = "Kbd";
KbdGroup.displayName = "Kbd.Group";
// #endregion
