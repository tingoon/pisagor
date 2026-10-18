import { PinInput as PinInputPrimitive, ark } from "@ark-ui/solid";
import type {
  HTMLArkProps,
  PinInputInputProps,
  PinInputRootProps,
} from "@ark-ui/solid";
import type { InputOtpProps as BaseInputOTPProps } from "@pisagor/props";
import {
  type FormControlShellVariantProps,
  inputOtpRecipe,
  inputRootRecipe,
} from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { createContext } from "../utils";
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

const { InputOTPOptionsContext, useInputOTPOptions } =
  createContext("InputOTPOptions")<FormControlShellVariantProps>();

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
  BaseInputOTPProps;

export interface InputOTPProps extends InputOTPRootProps {
  onValueChange?: (value: string[]) => void;
}

export type InputOTPSlotProps = PinInputInputProps & BaseInputOTPProps;

export type InputOTPSeparatorProps = HTMLArkProps<"hr">;

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
  const slots = createMemo(() =>
    (local.recipe ?? inputOtpRecipe)({ size: local.size ?? "md" }),
  );

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
          class={slots().base({ class: local.class })}
          onValueChange={
            local.onValueChange
              ? (details) => local.onValueChange?.(details.value)
              : undefined
          }
          otp={local.otp ?? true}
          placeholder={local.placeholder ?? ""}
        >
          <PinInputPrimitive.Control class={slots().control()}>
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
  const surfaceVariant = useFormControlSurface();
  const size = () => local.size ?? ctx.size ?? "md";
  const variant = () => local.variant ?? ctx.variant ?? "primary";

  // Render a plain input (not Field.Input) so each slot keeps its own pin-input id
  // instead of every slot inheriting the surrounding Field's id.
  return (
    <PinInputPrimitive.Input
      {...rest}
      class={inputRootRecipe({
        class: ctx.slots.input({ class: local.class }),
        size: size(),
        surfaceVariant,
        variant: variant(),
      })}
      data-size={size()}
      data-variant={variant()}
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
