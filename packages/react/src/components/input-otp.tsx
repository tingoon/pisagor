import { PinInput as PinInputPrimitive } from "@ark-ui/react";
import type { PinInputInputProps, PinInputRootProps } from "@ark-ui/react";
import type { InputOtpRootContract } from "@pisagor/contracts";
import {
  type FormControlShellVariantProps,
  inputOtpRecipe,
  inputRootRecipe,
} from "@pisagor/recipes";

import { createContext, use } from "react";
import type { ComponentPropsWithRef } from "react";
import { createSlotRecipeContext } from "../internal";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const {
  Context: InputOTPStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "InputOTP",
  recipe: inputOtpRecipe,
});

const InputOTPOptionsContext = createContext<FormControlShellVariantProps>({});

function useInputOTP() {
  return { ...useStyles(), ...use(InputOTPOptionsContext) };
}
// #endregion

// #region Types
export type InputOTPRootProps = Omit<PinInputRootProps, "onValueChange"> &
  InputOtpRootContract;

export interface InputOTPProps extends InputOTPRootProps {
  onValueChange?: (value: string[]) => void;
}

export type InputOTPSlotProps = PinInputInputProps & InputOtpRootContract;

export type InputOTPSeparatorProps = ComponentPropsWithRef<"hr">;
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
  const slots = recipe({ size });

  return (
    <InputOTPStylesContext value={{ slots, variants: {} as never }}>
      <InputOTPOptionsContext value={{ size, variant }}>
        <PinInputPrimitive.Root
          {...rest}
          className={slots.base({ className })}
          onValueChange={
            onValueChange
              ? (details) => onValueChange(details.value)
              : undefined
          }
          otp={otp}
          placeholder={placeholder ?? ""}
        >
          <PinInputPrimitive.Control className={slots.control()}>
            {children}
          </PinInputPrimitive.Control>

          <PinInputPrimitive.HiddenInput />
        </PinInputPrimitive.Root>
      </InputOTPOptionsContext>
    </InputOTPStylesContext>
  );
}

export function InputOTPSlot({
  size,
  variant,
  className,
  ...rest
}: InputOTPSlotProps) {
  const { size: contextSize, slots, variant: contextVariant } = useInputOTP();
  const surfaceVariant = useFormControlSurface();
  const resolvedSize = size ?? contextSize ?? "md";
  const resolvedVariant = variant ?? contextVariant ?? "primary";

  // Render a plain input (not Field.Input) so each slot keeps its own pin-input id
  // instead of every slot inheriting the surrounding Field's id.
  return (
    <PinInputPrimitive.Input
      {...rest}
      className={inputRootRecipe({
        className: slots.input({ className }),
        size: resolvedSize,
        surfaceVariant,
        variant: resolvedVariant,
      })}
      data-size={resolvedSize}
      data-variant={resolvedVariant}
    />
  );
}

export const InputOTPSeparator = withContext("hr", {
  name: "Separator",
});
// #endregion

// #region Display Names
InputOTPRoot.displayName = "InputOTP";
InputOTPSlot.displayName = "InputOTP.Slot";
// #endregion

export const InputOTP = Object.assign(InputOTPRoot, {
  Separator: InputOTPSeparator,
  Slot: InputOTPSlot,
});
