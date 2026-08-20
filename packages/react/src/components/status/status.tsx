import { ark } from "@ark-ui/react/factory";
import { type StatusVariantProps, statusVariants } from "@pisagor/styles/ui/status";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types

type StatusRootProps = ComponentProps<typeof ark.span>;

interface StatusProps extends StatusRootProps, StatusVariantProps, WithTestId {}
// #endregion

// #region Part
export function Status({ variant, size, className, testId, ...rest }: StatusProps) {
  return (
    <ark.span
      {...rest}
      className={cn(statusVariants({ size, variant }), className)}
      data-part="indicator"
      data-scope="status"
      data-size={size}
      data-testid={testId}
    />
  );
}
// #endregion
