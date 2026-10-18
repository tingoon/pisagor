import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { StatusProps as BaseStatusProps } from "@pisagor/props";
import { statusRecipe } from "@pisagor/recipes";
import type { RefAttributes } from "react";

// #region Types
export interface StatusProps
  extends
    HTMLArkProps<"span">,
    RefAttributes<HTMLSpanElement>,
    BaseStatusProps {}
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
