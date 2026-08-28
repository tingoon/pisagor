import { Switch as SwitchPrimitive } from "@ark-ui/react/switch";
import { type SwitchSlots, switchVariants } from "@pisagor/recipes/switch";
import type { ComponentProps } from "react";
import type { VariantClassNames } from "../../internal/types";
import { SwitchContext, useSwitch } from "./switch.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

type SwitchControlProps = ComponentProps<typeof SwitchPrimitive.Control>;

type SwitchThumbProps = ComponentProps<typeof SwitchPrimitive.Thumb>;

type SwitchHiddenInputProps = ComponentProps<typeof SwitchPrimitive.HiddenInput>;

type SwitchClassNames = VariantClassNames<SwitchSlots>;

type SwitchRootProps = ComponentProps<typeof SwitchPrimitive.Root> & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
};

export interface SwitchProps extends Omit<SwitchRootProps, "children"> {
  onValueChange?: (value: boolean) => void;
  /** Slot class names */
  classNames?: SwitchClassNames;
  /** Extra props forwarded to the switch control element */
  controlProps?: Omit<SwitchControlProps, "children" | "className">;
  /** Extra props forwarded to the hidden input element (e.g. tabIndex) */
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "className">;
  /** Extra props forwarded to the switch thumb element */
  thumbProps?: Omit<SwitchThumbProps, "children" | "className">;
}
// #endregion

// #region Parts
function SwitchRoot({ variant: variantProp, children, className, ...rest }: SwitchRootProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlShellProps = { "data-variant": resolved.variant };
  const slots = switchVariants({ ...shellArgs });

  return (
    <SwitchContext value={{ slots }}>
      <SwitchPrimitive.Root {...rest} {...controlShellProps} className={slots.base({ className })}>
        {children}
      </SwitchPrimitive.Root>
    </SwitchContext>
  );
}

function SwitchControl({ children, className, ...rest }: SwitchControlProps) {
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
// #endregion

// #region Closed
export function Switch({
  variant,
  controlProps,
  hiddenInputProps,
  thumbProps,
  onCheckedChange,
  onValueChange,
  className,
  classNames,
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
      variant={variant}
    >
      <SwitchControl {...controlProps} className={classNames?.control}>
        <SwitchThumb {...thumbProps} className={classNames?.thumb} />
      </SwitchControl>

      <SwitchHiddenInput {...hiddenInputProps} />
    </SwitchRoot>
  );
}
// #endregion

// #region Display Names
SwitchRoot.displayName = "Switch.Root";
SwitchControl.displayName = "Switch.Control";
SwitchThumb.displayName = "Switch.Thumb";
SwitchHiddenInput.displayName = "Switch.HiddenInput";
Switch.displayName = "Switch";
// #endregion
