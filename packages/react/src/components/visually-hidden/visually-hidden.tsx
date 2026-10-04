import { ark } from "@ark-ui/react/factory";
import type { VisuallyHiddenProps as VisuallyHiddenSharedProps } from "@pisagor/props";
import { visuallyHiddenRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface VisuallyHiddenProps
  extends ComponentProps<typeof ark.span>,
    VisuallyHiddenSharedProps {}
// #endregion

// #region Component
/**
 * Hides content visually while keeping it available to assistive technology.
 */
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
