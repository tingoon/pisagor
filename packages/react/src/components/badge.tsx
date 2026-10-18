import type { BadgeProps as BaseBadgeProps } from "@pisagor/props";
import { type BadgeVariantProps, badgeRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";

// #region Types
export type BadgeVariant = BadgeVariantProps["variant"];

export interface BadgeProps
  extends ComponentPropsWithRef<"span">, BaseBadgeProps {}
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
    <span
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
