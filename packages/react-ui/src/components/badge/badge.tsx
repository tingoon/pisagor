import { ark } from "@ark-ui/react/factory";
import { type BadgeVariantProps, badgeVariants } from "@pisagor/recipes/badge";
import type { ComponentProps } from "react";
// #region Types
export type BadgeVariant = BadgeVariantProps["variant"];

type BadgeRootProps = ComponentProps<typeof ark.span>;

export interface BadgeProps extends BadgeRootProps, BadgeVariantProps {}
// #endregion

// #region Part
export function Badge({
  variant = "default",
  size = "md",
  pill = false,
  className,
  ...rest
}: BadgeProps) {
  return (
    <ark.span
      {...rest}
      className={badgeVariants({ className, pill, size, variant })}
      data-part="root"
      data-scope="badge"
      data-size={size}
      data-variant={variant}
    />
  );
}
// #endregion
