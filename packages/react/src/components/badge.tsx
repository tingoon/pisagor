import type { BadgeRootContract } from "@pisagor/contracts";
import { badgeRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

// #region Types
export interface BadgeProps
  extends ComponentPropsWithRef<"span">, BadgeRootContract {}
// #endregion

// #region Component
export function Badge({
  pill = false,
  size = "md",
  variant = "default",
  recipe = badgeRecipe,
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      {...rest}
      className={recipe({ className, pill, size, variant })}
      data-part="root"
      data-scope="badge"
      data-size={size}
      data-variant={variant}
    />
  );
}
// #endregion
