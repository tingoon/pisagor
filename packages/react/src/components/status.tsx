import type { StatusRootContract } from "@pisagor/contracts";
import { statusRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export type StatusProps = ComponentProps<"span"> & StatusRootContract;
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
