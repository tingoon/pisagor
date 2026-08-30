import {
  type CheckboxIndicatorProps,
  Checkbox as CheckboxPrimitive,
  type CheckboxGroupProps as CheckboxPrimitiveGroupProps,
  type CheckboxRootProps,
} from "@ark-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "@phosphor-icons/react";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes/checkbox";
import { formControlToggleRecipe } from "@pisagor/recipes/form-control";

import { cn } from "../../internal/utils";

// #region Types
type FormControlVariant = "primary" | "secondary";

export type CheckboxGroupProps = Omit<CheckboxPrimitiveGroupProps, "onValueChange"> & {
  onValueChange?: (value: string[]) => void;
};

export interface CheckboxProps extends CheckboxRootProps {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
}

// #endregion

// #region Parts
export function CheckboxGroup({ onValueChange, className, ...rest }: CheckboxGroupProps) {
  return (
    <CheckboxPrimitive.Group
      {...rest}
      className={checkboxGroupRecipe({ className })}
      onValueChange={onValueChange}
    />
  );
}

export function CheckboxRoot({
  variant: variantProp,
  tabIndex,
  onCheckedChange,
  onValueChange,
  className,
  ...rest
}: CheckboxProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };
  const slots = checkboxRecipe();

  const handleCheckedChange =
    onCheckedChange || onValueChange
      ? (details: Parameters<NonNullable<CheckboxProps["onCheckedChange"]>>[0]) => {
          onCheckedChange?.(details);
          onValueChange?.(details.checked === true);
        }
      : undefined;

  return (
    <CheckboxPrimitive.Root
      {...rest}
      {...controlProps}
      className={cn(
        formControlToggleRecipe({ size: "md", ...shellArgs }),
        slots.base({ className }),
      )}
      onCheckedChange={handleCheckedChange}
      role="checkbox"
    >
      <CheckboxPrimitive.Control>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>

        <CheckboxIndicator indeterminate>
          <MinusIcon />
        </CheckboxIndicator>
      </CheckboxPrimitive.Control>

      <CheckboxPrimitive.HiddenInput tabIndex={tabIndex} />
    </CheckboxPrimitive.Root>
  );
}

function CheckboxIndicator({ className, ...rest }: CheckboxIndicatorProps) {
  const slots = checkboxRecipe();

  return <CheckboxPrimitive.Indicator {...rest} className={slots.indicator({ className })} />;
}
// #endregion

// #region Display Names
CheckboxGroup.displayName = "Checkbox.Group";
CheckboxRoot.displayName = "Checkbox";
CheckboxIndicator.displayName = "Checkbox.Indicator";
// #endregion
