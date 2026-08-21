import { ark } from "@ark-ui/react/factory";
import type { FormControlGroupShellVariantProps } from "@pisagor/styles/ui/form-control";
import {
  type InputGroupAddonVariantProps,
  type InputGroupButtonVariantProps,
  inputGroupAddonVariants,
  inputGroupButtonVariants,
  inputGroupTextVariants,
} from "@pisagor/styles/ui/input-group";
import type { ComponentProps, MouseEvent } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlGroupShellVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";

// #region Types
export interface InputGroupProps
  extends ComponentProps<typeof ark.div>,
    FormControlGroupShellVariantProps,
    WithTestId {
  /**
   * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
   */
  variant?: FormControlVariant;
}

export interface InputGroupAddonProps
  extends ComponentProps<typeof ark.div>,
    InputGroupAddonVariantProps {}

export interface InputGroupButtonProps
  extends Omit<ButtonProps, "size">,
    InputGroupButtonVariantProps {}

export interface InputGroupTextProps extends ComponentProps<typeof ark.span> {}
// #endregion

// #region Parts
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
      className={formControlGroupShellVariants({ className, size, ...shellArgs })}
      data-part="root"
      data-scope="input-group"
      data-size={size}
      data-testid={testId}
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
  className,
  variant = "ghost",
  size = "xs",
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
