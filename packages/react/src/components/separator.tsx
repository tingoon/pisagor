import type { SeparatorRootContract } from "@pisagor/contracts";
import { separatorRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

// #region Types
export interface SeparatorProps
  extends ComponentPropsWithRef<"div">, SeparatorRootContract {
  /**
   * The orientation of the separator.
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Purely visual separator: hidden from assistive tech (`role="none"`).
   *
   * @defaultValue false
   */
  decorative?: boolean;
}
// #endregion

// #region Component
export function Separator({
  orientation = "horizontal",
  decorative = false,
  recipe = separatorRecipe,
  className,
  ...rest
}: SeparatorProps) {
  return (
    <div
      {...rest}
      aria-orientation={decorative ? undefined : orientation}
      className={recipe({ className })}
      data-orientation={orientation}
      data-part="root"
      data-scope="separator"
      role={decorative ? "none" : "separator"}
    />
  );
}
// #endregion
