import { CircleNotchIcon } from "@phosphor-icons/react";
import type { SpinnerRootContract } from "@pisagor/props";
import { spinnerRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { useLocale } from "./provider/context";

// #region Types
export interface SpinnerProps
  extends ComponentProps<"svg">, SpinnerRootContract {}
// #endregion

// #region Component
export function Spinner({
  "aria-label": ariaLabel,
  recipe = spinnerRecipe,
  className,
  ...rest
}: SpinnerProps) {
  const { m } = useLocale();

  return (
    <CircleNotchIcon
      {...rest}
      aria-label={m("spinner.loading", ariaLabel)}
      className={recipe({ className })}
      data-part="root"
      data-scope="spinner"
      role="img"
    />
  );
}
// #endregion
