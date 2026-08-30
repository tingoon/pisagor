import { ark } from "@ark-ui/react/factory";
import { visuallyHiddenRecipe } from "@pisagor/recipes/visually-hidden";
import type { ComponentProps } from "react";

// #region Types
export type VisuallyHiddenProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Component
/**
 * Hides content visually while keeping it available to assistive technology.
 */
export function VisuallyHidden({ className, ...rest }: VisuallyHiddenProps) {
  return (
    <ark.span
      {...rest}
      className={visuallyHiddenRecipe({ className })}
      data-part="root"
      data-scope="visually-hidden"
    />
  );
}
// #endregion
