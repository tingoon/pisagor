import { CircleNotchIcon } from "@phosphor-icons/react";
import { spinnerRecipe } from "@pisagor/recipes/spinner";
import type { ComponentProps } from "react";

// #region Types
export interface SpinnerProps extends ComponentProps<"svg"> {
  /**
   * Style recipe. Defaults to `spinnerRecipe` from `@pisagor/recipes/spinner`.
   *
   * @defaultValue spinnerRecipe
   */
  recipe?: typeof spinnerRecipe;
}
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
