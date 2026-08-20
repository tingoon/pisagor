import { Checkbox as CheckboxPrimitive } from "@ark-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "@phosphor-icons/react";
import { checkbox2Variants, checkboxGroupVariants } from "@pisagor/styles/ui/checkbox";
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
export type CheckboxGroupProps = Omit<
  ComponentProps<typeof CheckboxPrimitive.Group>,
  "onValueChange"
> & {
  onValueChange?: (value: string[]) => void;
};

export type CheckboxRootProps = ComponentProps<typeof CheckboxPrimitive.Root> & WithTestId;

export interface CheckboxProps extends CheckboxRootProps {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
}

type CheckboxIndicatorProps = ComponentProps<typeof CheckboxPrimitive.Indicator>;
// #endregion

// #region Parts
export function CheckboxGroup({ className, onValueChange, ...rest }: CheckboxGroupProps) {
  return (
    <CheckboxPrimitive.Group
      {...rest}
      className={checkboxGroupVariants({ className })}
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
  testId,
  ...rest
}: CheckboxProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const slots = checkbox2Variants();

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
        slots.base({ className }),
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

function CheckboxIndicator({ className, ...rest }: CheckboxIndicatorProps) {
  const slots = checkbox2Variants();

  return <CheckboxPrimitive.Indicator {...rest} className={slots.indicator({ className })} />;
}

// Keep export for backwards compatibility
export const checkboxVariants = formControlToggleVariants;
// #endregion

// #region Display Names
CheckboxGroup.displayName = "Checkbox.Group";
CheckboxRoot.displayName = "Checkbox";
CheckboxIndicator.displayName = "Checkbox.Indicator";
// #endregion
