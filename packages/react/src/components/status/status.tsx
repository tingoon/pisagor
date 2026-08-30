import { ark } from "@ark-ui/react/factory";
import { type StatusVariantProps, statusRecipe } from "@pisagor/recipes/status";
import type { ComponentProps } from "react";

// #region Types
export type StatusProps = ComponentProps<typeof ark.span> & StatusVariantProps;
// #endregion

// #region Component
export function Status({ size, variant, className, ...rest }: StatusProps) {
  return (
    <ark.span
      {...rest}
      className={statusRecipe({ className, size, variant })}
      data-part="indicator"
      data-scope="status"
      data-size={size}
    />
  );
}
// #endregion
