import { ark } from "@ark-ui/react/factory";
import type { BadgeProps as BaseBadgeProps } from "@pisagor/props";
import { type BadgeVariantProps, badgeRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";

// #region Types
export type BadgeVariant = BadgeVariantProps["variant"];

export interface BadgeProps
  extends ComponentProps<typeof ark.span>,
    BaseBadgeProps {}
// #endregion

// #region Component
export function Badge({
  pill = false,
  size = "md",
  variant = "default",
  recipe = badgeRecipe,
  className,
  ...rest
}: BadgeProps) {
  return (
    <ark.span
      {...rest}
      className={recipe({ className, pill, size, variant })}
      data-part="root"
      data-scope="badge"
      data-size={size}
      data-variant={variant}
    />
  );
}
// #endregion
