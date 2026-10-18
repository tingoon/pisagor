import { PinInput as PinInputPrimitive, ark } from "@ark-ui/react";
import type {
  HTMLArkProps,
  PinInputInputProps,
  PinInputRootProps,
} from "@ark-ui/react";
import type { InputOtpProps as BaseInputOTPProps } from "@pisagor/props";
import { inputOtpRecipe, inputRootRecipe } from "@pisagor/recipes";
import type { RefAttributes } from "react";
import { createContext, use } from "react";
import { createSlotRecipeContext } from "../internal";
import type { InputProps } from "./input/input";
import { useFormControlSurface } from "./surface/use-form-control-surface";

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

export type InputOTPSeparatorProps = HTMLArkProps<"hr"> &
  RefAttributes<HTMLHRElement>;
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
