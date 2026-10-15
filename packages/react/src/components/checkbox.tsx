import {
  type CheckboxControlProps,
  type CheckboxIndicatorProps,
  type CheckboxLabelProps,
  Checkbox as CheckboxPrimitive,
  type CheckboxGroupProps as CheckboxPrimitiveGroupProps,
  type CheckboxRootProps,
} from "@ark-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "@phosphor-icons/react";
import type {
  CheckboxGroupProps as BaseCheckboxGroupProps,
  CheckboxProps as BaseCheckboxProps,
} from "@pisagor/props";
import {
  checkboxGroupRecipe,
  checkboxRecipe,
  formControlToggleRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { FormControlVariant, SizeScaleProps } from "../internal/types";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Types

export interface CheckboxGroupProps
  extends Omit<CheckboxPrimitiveGroupProps, "onValueChange">,
    BaseCheckboxGroupProps {
  onValueChange?: (value: string[]) => void;
}

export interface CheckboxProps
  extends CheckboxRootProps,
    BaseCheckboxProps,
    SizeScaleProps {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
}

type CheckboxIndicatorPartProps = CheckboxIndicatorProps & {
  recipe?: typeof checkboxRecipe;
};

// #endregion

// #region Parts
export function CheckboxGroup({
  onValueChange,
  recipe = checkboxGroupRecipe,
  className,
  ...rest
}: CheckboxGroupProps) {
  return (
    <CheckboxPrimitive.Group
      {...rest}
      className={recipe({ className })}
      onValueChange={onValueChange}
    />
  );
}

export function CheckboxRoot({
  size = "md",
  variant: variantProp,
  tabIndex,
  onCheckedChange,
  recipe = checkboxRecipe,
  className,
  ...rest
}: CheckboxProps) {
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };
  const slots = recipe();

  return (
    <CheckboxPrimitive.Root
      {...rest}
      {...controlProps}
      className={cn(
        formControlToggleRecipe({ size, ...shellArgs }),
        slots.base({ className }),
      )}
      onCheckedChange={onCheckedChange}
    >
      <CheckboxPrimitive.Control>
        <CheckboxIndicator recipe={recipe}>
          <CheckIcon />
        </CheckboxIndicator>

        <CheckboxIndicator indeterminate recipe={recipe}>
          <MinusIcon />
        </CheckboxIndicator>
      </CheckboxPrimitive.Control>

      <CheckboxPrimitive.HiddenInput tabIndex={tabIndex} />
    </CheckboxPrimitive.Root>
  );
}

function CheckboxIndicator({
  className,
  recipe = checkboxRecipe,
  ...rest
}: CheckboxIndicatorPartProps) {
  const slots = recipe();

  return (
    <CheckboxPrimitive.Indicator
      {...rest}
      className={slots.indicator({ className })}
    />
  );
}

/** Compound root: lays out `Checkbox.Control` and `Checkbox.Label`. */
export function CheckboxCompoundRoot({
  recipe = checkboxRecipe,
  className,
  ...rest
}: CheckboxRootProps & { recipe?: typeof checkboxRecipe }) {
  return (
    <CheckboxPrimitive.Root
      {...rest}
      className={recipe().root({ className })}
    />
  );
}

/** The styled box; renders check / minus indicators when empty. */
export function CheckboxControl({
  size = "md",
  variant: variantProp,
  recipe = checkboxRecipe,
  children,
  className,
  ...rest
}: CheckboxControlProps &
  SizeScaleProps & {
    recipe?: typeof checkboxRecipe;
    variant?: FormControlVariant;
  }) {
  const surfaceVariant = useFormControlSurface();
  const variant = variantProp ?? "primary";
  const slots = recipe();

  return (
    <CheckboxPrimitive.Control
      {...rest}
      className={cn(
        formControlToggleRecipe({ size, surfaceVariant, variant }),
        slots.base(),
        slots.control({ className }),
      )}
      data-variant={variant}
    >
      {children ?? (
        <>
          <CheckboxIndicator recipe={recipe}>
            <CheckIcon />
          </CheckboxIndicator>
          <CheckboxIndicator indeterminate recipe={recipe}>
            <MinusIcon />
          </CheckboxIndicator>
        </>
      )}
    </CheckboxPrimitive.Control>
  );
}

export function CheckboxLabel({
  recipe = checkboxRecipe,
  className,
  ...rest
}: CheckboxLabelProps & { recipe?: typeof checkboxRecipe }) {
  return (
    <CheckboxPrimitive.Label
      {...rest}
      className={recipe().label({ className })}
    />
  );
}
// #endregion

// #region Display Names
CheckboxCompoundRoot.displayName = "Checkbox.Root";
CheckboxControl.displayName = "Checkbox.Control";
CheckboxLabel.displayName = "Checkbox.Label";
CheckboxGroup.displayName = "Checkbox.Group";
CheckboxRoot.displayName = "Checkbox";
CheckboxIndicator.displayName = "Checkbox.Indicator";

// #endregion

export type {
  CheckboxCheckedState,
  CheckboxRootProps,
} from "@ark-ui/react/checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Control: CheckboxControl,
  Group: CheckboxGroup,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  Root: CheckboxCompoundRoot,
});
