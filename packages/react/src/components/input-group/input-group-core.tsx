import { ark } from "@ark-ui/react/factory";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellVariants,
} from "@pisagor/recipes/form-control";
import {
  type InputGroupAddonVariantProps,
  type InputGroupButtonVariantProps,
  inputGroupAddonVariants,
  inputGroupButtonVariants,
  inputGroupTextVariants,
} from "@pisagor/recipes/input-group";
import type { ComponentProps, MouseEvent } from "react";
import { Button, type ButtonProps } from "../button";

// #region Types
type FormControlVariant = "primary" | "secondary";

export interface InputGroupProps
  extends ComponentProps<typeof ark.div>,
    FormControlGroupShellVariantProps {
  /**
   * Visual shell variant. Defaults to `primary`.
   */
  variant?: FormControlVariant;
}

export interface InputGroupAddonProps
  extends ComponentProps<typeof ark.div>,
    InputGroupAddonVariantProps {}

export type InputGroupButtonProps = Omit<ButtonProps, "size"> & InputGroupButtonVariantProps;

export type InputGroupTextProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
export function InputGroupRoot({
  size = "md",
  variant: variantProp,
  className,
  ...rest
}: InputGroupProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };

  return (
    <ark.div
      {...rest}
      {...controlProps}
      className={formControlGroupShellVariants({ className, size, ...shellArgs })}
      data-part="root"
      data-scope="input-group"
      data-size={size}
      role="group"
    />
  );
}

export function InputGroupAddon({
  align = "inline-start",
  className,
  ...rest
}: InputGroupAddonProps) {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) {
      return;
    }
    event.currentTarget.parentElement?.querySelector("input")?.focus();
  };

  return (
    <ark.div
      {...rest}
      className={inputGroupAddonVariants({ align, className })}
      data-align={align}
      data-part="addon"
      data-scope="input-group"
      onClick={handleClick}
      role="group"
    />
  );
}

export function InputGroupButton({
  size = "xs",
  variant = "ghost",
  className,
  ...rest
}: InputGroupButtonProps) {
  return (
    <Button
      {...rest}
      className={inputGroupButtonVariants({ className, size })}
      data-part="button"
      data-scope="input-group"
      data-size={size}
      variant={variant}
    />
  );
}

export function InputGroupText({ className, ...rest }: InputGroupTextProps) {
  return (
    <ark.span
      {...rest}
      className={inputGroupTextVariants({ className })}
      data-part="text"
      data-scope="input-group"
    />
  );
}
// #endregion

// #region Display Names
InputGroupRoot.displayName = "InputGroup";
InputGroupAddon.displayName = "InputGroup.Addon";
InputGroupButton.displayName = "InputGroup.Button";
InputGroupText.displayName = "InputGroup.Text";
// #endregion
