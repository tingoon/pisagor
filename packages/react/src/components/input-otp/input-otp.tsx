import { ark } from "@ark-ui/react/factory";
import { PinInput as PinInputPrimitive } from "@ark-ui/react/pin-input";
import { inputOtpVariants } from "@pisagor/recipes/input-otp";
import type { ComponentProps } from "react";
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

export type InputOTPSeparatorProps = ComponentProps<typeof ark.hr>;
// #endregion

// #region Parts
export function InputOTPRoot({
  variant,
  children,
  otp = true,
  placeholder,
  onValueChange,
  className,
  ...rest
}: InputOTPProps) {
  const slots = inputOtpVariants();

  return (
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
  );
}

export function InputOTPSlot({ variant, className, ...rest }: InputOTPSlotProps) {
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
