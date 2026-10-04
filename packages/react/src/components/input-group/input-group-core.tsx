import { ark } from "@ark-ui/react/factory";
import type {
  InputGroupAddonProps as InputGroupAddonSharedProps,
  InputGroupButtonProps as InputGroupButtonSharedProps,
  InputGroupTextProps as InputGroupTextSharedProps,
} from "@pisagor/props";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
  type InputGroupButtonVariantProps,
  inputGroupAddonRecipe,
  inputGroupButtonRecipe,
  inputGroupRootRecipe,
  inputGroupTextRecipe,
} from "@pisagor/recipes";

import { cn } from "@pisagor/utils";
import type { ComponentProps, MouseEvent } from "react";
import { Button, type ButtonProps } from "../button";
import { useFormControlSurface } from "../surface/use-form-control-surface";

// #region Types
type FormControlVariant = "primary" | "secondary";

export interface InputGroupProps
  extends ComponentProps<typeof ark.div>,
    FormControlGroupShellVariantProps {}

export interface InputGroupAddonProps
  extends ComponentProps<typeof ark.div>,
    InputGroupAddonSharedProps {}

export interface InputGroupButtonProps
  extends Omit<ButtonProps, "size" | "recipe">,
    InputGroupButtonVariantProps,
    InputGroupButtonSharedProps {}

export interface InputGroupTextProps
  extends ComponentProps<typeof ark.span>,
    InputGroupTextSharedProps {}
// #endregion

// #region Parts
export function InputGroupRoot({
  size = "md",
  variant: variantProp,
  className,
  ...rest
}: InputGroupProps) {
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };

  return (
    <ark.div
      {...rest}
      {...controlProps}
      className={formControlGroupShellRecipe({
        className: cn(inputGroupRootRecipe(), className),
        size,
        ...shellArgs,
      })}
      data-part="root"
      data-scope="input-group"
      data-size={size}
      role="group"
    />
  );
}

export function InputGroupAddon({
  align = "inline-start",
  recipe = inputGroupAddonRecipe,
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
      className={recipe({ align, className })}
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
  recipe = inputGroupButtonRecipe,
  className,
  ...rest
}: InputGroupButtonProps) {
  return (
    <Button
      {...rest}
      className={recipe({ className, size })}
      data-part="button"
      data-scope="input-group"
      data-size={size}
      variant={variant}
    />
  );
}

export function InputGroupText({
  recipe = inputGroupTextRecipe,
  className,
  ...rest
}: InputGroupTextProps) {
  return (
    <ark.span
      {...rest}
      className={recipe({ className })}
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
