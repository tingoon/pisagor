import { ark } from "@ark-ui/react/factory";
import {
  type PinInputInputProps,
  PinInput as PinInputPrimitive,
  type PinInputRootProps,
} from "@ark-ui/react/pin-input";
import type { InputOtpProps as InputOTPSharedProps } from "@pisagor/props";
import { inputOtpRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { Input, type InputProps } from "../input/input";
import { InputOTPContext, useInputOTP } from "./input-otp.context";

// #region Types
export type InputOTPRootProps = Omit<PinInputRootProps, "onValueChange"> &
  Pick<InputProps, "size" | "variant">;

export interface InputOTPProps extends InputOTPRootProps, InputOTPSharedProps {
  onValueChange?: (value: string[]) => void;
}

export type InputOTPSlotProps = PinInputInputProps &
  Pick<InputProps, "size" | "variant">;

export type InputOTPSeparatorProps = ComponentProps<typeof ark.hr>;
// #endregion

// #region Parts
export function InputOTPRoot({
  size,
  variant,
  children,
  otp = true,
  placeholder,
  onValueChange,
  recipe = inputOtpRecipe,
  className,
  ...rest
}: InputOTPProps) {
  const slots = recipe();

  return (
    <InputOTPContext value={{ size, slots, variant }}>
      <PinInputPrimitive.Root
        {...rest}
        className={slots.base()}
        onValueChange={
          onValueChange ? (details) => onValueChange(details.value) : undefined
        }
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

export function InputOTPSlot({
  size,
  variant,
  className,
  ...rest
}: InputOTPSlotProps) {
  const { size: contextSize, slots, variant: contextVariant } = useInputOTP();

  return (
    <PinInputPrimitive.Input {...rest} asChild>
      <Input
        className={slots.input({ className })}
        size={size ?? contextSize}
        variant={variant ?? contextVariant}
      />
    </PinInputPrimitive.Input>
  );
}

export function InputOTPSeparator({
  className,
  ...rest
}: InputOTPSeparatorProps) {
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
