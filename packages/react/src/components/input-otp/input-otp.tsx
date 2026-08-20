import { ark } from "@ark-ui/react/factory";
import { PinInput as PinInputPrimitive } from "@ark-ui/react/pin-input";
import {
  inputOtpControlVariants,
  inputOtpInlineVariants,
  inputOtpSeparatorVariants,
  inputOtpVariants,
} from "@pisagor/styles/ui/input-otp";
import type { ComponentProps } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { WithTestId } from "../../internal/types";
import { Input, type InputProps } from "../input/input";

// #region Types
export type InputOTPRootProps = Omit<
  ComponentProps<typeof PinInputPrimitive.Root>,
  "onValueChange"
> &
  Pick<InputProps, "size" | "variant"> &
  WithTestId;

export interface InputOTPProps extends InputOTPRootProps {
  onValueChange?: (value: string[]) => void;
}

export type InputOTPSlotProps = ComponentProps<typeof PinInputPrimitive.Input> &
  Pick<InputProps, "variant">;
// #endregion

// #region Parts
export function InputOTPRoot({
  placeholder,
  otp = true,
  variant,
  className,
  children,
  onValueChange,
  testId,
  ...rest
}: InputOTPProps) {
  return (
    <FormControlVariantProvider value={variant}>
      <PinInputPrimitive.Root
        {...rest}
        className={inputOtpVariants()}
        data-testid={testId}
        onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
        otp={otp}
        placeholder={placeholder ?? ""}
      >
        <PinInputPrimitive.Control className={inputOtpControlVariants({ className })}>
          {children}
        </PinInputPrimitive.Control>

        <PinInputPrimitive.HiddenInput />
      </PinInputPrimitive.Root>
    </FormControlVariantProvider>
  );
}

export function InputOTPSlot({ className, variant, ...rest }: InputOTPSlotProps) {
  return (
    <PinInputPrimitive.Input {...rest} asChild>
      <Input className={inputOtpInlineVariants({ className })} variant={variant} />
    </PinInputPrimitive.Input>
  );
}

export function InputOTPSeparator({ className, ...rest }: ComponentProps<typeof ark.hr>) {
  return (
    <ark.hr
      {...rest}
      className={inputOtpSeparatorVariants({ className })}
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
