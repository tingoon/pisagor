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
  dataPart?: string;
  dataScope?: string;
}
// #endregion

// #region Part
export function Separator({
  orientation = "horizontal",
  className,
  dataPart = "root",
  dataScope = "separator",
  ...rest
}: SeparatorProps) {
  return (
    <ark.div
      {...rest}
      aria-orientation={orientation}
      className={separatorVariants({ className })}
      data-orientation={orientation}
      data-part={dataPart}
      data-scope={dataScope}
      role="separator"
    />
  );
}
// #endregion
