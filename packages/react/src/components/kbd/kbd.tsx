import { ark } from "@ark-ui/react/factory";
import type {
  KbdGroupProps as BaseKbdGroupProps,
  KbdProps as BaseKbdProps,
} from "@pisagor/props";
import { kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface KbdProps
  extends ComponentProps<typeof ark.kbd>,
    BaseKbdProps {}

export interface KbdGroupProps
  extends ComponentProps<typeof ark.div>,
    BaseKbdGroupProps {}
// #endregion

// #region Parts
export function KbdRoot({
  variant = "default",
  recipe = kbdRecipe,
  className,
  ...rest
}: KbdProps) {
  return (
    <ark.kbd
      {...rest}
      className={recipe({ className, variant })}
      data-part="root"
      data-scope="kbd"
    />
  );
}

export function KbdGroup({
  recipe = kbdGroupRecipe,
  className,
  ...rest
}: KbdGroupProps) {
  return (
    <ark.div
      {...rest}
      className={recipe({ className })}
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
