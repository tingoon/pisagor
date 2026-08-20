import { Switch as SwitchPrimitive } from "@ark-ui/react/switch";
import { type SwitchSlots, switchVariants } from "@pisagor/styles/ui/switch";
import type { ComponentProps } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { SwitchContext, useSwitch } from "./switch.context";

// #region Types
type SwitchControlProps = ComponentProps<typeof SwitchPrimitive.Control>;

type SwitchThumbProps = ComponentProps<typeof SwitchPrimitive.Thumb>;

type SwitchHiddenInputProps = ComponentProps<typeof SwitchPrimitive.HiddenInput>;

type SwitchClassNames = VariantClassNames<SwitchSlots>;

type SwitchRootProps = ComponentProps<typeof SwitchPrimitive.Root> &
  WithTestId & {
    /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
    variant?: FormControlVariant;
  };

export interface SwitchProps extends Omit<SwitchRootProps, "children"> {
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

// #region Parts
function SwitchRoot({
  children,
  className,
  testId,
  variant: variantProp,
  ...rest
}: SwitchRootProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlShellProps = formControlShellProps(resolved);
  const slots = switchVariants({ ...shellArgs });

  return (
    <SwitchContext value={{ slots }}>
      <SwitchPrimitive.Root
        {...rest}
        {...controlShellProps}
        className={slots.base({ className })}
        data-testid={testId}
      >
        {children}
      </SwitchPrimitive.Root>
    </SwitchContext>
  );
}

function SwitchControl({ className, children, ...rest }: SwitchControlProps) {
  const { slots } = useSwitch();

  return (
    <SwitchPrimitive.Control {...rest} className={slots.control({ className })}>
      {children}
    </SwitchPrimitive.Control>
  );
}

function SwitchThumb({ className, ...rest }: SwitchThumbProps) {
  const { slots } = useSwitch();

  return <SwitchPrimitive.Thumb {...rest} className={slots.thumb({ className })} />;
}

function SwitchHiddenInput(props: SwitchHiddenInputProps) {
  return <SwitchPrimitive.HiddenInput {...props} />;
}

SwitchRoot.displayName = "Switch.Root";
SwitchControl.displayName = "Switch.Control";
SwitchThumb.displayName = "Switch.Thumb";
SwitchHiddenInput.displayName = "Switch.HiddenInput";
// #endregion

// #region Closed
export function Switch({
  className,
  classNames,
  controlProps,
  hiddenInputProps,
  onCheckedChange,
  onValueChange,
  testId,
  thumbProps,
  variant,
  ...rest
}: SwitchProps) {
  const handleCheckedChange =
    onCheckedChange || onValueChange
      ? (details: Parameters<NonNullable<SwitchRootProps["onCheckedChange"]>>[0]) => {
          onCheckedChange?.(details);
          onValueChange?.(details.checked === true);
        }
      : undefined;

  return (
    <SwitchRoot
      {...rest}
      className={className}
      onCheckedChange={handleCheckedChange}
      testId={testId}
      variant={variant}
    >
      <SwitchControl {...controlProps} className={classNames?.control}>
        <SwitchThumb {...thumbProps} className={classNames?.thumb} />
      </SwitchControl>

      <SwitchHiddenInput {...hiddenInputProps} />
    </SwitchRoot>
  );
}
Switch.displayName = "Switch";
// #endregion
