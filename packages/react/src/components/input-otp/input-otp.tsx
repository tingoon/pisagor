import { ark } from "@ark-ui/react/factory";
import { PinInput as PinInputPrimitive } from "@ark-ui/react/pin-input";
import { inputOtpVariants } from "@pisagor/styles/ui/input-otp";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import { Input, type InputProps } from "../input/input";
import { InputOTPContext, useInputOTP } from "./input-otp.context";

// #region Types
export type InputOTPRootProps = Omit<
  ComponentProps<typeof PinInputPrimitive.Root>,
  "onValueChange"
> &
  Pick<InputProps, "size" | "variant">;

export interface InputOTPProps extends InputOTPRootProps {
  onValueChange?: (value: string[]) => void;
}

export type InputOTPSlotProps = ComponentProps<typeof PinInputPrimitive.Input> &
  Pick<InputProps, "variant">;

export interface InputOTPSeparatorProps extends ComponentProps<typeof ark.hr> {}
// #endregion

// #region Parts
export function InputOTPRoot({
  placeholder,
  otp = true,
  variant,
  className,
  children,
  onValueChange,
  ...rest
}: InputOTPProps) {
  const slots = useMemo(() => inputOtpVariants(), []);

  return (
    <FormControlVariantProvider value={variant}>
      <InputOTPContext value={{ slots }}>
        <PinInputPrimitive.Root
          {...rest}
          className={slots.base()}
          onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
          otp={otp}
          placeholder={placeholder ?? ""}
        >
          <PinInputPrimitive.Control className={slots.control({ className })}>
            {children}
          </PinInputPrimitive.Control>

          <PinInputPrimitive.HiddenInput />
        </PinInputPrimitive.Root>
      </InputOTPContext>
    </FormControlVariantProvider>
  );
}

export function InputOTPSlot({ className, variant, ...rest }: InputOTPSlotProps) {
  const { slots } = useInputOTP();

  return (
    <PinInputPrimitive.Input {...rest} asChild>
      <Input className={slots.input({ className })} variant={variant} />
    </PinInputPrimitive.Input>
  );
}

export function InputOTPSeparator({ className, ...rest }: InputOTPSeparatorProps) {
  const { slots } = useInputOTP();

  return (
    <ark.hr
      {...rest}
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="input-otp"
    />
  );
}
// #endregion

// #region Display Names
InputOTPRoot.displayName = "InputOTP";
InputOTPSlot.displayName = "InputOTP.Slot";
InputOTPSeparator.displayName = "InputOTP.Separator";
// #endregion
