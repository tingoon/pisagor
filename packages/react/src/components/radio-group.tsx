import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/react";
import type {
  RadioGroupItemProps as RadioGroupItemPrimitiveProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
  RadioGroupRootProps as RadioGroupRootPrimitiveProps,
} from "@ark-ui/react";
import type {
  RadioGroupItemRootContract,
  RadioGroupPresetItem as BaseRadioGroupPresetItem,
  RadioGroupRootContract,
  RadioGroupContract,
} from "@pisagor/contracts";
import {
  fieldRecipe,
  formControlRadioToggleRecipe,
  radioGroupItemRecipe,
  radioGroupRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ReactNode } from "react";
import type { FormControlVariant } from "../internal";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Types

interface RadioGroupPresetItem extends Omit<BaseRadioGroupPresetItem, "label"> {
  label: ReactNode;
}

export interface RadioGroupRootProps
  extends
    Omit<RadioGroupRootPrimitiveProps, "onValueChange">,
    RadioGroupRootContract {
  onValueChange?: (value: string | null) => void;
}

export interface RadioGroupProps
  extends Omit<RadioGroupRootProps, "children">, RadioGroupContract {
  items?: RadioGroupPresetItem[];
}

export interface RadioGroupItemProps
  extends RadioGroupItemPrimitiveProps, RadioGroupItemRootContract {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
}

// #endregion

// #region Parts
export function RadioGroupRoot({
  children,
  onValueChange,
  recipe = radioGroupRecipe,
  className,
  ...rest
}: RadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      {...rest}
      className={recipe({ className })}
      onValueChange={
        onValueChange ? (details) => onValueChange(details.value) : undefined
      }
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}

export function RadioGroupItem({
  variant: variantProp,
  tabIndex,
  children,
  recipe = radioGroupItemRecipe,
  className,
  ...rest
}: RadioGroupItemProps) {
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
    <RadioGroupPrimitive.Item {...rest} className={slots.base({ className })}>
      <RadioGroupPrimitive.ItemControl
        {...controlProps}
        className={cn(
          formControlRadioToggleRecipe({ ...shellArgs }),
          slots.control(),
        )}
      />

      <RadioGroupItemText>{children}</RadioGroupItemText>

      <RadioGroupPrimitive.ItemHiddenInput tabIndex={tabIndex} />
    </RadioGroupPrimitive.Item>
  );
}

export function RadioGroupItemText({
  children,
  className,
  ...rest
}: RadioGroupItemTextProps) {
  return (
    <RadioGroupPrimitive.ItemText
      {...rest}
      className={cn(fieldRecipe().label(), className)}
    >
      {children}
    </RadioGroupPrimitive.ItemText>
  );
}

export function RadioGroupLabel({ children, ...rest }: RadioGroupLabelProps) {
  return (
    <RadioGroupPrimitive.Label
      {...rest}
      className={cn(fieldRecipe().label(), rest.className)}
    >
      {children}
    </RadioGroupPrimitive.Label>
  );
}
// #endregion

// #region Shorthand
export function RadioGroupShorthand({ items = [], ...rest }: RadioGroupProps) {
  return (
    <RadioGroupRoot {...rest}>
      {items.map((item) => (
        <RadioGroupItem
          disabled={item.disabled}
          key={item.value}
          value={item.value}
        >
          {item.label}
        </RadioGroupItem>
      ))}
    </RadioGroupRoot>
  );
}
// #endregion

// #region Display Names
RadioGroupRoot.displayName = "RadioGroup.Root";
RadioGroupItem.displayName = "RadioGroup.Item";
RadioGroupItemText.displayName = "RadioGroup.ItemText";
RadioGroupLabel.displayName = "RadioGroup.Label";

// #endregion

export type {
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
} from "@ark-ui/react";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item: RadioGroupItem,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
  Root: RadioGroupRoot,
});
