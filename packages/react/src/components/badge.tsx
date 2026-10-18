import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { BadgeProps as BaseBadgeProps } from "@pisagor/props";
import { type BadgeVariantProps, badgeRecipe } from "@pisagor/recipes";

// #region Types
export type BadgeVariant = BadgeVariantProps["variant"];

export interface BadgeProps extends HTMLArkProps<"span">, BaseBadgeProps {}
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
