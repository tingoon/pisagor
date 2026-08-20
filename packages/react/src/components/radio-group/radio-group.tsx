import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/react/radio-group";
import {
  radioGroupItemControlVariants,
  radioGroupItemVariants,
  radioGroupVariants,
} from "@pisagor/styles/ui/radio-group";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlRadioToggleVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Field } from "../field";

// #region Types
interface RadioGroupPresetItem {
  disabled?: boolean;
  label: ReactNode;
  value: string;
}

export interface RadioGroupRootProps
  extends Omit<ComponentProps<typeof RadioGroupPrimitive.Root>, "onValueChange">,
    WithTestId {
  onValueChange?: (value: string | null) => void;
}

export interface RadioGroupProps extends Omit<RadioGroupRootProps, "children"> {
  items?: RadioGroupPresetItem[];
}

interface RadioGroupItemProps extends ComponentProps<typeof RadioGroupPrimitive.Item> {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
}

// #endregion

// #region Components
export function RadioGroupRoot({
  className,
  children,
  onValueChange,
  testId,
  ...rest
}: RadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      {...rest}
      className={cn(radioGroupVariants(), className)}
      data-testid={testId}
      onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}
RadioGroupRoot.displayName = "RadioGroup.Root";

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

  return (
    <RadioGroupPrimitive.Item {...rest} className={cn(radioGroupItemVariants(), className)}>
      <RadioGroupPrimitive.ItemControl
        {...controlProps}
        className={cn(
          formControlRadioToggleVariants({ ...shellArgs }),
          radioGroupItemControlVariants(),
        )}
      />

      <RadioGroupText>{children}</RadioGroupText>

      <RadioGroupPrimitive.ItemHiddenInput tabIndex={tabIndex} />
    </RadioGroupPrimitive.Item>
  );
}
RadioGroupItem.displayName = "RadioGroup.Item";

export function RadioGroupText({
  className,
  children,
  ...rest
}: ComponentProps<typeof RadioGroupPrimitive.ItemText>) {
  return (
    <Field.Label asChild>
      <RadioGroupPrimitive.ItemText {...rest} className={className}>
        {children}
      </RadioGroupPrimitive.ItemText>
    </Field.Label>
  );
}
RadioGroupText.displayName = "RadioGroup.Text";

export function RadioGroupLabel({
  children,
  ...rest
}: ComponentProps<typeof RadioGroupPrimitive.Label>) {
  return (
    <Field.Label asChild>
      <RadioGroupPrimitive.Label {...rest}>{children}</RadioGroupPrimitive.Label>
    </Field.Label>
  );
}
RadioGroupLabel.displayName = "RadioGroup.Label";

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
RadioGroupShorthand.displayName = "RadioGroup";

// #endregion
