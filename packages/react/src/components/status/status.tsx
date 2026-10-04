import { ark } from "@ark-ui/react/factory";
import type { StatusProps as StatusSharedProps } from "@pisagor/props";
import { statusRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface StatusProps
  extends ComponentProps<typeof ark.span>,
    StatusSharedProps {}
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
    <ark.span
      {...rest}
      className={recipe({ className, size, variant })}
      data-part="indicator"
      data-scope="status"
      data-size={size}
    />
  );
}
// #endregion
