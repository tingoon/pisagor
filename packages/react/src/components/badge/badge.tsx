import { ark } from "@ark-ui/react/factory";
import { type BadgeVariantProps, badgeRecipe } from "@pisagor/recipes/badge";
import type { ComponentProps } from "react";

// #region Types
export type BadgeVariant = BadgeVariantProps["variant"];

export type BadgeProps = ComponentProps<typeof ark.span> & BadgeVariantProps;
// #endregion

// #region Component
export function Badge({
  pill = false,
  size = "md",
  variant = "default",
  className,
  ...rest
}: BadgeProps) {
  return (
    <ark.span
      {...rest}
      className={badgeRecipe({ className, pill, size, variant })}
      data-part="root"
      data-scope="badge"
      data-size={size}
      data-variant={variant}
    />
  );
}
// #endregion
