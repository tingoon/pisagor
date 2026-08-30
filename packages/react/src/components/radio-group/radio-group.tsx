import type {
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
  RadioGroupItemProps as RadioGroupPrimitiveItemProps,
  RadioGroupRootProps as RadioGroupPrimitiveRootProps,
} from "@ark-ui/react/radio-group";
import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/react/radio-group";
import { formControlRadioToggleRecipe } from "@pisagor/recipes/form-control";
import { radioGroupItemRecipe, radioGroupRecipe } from "@pisagor/recipes/radio-group";
import type { ReactNode } from "react";
import { cn } from "../../internal/utils";
import { Field } from "../field";

// #region Types
type FormControlVariant = "primary" | "secondary";

interface RadioGroupPresetItem {
  disabled?: boolean;
  label: ReactNode;
  value: string;
}

export interface RadioGroupRootProps extends Omit<RadioGroupPrimitiveRootProps, "onValueChange"> {
  onValueChange?: (value: string | null) => void;
}

export interface RadioGroupProps extends Omit<RadioGroupRootProps, "children"> {
  items?: RadioGroupPresetItem[];
}

export interface RadioGroupItemProps extends RadioGroupPrimitiveItemProps {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
}

// #endregion

// #region Parts
export function RadioGroupRoot({
  children,
  onValueChange,
  className,
  ...rest
}: RadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      {...rest}
      className={radioGroupRecipe({ className })}
      onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}

export function RadioGroupItem({
  variant: variantProp,
  tabIndex,
  children,
  className,
  ...rest
}: RadioGroupItemProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };
  const slots = radioGroupItemRecipe();

  return (
    <RadioGroupPrimitive.Item {...rest} className={slots.base({ className })}>
      <RadioGroupPrimitive.ItemControl
        {...controlProps}
        className={cn(formControlRadioToggleRecipe({ ...shellArgs }), slots.control())}
      />

      <RadioGroupItemText>{children}</RadioGroupItemText>

      <RadioGroupPrimitive.ItemHiddenInput tabIndex={tabIndex} />
    </RadioGroupPrimitive.Item>
  );
}

export function RadioGroupItemText({ children, className, ...rest }: RadioGroupItemTextProps) {
  return (
    <Field.Label asChild>
      <RadioGroupPrimitive.ItemText {...rest} className={className}>
        {children}
      </RadioGroupPrimitive.ItemText>
    </Field.Label>
  );
}

export function RadioGroupLabel({ children, ...rest }: RadioGroupLabelProps) {
  return (
    <Field.Label asChild>
      <RadioGroupPrimitive.Label {...rest}>{children}</RadioGroupPrimitive.Label>
    </Field.Label>
  );
}
// #endregion

// #region Shorthand
export function RadioGroupShorthand({ items = [], ...rest }: RadioGroupProps) {
  return (
    <RadioGroupRoot {...rest}>
      {items.map((item) => (
        <RadioGroupItem disabled={item.disabled} key={item.value} value={item.value}>
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
RadioGroupShorthand.displayName = "RadioGroup";
// #endregion
