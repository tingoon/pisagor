import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { VisuallyHiddenProps as BaseVisuallyHiddenProps } from "@pisagor/props";
import { visuallyHiddenRecipe } from "@pisagor/recipes";

// #region Types
export interface VisuallyHiddenProps
  extends HTMLArkProps<"span">, BaseVisuallyHiddenProps {}
// #endregion

// #region Component
/** Hides content visually while keeping it available to assistive technology. */
export function VisuallyHidden({
  recipe = visuallyHiddenRecipe,
  className,
  ...rest
}: VisuallyHiddenProps) {
  return (
    <ark.span
      {...rest}
      className={recipe({ className })}
      data-part="root"
      data-scope="visually-hidden"
    />
  );
}
// #endregion
