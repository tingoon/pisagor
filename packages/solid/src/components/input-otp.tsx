import { ark } from "@ark-ui/solid/factory";
import {
  type PinInputInputProps,
  PinInput as PinInputPrimitive,
  type PinInputRootProps,
} from "@ark-ui/solid/pin-input";
import type { InputOtpProps as BaseInputOTPProps } from "@pisagor/props";
import { inputOtpRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { createContext } from "../utils";
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

interface InputOTPOptions extends Pick<InputProps, "size" | "variant"> {}

const { InputOTPOptionsContext, useInputOTPOptions } =
  createContext("InputOTPOptions")<InputOTPOptions>();

function useInputOTP() {
  const styles = useInputOTPStyles();
  const options = useInputOTPOptions();
  return {
    get size() {
      return options.size;
    },
    get slots() {
      return styles.slots;
    },
    get variant() {
      return options.variant;
    },
  };
}
// #endregion

export type InputOTPRootProps = Omit<PinInputRootProps, "onValueChange"> &
  Pick<InputProps, "size" | "variant">;

export interface InputOTPProps extends InputOTPRootProps, BaseInputOTPProps {
  onValueChange?: (value: string[]) => void;
}

export type InputOTPSlotProps = PinInputInputProps &
  Pick<InputProps, "size" | "variant">;

export type InputOTPSeparatorProps = ComponentProps<typeof ark.hr>;

/** `class` targets the control; size/variant flow to each slot input. */
export function InputOTPRoot(props: InputOTPProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "children",
    "otp",
    "placeholder",
    "onValueChange",
    "recipe",
    "class",
  ]);
  const slots = createMemo(() => (local.recipe ?? inputOtpRecipe)());

  return (
    <InputOTPStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <InputOTPOptionsContext
        value={{
          get size() {
            return local.size;
          },
          get variant() {
            return local.variant;
          },
        }}
      >
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
            class={slots().control({ class: local.class })}
          >
            {local.children}
          </PinInputPrimitive.Control>
          <PinInputPrimitive.HiddenInput />
        </PinInputPrimitive.Root>
      </InputOTPOptionsContext>
    </InputOTPStylesContext>
  );
}

export function InputOTPSlot(props: InputOTPSlotProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "class"]);
  const ctx = useInputOTP();

  return (
    <PinInputPrimitive.Input
      {...rest}
      asChild={(inputProps) => (
        <Input
          {...inputProps({ class: ctx.slots.input({ class: local.class }) })}
          size={local.size ?? ctx.size}
          variant={local.variant ?? ctx.variant}
        />
      )}
    />
  );
}

export const InputOTPSeparator: Component<InputOTPSeparatorProps> = withContext(
  ark.hr,
  { name: "Separator" },
);

export const InputOTP = Object.assign(InputOTPRoot, {
  Separator: InputOTPSeparator,
  Slot: InputOTPSlot,
});
