import { ark } from "@ark-ui/solid/factory";
import {
  type PinInputInputProps,
  PinInput as PinInputPrimitive,
  type PinInputRootProps,
} from "@ark-ui/solid/pin-input";
import { inputOtpRecipe } from "@pisagor/recipes/input-otp";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Input, type InputProps } from "../input/input";
import { InputOTPContext, useInputOTP } from "./input-otp.context";

export type InputOTPRootProps = Omit<PinInputRootProps, "onValueChange"> &
  Pick<InputProps, "size" | "variant">;

export interface InputOTPProps extends InputOTPRootProps {
  onValueChange?: (value: string[]) => void;
  recipe?: typeof inputOtpRecipe;
}

export type InputOTPSlotProps = PinInputInputProps &
  Pick<InputProps, "variant">;

export type InputOTPSeparatorProps = ComponentProps<typeof ark.hr>;

export function InputOTPRoot(props: InputOTPProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "children",
    "otp",
    "placeholder",
    "onValueChange",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? inputOtpRecipe)();

  return (
    <InputOTPContext value={{ slots: slots() }}>
      <PinInputPrimitive.Root
        {...rest}
        class={slots().base()}
        onValueChange={
          local.onValueChange
            ? (details) => local.onValueChange?.(details.value)
            : undefined
        }
        otp={local.otp ?? true}
        placeholder={local.placeholder ?? ""}
      >
        <PinInputPrimitive.Control
          class={slots().control({ class: cn(local.class) })}
        >
          {local.children}
        </PinInputPrimitive.Control>
        <PinInputPrimitive.HiddenInput />
      </PinInputPrimitive.Root>
    </InputOTPContext>
  );
}

export function InputOTPSlot(props: InputOTPSlotProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const { slots } = useInputOTP();

  return (
    <PinInputPrimitive.Input
      {...rest}
      asChild={(inputProps) => (
        <Input
          {...inputProps({ class: slots.input({ class: cn(local.class) }) })}
          variant={local.variant}
        />
      )}
    />
  );
}

export function InputOTPSeparator(props: InputOTPSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useInputOTP();

  return (
    <ark.hr
      {...rest}
      class={slots.separator({ class: cn(local.class) })}
      data-part="separator"
      data-scope="input-otp"
    />
  );
}
