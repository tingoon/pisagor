import { ark } from "@ark-ui/react/factory";
import {
  type PinInputInputProps,
  PinInput as PinInputPrimitive,
  type PinInputRootProps,
} from "@ark-ui/react/pin-input";
import type { InputOtpProps as BaseInputOTPProps } from "@pisagor/props";
import { inputOtpRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createContext, use } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Input, type InputProps } from "./input/input";

// #region Context
const {
  Context: InputOTPStylesContext,
  useStyles: useInputOTPStyles,
  withContext,
} = createSlotRecipeContext({
  name: "InputOTP",
  recipe: inputOtpRecipe,
});

const InputOTPOptionsContext = createContext<{
  size?: InputProps["size"];
  variant?: InputProps["variant"];
}>({});

function useInputOTP() {
  return { ...useInputOTPStyles(), ...use(InputOTPOptionsContext) };
}
// #endregion

// #region Types
export type InputOTPRootProps = Omit<PinInputRootProps, "onValueChange"> &
  Pick<InputProps, "size" | "variant">;

export interface InputOTPProps extends InputOTPRootProps, BaseInputOTPProps {
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
    <InputOTPStylesContext value={{ slots, variants: {} as never }}>
      <InputOTPOptionsContext value={{ size, variant }}>
        <PinInputPrimitive.Root
          {...rest}
          className={slots.base()}
          onValueChange={
            onValueChange
              ? (details) => onValueChange(details.value)
              : undefined
          }
          otp={otp}
          placeholder={placeholder ?? ""}
        >
          <PinInputPrimitive.Control className={slots.control({ className })}>
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

export const InputOTPSeparator = withContext(ark.hr, {
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
