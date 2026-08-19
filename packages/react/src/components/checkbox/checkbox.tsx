import { Checkbox as CheckboxPrimitive } from "@ark-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "@phosphor-icons/react";
import {
  checkbox2Variants,
  checkboxGroupVariants,
  checkboxIndicatorVariants,
} from "@pisagor/styles/ui/checkbox";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlToggleVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";

// #region Types
interface CheckboxGroupProps
  extends Omit<ComponentProps<typeof CheckboxPrimitive.Group>, "onValueChange"> {
  onValueChange?: (value: string[]) => void;
}

export interface CheckboxProps extends ComponentProps<typeof CheckboxPrimitive.Root>, WithTestId {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
}

// #endregion

// #region Components
export function CheckboxGroup({ className, onValueChange, ...rest }: CheckboxGroupProps) {
  return (
    <CheckboxPrimitive.Group
      {...rest}
      className={cn(checkboxGroupVariants(), className)}
      onValueChange={onValueChange}
    />
  );
}

CheckboxGroup.displayName = "Checkbox.Group";

export function CheckboxRoot({
  variant: variantProp,
  tabIndex,
  onCheckedChange,
  onValueChange,
  className,
  testId,
  ...rest
}: CheckboxProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);

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
        formControlToggleVariants({ size: "md", ...shellArgs }),
        checkbox2Variants(),
        className,
      )}
      data-testid={testId}
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
CheckboxRoot.displayName = "Checkbox";

function CheckboxIndicator({
  className,
  ...rest
}: ComponentProps<typeof CheckboxPrimitive.Indicator>) {
  return (
    <CheckboxPrimitive.Indicator {...rest} className={cn(checkboxIndicatorVariants(), className)} />
  );
}
CheckboxIndicator.displayName = "Checkbox.Indicator";

// Keep export for backwards compatibility
export const checkboxVariants = formControlToggleVariants;

// #endregion
