import { Checkbox as CheckboxPrimitive } from "@ark-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "@phosphor-icons/react";
import { checkboxGroupVariants, checkboxVariants } from "@pisagor/recipes/checkbox";
import { formControlToggleVariants } from "@pisagor/recipes/form-control";
import type { ComponentProps } from "react";
import { cn } from "../../internal/utils";

// #region Types
type FormControlVariant = "primary" | "secondary";

export type CheckboxGroupProps = Omit<
  ComponentProps<typeof CheckboxPrimitive.Group>,
  "onValueChange"
> & {
  onValueChange?: (value: string[]) => void;
};

export type CheckboxRootProps = ComponentProps<typeof CheckboxPrimitive.Root>;

export interface CheckboxProps extends CheckboxRootProps {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
}

type CheckboxIndicatorProps = ComponentProps<typeof CheckboxPrimitive.Indicator>;
// #endregion

// #region Parts
export function CheckboxGroup({ onValueChange, className, ...rest }: CheckboxGroupProps) {
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
  ...rest
}: CheckboxProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };
  const slots = checkboxVariants();

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
  const slots = checkboxVariants();

  return <CheckboxPrimitive.Indicator {...rest} className={slots.indicator({ className })} />;
}
// #endregion

// #region Display Names
CheckboxGroup.displayName = "Checkbox.Group";
CheckboxRoot.displayName = "Checkbox";
CheckboxIndicator.displayName = "Checkbox.Indicator";
// #endregion
