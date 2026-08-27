import { ark } from "@ark-ui/react/factory";
import { separatorVariants } from "@pisagor/recipes/separator";
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
      data-part="root"
      data-scope="separator"
      {...rest}
      aria-orientation={orientation}
      className={separatorVariants({ className })}
      data-orientation={orientation}
      role="separator"
    />
  );
}
// #endregion
