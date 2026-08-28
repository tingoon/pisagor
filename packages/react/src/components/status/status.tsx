import { ark } from "@ark-ui/react/factory";
import { type StatusVariantProps, statusVariants } from "@pisagor/recipes/status";
import type { ComponentProps } from "react";

// #region Types
type StatusRootProps = ComponentProps<typeof ark.span>;

export type StatusProps = StatusRootProps & StatusVariantProps;
// #endregion

// #region Part
export function Status({ size, variant, className, ...rest }: StatusProps) {
  return (
    <ark.span
      {...rest}
      className={statusVariants({ className, size, variant })}
      data-part="indicator"
      data-scope="status"
      data-size={size}
    />
  );
}
// #endregion

// #region Display Names
Status.displayName = "Status";
// #endregion
