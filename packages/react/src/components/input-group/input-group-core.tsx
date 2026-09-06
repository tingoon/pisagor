import { ark } from "@ark-ui/react/factory";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import {
  type InputGroupAddonVariantProps,
  type InputGroupButtonVariantProps,
  inputGroupAddonRecipe,
  inputGroupButtonRecipe,
  inputGroupTextRecipe,
} from "@pisagor/recipes/input-group";
import type { ComponentProps, MouseEvent } from "react";
import { Button, type ButtonProps } from "../button";

// #region Types
type FormControlVariant = "primary" | "secondary";

export interface InputGroupProps
  extends ComponentProps<typeof ark.div>,
    FormControlGroupShellVariantProps {}

export interface InputGroupAddonProps
  extends ComponentProps<typeof ark.div>,
    InputGroupAddonVariantProps {
  /**
   * Style recipe. Defaults to `inputGroupAddonRecipe` from `@pisagor/recipes/input-group`.
   *
   * @defaultValue inputGroupAddonRecipe
   */
  recipe?: typeof inputGroupAddonRecipe;
}

export interface InputGroupButtonProps
  extends Omit<ButtonProps, "size" | "recipe">,
    InputGroupButtonVariantProps {
  /**
   * Style recipe. Defaults to `inputGroupButtonRecipe` from `@pisagor/recipes/input-group`.
   *
   * @defaultValue inputGroupButtonRecipe
   */
  recipe?: typeof inputGroupButtonRecipe;
}

export interface InputGroupTextProps extends ComponentProps<typeof ark.span> {
  /**
   * Style recipe. Defaults to `inputGroupTextRecipe` from `@pisagor/recipes/input-group`.
   *
   * @defaultValue inputGroupTextRecipe
   */
  recipe?: typeof inputGroupTextRecipe;
}
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
      className={formControlGroupShellRecipe({ className, size, ...shellArgs })}
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
