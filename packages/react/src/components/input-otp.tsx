import { PinInput as PinInputPrimitive } from "@ark-ui/react";
import type {
  PinInputControlProps,
  PinInputInputProps,
  PinInputLabelProps,
  PinInputRootProps,
} from "@ark-ui/react";
import type {
  InputOtpContract,
  InputOtpRootContract,
} from "@pisagor/contracts";
import {
  type FormControlShellVariantProps,
  inputOtpRecipe,
  inputRootRecipe,
} from "@pisagor/recipes";
import {
  type ComponentPropsWithRef,
  Fragment,
  createContext,
  use,
} from "react";
import { createSlotRecipeContext } from "../internal";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "InputOTP",
  recipe: inputOtpRecipe,
});

const InputOTPOptionsContext = createContext<FormControlShellVariantProps>({});
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

export type InputOTPSeparatorProps = ComponentPropsWithRef<"hr">;
// #endregion

// #region Parts
const RootBase = withProvider<PinInputRootProps & InputOtpRootContract>(
  PinInputPrimitive.Root,
  { name: "Root", slot: "base" },
);

/** Root; renders the hidden form input and shares `size` / `variant`. */
function Root({
  children,
  otp = true,
  placeholder,
  onValueChange,
  size,
  variant,
  ...rest
}: InputOTPRootProps) {
  return (
    <InputOTPOptionsContext value={{ size, variant }}>
      <RootBase
        {...rest}
        onValueChange={
          onValueChange ? (details) => onValueChange(details.value) : undefined
        }
        otp={otp}
        placeholder={placeholder ?? ""}
        size={size}
      >
        {children}

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
function Input({ size, variant, className, ...rest }: InputOTPInputProps) {
  const { slots } = useStyles();
  const options = use(InputOTPOptionsContext);
  const surfaceVariant = useFormControlSurface();
  const resolvedSize = size ?? options.size ?? "md";
  const resolvedVariant = variant ?? options.variant ?? "primary";

  // Plain input (not Field.Input) so each slot keeps its own pin-input id.
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

const Separator = withContext<InputOTPSeparatorProps>("hr", {
  name: "Separator",
});
// #endregion

// #region Shorthand
export function InputOTPShorthand({
  classNames,
  groupSize,
  length = 6,
  ...rest
}: InputOTPProps) {
  return (
    <Root {...rest}>
      <Control className={classNames?.control}>
        {Array.from({ length }, (_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: slots are positional.
          <Fragment key={index}>
            {groupSize !== undefined &&
              index > 0 &&
              index % groupSize === 0 && (
                <Separator className={classNames?.separator} />
              )}
            <Input className={classNames?.input} index={index} />
          </Fragment>
        ))}
      </Control>
    </Root>
  );
}
// #endregion

export type { PinInputControlProps as InputOTPControlProps } from "@ark-ui/react";
export type { PinInputLabelProps as InputOTPLabelProps } from "@ark-ui/react";

export const InputOTP = Object.assign(InputOTPShorthand, {
  Control,
  Input,
  Label,
  Root,
  Separator,
});
