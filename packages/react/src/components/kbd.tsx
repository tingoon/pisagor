import type { KbdGroupRootContract, KbdRootContract } from "@pisagor/contracts";
import { kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

// #region Types
export interface KbdProps
  extends ComponentPropsWithRef<"kbd">, KbdRootContract {}

export interface KbdGroupProps
  extends ComponentPropsWithRef<"div">, KbdGroupRootContract {}
// #endregion

// #region Parts
export function KbdRoot({
  size = "md",
  variant = "default",
  recipe = kbdRecipe,
  className,
  ...rest
}: KbdProps) {
  return (
    <kbd
      {...rest}
      className={recipe({ className, size, variant })}
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
    <div
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

export const Kbd = Object.assign(KbdRoot, {
  Group: KbdGroup,
});
