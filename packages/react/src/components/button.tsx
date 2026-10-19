import { ark } from "@ark-ui/react";
import type { ButtonRootContract } from "@pisagor/contracts";
import { buttonRecipe } from "@pisagor/recipes";
import type { HTMLArkPropsWithRef } from "../internal";
import { Spinner } from "./spinner";

// #region Types
export interface ButtonProps
  extends HTMLArkPropsWithRef<"button">, ButtonRootContract {}
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
  recipe = buttonRecipe,
  className,
  ...rest
}: ButtonProps) {
  const slots = recipe({ clickEffect, loading, pill, size, variant });

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
