import { ark } from "@ark-ui/react/factory";
import { type ButtonVariantProps, buttonRecipe } from "@pisagor/recipes/button";
import type { ComponentProps } from "react";
import { Spinner } from "../spinner";

// #region Types
export interface ButtonProps extends ComponentProps<typeof ark.button>, ButtonVariantProps {}
// #endregion

// #region Component
export function Button({
  clickEffect = true,
  loading = false,
  pill = false,
  size = "md",
  variant = "default",
  disabled,
  type = "button",
  children,
  className,
  ...rest
}: ButtonProps) {
  const slots = buttonRecipe({ clickEffect, loading, pill, size, variant });

  return (
    <ark.button
      {...rest}
      aria-busy={loading || undefined}
      className={slots.base({ className })}
      data-part="root"
      data-scope="button"
      data-size={size}
      data-state={loading ? "loading" : "idle"}
      data-variant={variant}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? (
        <>
          <span aria-hidden className={slots.hidden()}>
            {children}
          </span>
          <span className={slots.srOnly()}>{children}</span>
          <span className={slots.spinner()}>
            <Spinner aria-hidden />
          </span>
        </>
      ) : (
        children
      )}
    </ark.button>
  );
}
// #endregion
