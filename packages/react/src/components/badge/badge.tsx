import { ark } from "@ark-ui/react/factory";
import { type BadgeVariantProps, badgeVariants } from "@pisagor/styles/ui/badge";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types

export type BadgeVariant = BadgeVariantProps["variant"];

type BadgeRootProps = ComponentProps<typeof ark.span>;

export interface BadgeProps extends BadgeRootProps, BadgeVariantProps, WithTestId {}
// #endregion

// #region Part
export function Badge({
  variant = "default",
  size = "md",
  pill = false,
  className,
  testId,
  ...rest
}: BadgeProps) {
  return (
    <ark.span
      {...rest}
      className={cn(badgeVariants({ pill, size, variant }), className)}
      data-part="root"
      data-scope="badge"
      data-size={size}
      data-testid={testId}
      data-variant={variant}
    />
  );
}
// #endregion
