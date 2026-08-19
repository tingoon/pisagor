import { ark } from "@ark-ui/react/factory";
import {
  inputGroupAddonVariants,
  inputGroupButtonVariants,
  inputGroupTextVariants,
} from "@pisagor/styles/ui/input-group";
import { cn } from "@pisagor/utils";
import type { ComponentProps, MouseEvent } from "react";
import type { VariantProps } from "tailwind-variants";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlGroupShellVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";

// #region Variants

// #endregion

// #region Types
export interface InputGroupProps
  extends ComponentProps<typeof ark.div>,
    VariantProps<typeof formControlGroupShellVariants>,
    WithTestId {
  /**
   * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
   */
  variant?: FormControlVariant;
}

export interface InputGroupAddonProps
  extends ComponentProps<typeof ark.div>,
    VariantProps<typeof inputGroupAddonVariants> {}

export interface InputGroupButtonProps
  extends Omit<ButtonProps, "size">,
    VariantProps<typeof inputGroupButtonVariants> {}
// #endregion

// #region Components
export function InputGroupRoot({
  size = "md",
  variant: variantProp,
  className,
  testId,
  ...rest
}: InputGroupProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);

  return (
    <ark.div
      {...rest}
      {...controlProps}
      className={cn(formControlGroupShellVariants({ size, ...shellArgs }), className)}
      data-part="root"
      data-scope="input-group"
      data-size={size}
      data-testid={testId}
      role="group"
    />
  );
}
InputGroupRoot.displayName = "InputGroup";

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
      className={cn(inputGroupAddonVariants({ align }), className)}
      data-align={align}
      data-part="addon"
      data-scope="input-group"
      onClick={handleClick}
      role="group"
    />
  );
}
InputGroupAddon.displayName = "InputGroup.Addon";

export function InputGroupButton({
  className,
  variant = "ghost",
  size = "xs",
  ...rest
}: InputGroupButtonProps) {
  return (
    <Button
      {...rest}
      className={cn(inputGroupButtonVariants({ size }), className)}
      data-part="button"
      data-scope="input-group"
      data-size={size}
      variant={variant}
    />
  );
}
InputGroupButton.displayName = "InputGroup.Button";

export function InputGroupText({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      className={cn(inputGroupTextVariants(), className)}
      data-part="text"
      data-scope="input-group"
    />
  );
}
InputGroupText.displayName = "InputGroup.Text";

// #endregion
