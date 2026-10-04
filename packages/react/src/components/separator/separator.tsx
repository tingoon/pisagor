import { ark } from "@ark-ui/react/factory";
import type { SeparatorProps as SeparatorSharedProps } from "@pisagor/props";
import { separatorRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface SeparatorProps
  extends ComponentProps<typeof ark.div>,
    SeparatorSharedProps {
  /**
   * The orientation of the separator.
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}
// #endregion

// #region Component
export function Separator({
  orientation = "horizontal",
  recipe = separatorRecipe,
  className,
  ...rest
}: SeparatorProps) {
  return (
    <ark.div
      {...rest}
      aria-orientation={orientation}
      className={recipe({ className })}
      data-orientation={orientation}
      data-part="root"
      data-scope="separator"
      role="separator"
    />
  );
}
// #endregion
