import { CircleNotchIcon } from "@phosphor-icons/react";
import { spinnerVariants } from "@pisagor/recipes/spinner";
import type { ComponentProps } from "react";
// #region Types
export interface SpinnerProps extends ComponentProps<"svg"> {}
// #endregion

// #region Part
export function Spinner({ "aria-label": ariaLabel, className, ...rest }: SpinnerProps) {
  return (
    <CircleNotchIcon
      {...rest}
      aria-label={ariaLabel ?? "Loading"}
      className={spinnerVariants({ className })}
      data-part="root"
      data-scope="spinner"
      role="status"
    />
  );
}
// #endregion
