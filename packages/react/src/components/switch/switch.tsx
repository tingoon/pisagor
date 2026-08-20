import { Switch as SwitchPrimitive } from "@ark-ui/react/switch";
import { switchVariants } from "@pisagor/styles/ui/switch";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
export type SwitchControlProps = ComponentProps<typeof SwitchPrimitive.Control>;

export type SwitchThumbProps = ComponentProps<typeof SwitchPrimitive.Thumb>;

export type SwitchHiddenInputProps = ComponentProps<typeof SwitchPrimitive.HiddenInput>;

type SwitchClassNames = VariantClassNames<typeof switchVariants>;

export type SwitchRootProps = ComponentProps<typeof SwitchPrimitive.Root>;

export interface SwitchProps extends SwitchRootProps, WithTestId {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
  /** Slot class names */
  classNames?: SwitchClassNames;
  /** Extra props forwarded to the switch control element */
  controlProps?: Omit<SwitchControlProps, "children" | "className">;
  /** Extra props forwarded to the switch thumb element */
  thumbProps?: Omit<SwitchThumbProps, "children" | "className">;
  /** Extra props forwarded to the hidden input element (e.g. tabIndex) */
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "className">;
}
// #endregion

// #region Part
export function Switch({
  variant: variantProp,
  onCheckedChange,
  onValueChange,
  controlProps,
  thumbProps,
  hiddenInputProps,
  className,
  classNames,
  testId,
  ...rest
}: SwitchProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlShellProps = formControlShellProps(resolved);
  const slots = switchVariants({ ...shellArgs });

  const handleCheckedChange =
    onCheckedChange || onValueChange
      ? (details: Parameters<NonNullable<SwitchRootProps["onCheckedChange"]>>[0]) => {
          onCheckedChange?.(details);
          onValueChange?.(details.checked === true);
        }
      : undefined;

  return (
    <SwitchPrimitive.Root
      {...rest}
      {...controlShellProps}
      className={slots.base({ className: cn(className, classNames?.base) })}
      data-testid={testId}
      onCheckedChange={handleCheckedChange}
    >
      <SwitchPrimitive.Control
        {...controlProps}
        className={slots.control({ className: classNames?.control })}
      >
        <SwitchPrimitive.Thumb
          {...thumbProps}
          className={slots.thumb({ className: classNames?.thumb })}
        />
      </SwitchPrimitive.Control>

      <SwitchPrimitive.HiddenInput {...hiddenInputProps} />
    </SwitchPrimitive.Root>
  );
}
// #endregion
