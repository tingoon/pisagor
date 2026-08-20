import { ark } from "@ark-ui/react/factory";
import { separatorVariants } from "@pisagor/styles/ui/separator";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
type SeparatorRootProps = ComponentProps<typeof ark.div>;

export interface SeparatorProps extends SeparatorRootProps, WithTestId {
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
  testId,
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
      data-testid={testId}
      role="separator"
    />
  );
}
// #endregion
