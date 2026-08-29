import { ark } from "@ark-ui/react/factory";
import { separatorRecipe } from "@pisagor/recipes/separator";
import type { ComponentProps } from "react";

// #region Types
type SeparatorRootProps = ComponentProps<typeof ark.div>;

export interface SeparatorProps extends SeparatorRootProps {
  /**
   * The orientation of the separator.
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}
// #endregion

// #region Part
export function Separator({ orientation = "horizontal", className, ...rest }: SeparatorProps) {
  return (
    <ark.div
      {...rest}
      aria-orientation={orientation}
      className={separatorRecipe({ className })}
      data-orientation={orientation}
      data-part="root"
      data-scope="separator"
      role="separator"
    />
  );
}
// #endregion

// #region Display Names
Separator.displayName = "Separator";
// #endregion
