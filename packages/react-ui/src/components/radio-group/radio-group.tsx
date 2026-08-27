import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/react/radio-group";
import { radioGroupItemVariants, radioGroupVariants } from "@pisagor/recipes/radio-group";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlRadioToggleVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import { Field } from "../field";

// #region Types
interface RadioGroupPresetItem {
  disabled?: boolean;
  label: ReactNode;
  value: string;
}

export interface RadioGroupRootProps
  extends Omit<ComponentProps<typeof RadioGroupPrimitive.Root>, "onValueChange"> {
  onValueChange?: (value: string | null) => void;
}

export interface RadioGroupProps extends Omit<RadioGroupRootProps, "children"> {
  items?: RadioGroupPresetItem[];
}

export interface RadioGroupItemProps extends ComponentProps<typeof RadioGroupPrimitive.Item> {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
}

export type RadioGroupItemTextProps = ComponentProps<typeof RadioGroupPrimitive.ItemText>;

export type RadioGroupLabelProps = ComponentProps<typeof RadioGroupPrimitive.Label>;
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
      className={radioGroupVariants({ className })}
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
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const slots = radioGroupItemVariants();

  return (
    <RadioGroupPrimitive.Item {...rest} className={slots.base({ className })}>
      <RadioGroupPrimitive.ItemControl
        {...controlProps}
        className={cn(formControlRadioToggleVariants({ ...shellArgs }), slots.control())}
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
