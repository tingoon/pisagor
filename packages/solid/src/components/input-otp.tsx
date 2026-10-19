import {
  type HTMLArkProps,
  PinInput as PinInputPrimitive,
} from "@ark-ui/solid";
import type {
  PinInputControlProps,
  PinInputInputProps,
  PinInputLabelProps,
  PinInputRootProps,
} from "@ark-ui/solid";
import type {
  InputOtpContract,
  InputOtpRootContract,
} from "@pisagor/contracts";
import {
  type FormControlShellVariantProps,
  inputOtpRecipe,
  inputRootRecipe,
} from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { createContext } from "../utils";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "InputOTP",
  recipe: inputOtpRecipe,
});

const { InputOTPOptionsContext, useInputOTPOptions } = createContext(
  "InputOTPOptions",
)<FormControlShellVariantProps>({ strict: false });
// #endregion

// #region Types
export type InputOTPRootProps = Omit<PinInputRootProps, "onValueChange"> &
  InputOtpRootContract & {
    /** Called with the slot values when they change. */
    onValueChange?: (value: string[]) => void;
  };

export interface InputOTPProps
  extends Omit<InputOTPRootProps, "children">, InputOtpContract {
  /**
   * Number of input slots.
   *
   * @defaultValue 6
   */
  length?: number;
  /** Insert a separator after every `groupSize` slots. */
  groupSize?: number;
}

export type InputOTPInputProps = PinInputInputProps &
  Pick<InputOtpRootContract, "size" | "variant">;

export type InputOTPSeparatorProps = HTMLArkProps<"hr">;
// #endregion

// #region Parts
const RootBase = withProvider<PinInputRootProps & InputOtpRootContract>(
  PinInputPrimitive.Root,
  { name: "Root", slot: "base" },
);

/** Root; renders the hidden form input and shares `size` / `variant`. */
function Root(props: InputOTPRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "otp",
    "placeholder",
    "onValueChange",
    "variant",
  ]);

  return (
    <InputOTPOptionsContext
      value={{
        get size() {
          return rest.size;
        },
        get variant() {
          return local.variant;
        },
      }}
    >
      <RootBase
        {...rest}
        onValueChange={
          local.onValueChange
            ? (details) => local.onValueChange?.(details.value)
            : undefined
        }
        otp={local.otp ?? true}
        placeholder={local.placeholder ?? ""}
      >
        {local.children}

        <PinInputPrimitive.HiddenInput />
      </RootBase>
    </InputOTPOptionsContext>
  );
}

const Label = withContext<PinInputLabelProps>(PinInputPrimitive.Label, {
  name: "Label",
});

const Control = withContext<PinInputControlProps>(PinInputPrimitive.Control, {
  name: "Control",
});

/** One character slot, styled like a form input. */
function Input(props: InputOTPInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "class"]);
  const styles = useStyles();
  const options = useInputOTPOptions();
  const surfaceVariant = useFormControlSurface();
  const size = () => local.size ?? options?.size ?? "md";
  const variant = () => local.variant ?? options?.variant ?? "primary";

  // Plain input (not Field.Input) so each slot keeps its own pin-input id.
  return (
    <PinInputPrimitive.Input
      {...rest}
      class={inputRootRecipe({
        class: styles.slots.input({ class: local.class }),
        size: size(),
        surfaceVariant,
        variant: variant(),
      })}
      data-size={size()}
      data-variant={variant()}
    />
  );
}

const Separator = withContext<InputOTPSeparatorProps>("hr", {
  name: "Separator",
});
// #endregion

// #region Shorthand
export function InputOTPShorthand(props: InputOTPProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "classNames",
    "groupSize",
    "length",
  ]);
  const indexes = () =>
    Array.from({ length: local.length ?? 6 }, (_, index) => index);

  return (
    <Root {...rest}>
      <Control class={local.classNames?.control}>
        <For each={indexes()}>
          {(index) => (
            <>
              <Show
                when={
                  local.groupSize !== undefined &&
                  index > 0 &&
                  index % local.groupSize === 0
                }
              >
                <Separator class={local.classNames?.separator} />
              </Show>
              <Input class={local.classNames?.input} index={index} />
            </>
          )}
        </For>
      </Control>
    </Root>
  );
}
// #endregion

export type { PinInputControlProps as InputOTPControlProps } from "@ark-ui/solid";
export type { PinInputLabelProps as InputOTPLabelProps } from "@ark-ui/solid";

export const InputOTP = Object.assign(InputOTPShorthand, {
  Control,
  Input,
  Label,
  Root,
  Separator,
});
