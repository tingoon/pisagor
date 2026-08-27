import { ark } from "@ark-ui/react/factory";
import { type KbdVariantProps, kbdGroupVariants, kbdVariants } from "@pisagor/recipes/kbd";
import type { ComponentProps } from "react";
// #region Types
export interface KbdProps extends ComponentProps<typeof ark.kbd>, KbdVariantProps {}

export interface KbdGroupProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Parts
export function KbdRoot({ variant = "default", className, ...rest }: KbdProps) {
  return (
    <ark.kbd
      {...rest}
      className={kbdVariants({ className, variant })}
      data-part="root"
      data-scope="kbd"
    />
  );
}

export function KbdGroup({ className, ...rest }: KbdGroupProps) {
  return (
    <ark.div
      {...rest}
      className={kbdGroupVariants({ className })}
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
