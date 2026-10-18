import type { VisuallyHiddenProps as BaseVisuallyHiddenProps } from "@pisagor/props";
import { visuallyHiddenRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

// #region Types
export interface VisuallyHiddenProps
  extends ComponentPropsWithRef<"span">, BaseVisuallyHiddenProps {}
// #endregion

// #region Component
/** Hides content visually while keeping it available to assistive technology. */
export function VisuallyHidden({
  recipe = visuallyHiddenRecipe,
  className,
  ...rest
}: VisuallyHiddenProps) {
  return (
    <span
      {...rest}
      className={recipe({ className })}
      data-part="root"
      data-scope="visually-hidden"
    />
  );
}
// #endregion
