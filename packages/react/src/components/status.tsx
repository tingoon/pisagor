import type { StatusProps as BaseStatusProps } from "@pisagor/props";
import { statusRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

// #region Types
export interface StatusProps
  extends ComponentPropsWithRef<"span">, BaseStatusProps {}
// #endregion

// #region Component
export function Status({
  size,
  variant,
  recipe = statusRecipe,
  className,
  ...rest
}: StatusProps) {
  return (
    <span
      {...rest}
      className={recipe({ className, size, variant })}
      data-part="indicator"
      data-scope="status"
      data-size={size}
    />
  );
}
// #endregion
