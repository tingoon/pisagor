import { CircleNotchIcon } from "@phosphor-icons/react";
import { spinnerVariants } from "@pisagor/styles/ui/spinner";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface SpinnerProps extends ComponentProps<"svg">, WithTestId {}
// #endregion

// #region Component
export function Spinner({ "aria-label": ariaLabel, className, testId, ...rest }: SpinnerProps) {
  return (
    <CircleNotchIcon
      {...rest}
      aria-label={ariaLabel ?? "Loading"}
      className={cn(spinnerVariants(), className)}
      data-part="root"
      data-scope="spinner"
      data-testid={testId}
      role="status"
    />
  );
}
// #endregion
