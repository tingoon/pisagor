import { ark } from "@ark-ui/react/factory";
import {
  type ButtonVariantProps,
  buttonLoadingVariants,
  buttonVariants,
} from "@pisagor/recipes/button";
import type { ComponentProps } from "react";
import { Spinner } from "../spinner";

// #region Types
type ButtonRootProps = ComponentProps<typeof ark.button>;

export interface ButtonProps extends ButtonRootProps, ButtonVariantProps {
  /**
   * Whether to apply a click effect to the button.
   *
   * @defaultValue true
   */
  clickEffect?: boolean;
  /**
   * Whether to show a loading indicator.
   *
   * @defaultValue false
   */
  isLoading?: boolean;
}
// #endregion

// #region Part
export function Button({
  variant = "default",
  size = "md",
  clickEffect = true,
  pill = false,
  isLoading = false,
  className,
  children,
  type = "button",
  disabled,
  ...rest
}: ButtonProps) {
  const loading = buttonLoadingVariants();

  return (
    <ark.button
      {...rest}
      aria-busy={isLoading || undefined}
      className={buttonVariants({ className, clickEffect, pill, size, variant })}
      data-part="root"
      data-scope="button"
      data-size={size}
      data-state={isLoading ? "loading" : "idle"}
      data-variant={variant}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading ? (
        <>
          <span aria-hidden className={loading.hidden()}>
            {children}
          </span>
          <span className={loading.srOnly()}>{children}</span>
          <span className={loading.spinner()}>
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

// #region Display Names
Button.displayName = "Button";
// #endregion
