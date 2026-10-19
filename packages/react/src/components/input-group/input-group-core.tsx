import type {
  InputGroupAddonRootContract,
  InputGroupButtonRootContract,
  InputGroupTextRootContract,
} from "@pisagor/contracts";
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
import type { ComponentPropsWithRef, MouseEvent } from "react";
import type { FormControlVariant } from "../../internal";
import { Button, type ButtonProps } from "../button";
import { useFormControlSurface } from "../surface/use-form-control-surface";

// #region Types

export interface InputGroupProps
  extends ComponentPropsWithRef<"div">, FormControlGroupShellVariantProps {}

export interface InputGroupAddonProps
  extends ComponentPropsWithRef<"div">, InputGroupAddonRootContract {}

export interface InputGroupButtonProps
  extends
    Omit<ButtonProps, "size" | "recipe">,
    InputGroupButtonVariantProps,
    InputGroupButtonRootContract {}

export interface InputGroupTextProps
  extends ComponentPropsWithRef<"span">, InputGroupTextRootContract {}
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
    <div
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
    rest.onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }
    if ((event.target as HTMLElement).closest("button")) {
      return;
    }
    event.currentTarget.parentElement
      ?.querySelector<HTMLElement>("input, textarea")
      ?.focus();
  };

  return (
    <div
      {...rest}
      className={recipe({ align, className })}
      data-align={align}
      data-part="addon"
      data-scope="input-group"
      onClick={handleClick}
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
    <span
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
