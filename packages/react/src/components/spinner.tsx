import { CircleNotchIcon } from "@phosphor-icons/react";
import type { SpinnerProps as BaseSpinnerProps } from "@pisagor/props";
import { spinnerRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { useMessage } from "./provider/context";

// #region Types
export interface SpinnerProps extends ComponentProps<"svg">, BaseSpinnerProps {}
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
      aria-label={useMessage("spinner.loading", ariaLabel)}
      className={recipe({ className })}
      data-part="root"
      data-scope="spinner"
      role="img"
    />
  );
}
// #endregion
