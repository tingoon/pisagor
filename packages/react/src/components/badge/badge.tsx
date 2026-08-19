import { ark } from "@ark-ui/react/factory";
import { badgeVariants } from "@pisagor/styles/ui/badge";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export type BadgeVariant = BadgeVariantProps["variant"];

type BadgeRootProps = ComponentProps<typeof ark.span>;

export interface BadgeProps extends BadgeRootProps, BadgeVariantProps, WithTestId {}
// #endregion

// #region Component
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
