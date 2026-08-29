import { CircleNotchIcon } from "@phosphor-icons/react";
import { spinnerRecipe } from "@pisagor/recipes/spinner";
import type { ComponentProps } from "react";

// #region Types
export type SpinnerProps = ComponentProps<"svg">;
// #endregion

// #region Part
export function Spinner({ "aria-label": ariaLabel, className, ...rest }: SpinnerProps) {
  return (
    <CircleNotchIcon
      {...rest}
      aria-label={ariaLabel ?? "Loading"}
      className={spinnerRecipe({ className })}
      data-part="root"
      data-scope="spinner"
      role="status"
    />
  );
}
// #endregion

// #region Display Names
Spinner.displayName = "Spinner";
// #endregion
