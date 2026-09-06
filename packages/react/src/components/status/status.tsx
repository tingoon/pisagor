import { ark } from "@ark-ui/react/factory";
import { type StatusVariantProps, statusRecipe } from "@pisagor/recipes/status";
import type { ComponentProps } from "react";

// #region Types
export interface StatusProps extends ComponentProps<typeof ark.span>, StatusVariantProps {
  /**
   * Style recipe. Defaults to `statusRecipe` from `@pisagor/recipes/status`.
   *
   * @defaultValue statusRecipe
   */
  recipe?: typeof statusRecipe;
}
// #endregion

// #region Component
export function Status({ size, variant, recipe = statusRecipe, className, ...rest }: StatusProps) {
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
