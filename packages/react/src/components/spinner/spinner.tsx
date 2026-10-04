import { CircleNotchIcon } from "@phosphor-icons/react";
import type { SpinnerProps as SpinnerSharedProps } from "@pisagor/props";
import { spinnerRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export interface SpinnerProps
  extends ComponentProps<"svg">,
    SpinnerSharedProps {}
// #endregion

// #region Component
export function Spinner({
  "aria-label": ariaLabel,
  recipe = spinnerRecipe,
  className,
  ...rest
}: SpinnerProps) {
  return (
    <CircleNotchIcon
      {...rest}
      aria-label={ariaLabel ?? "Loading"}
      className={recipe({ className })}
      data-part="root"
      data-scope="spinner"
      role="status"
    />
  );
}
// #endregion
