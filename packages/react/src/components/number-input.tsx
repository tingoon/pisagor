import { NumberInput as NumberInputPrimitive } from "@ark-ui/react";
import type {
  NumberInputControlProps as NumberInputControlPrimitiveProps,
  NumberInputDecrementTriggerProps as NumberInputDecrementTriggerPrimitiveProps,
  NumberInputIncrementTriggerProps as NumberInputIncrementTriggerPrimitiveProps,
  NumberInputInputProps as NumberInputInputPrimitiveProps,
  NumberInputLabelProps,
  NumberInputRootProps as NumberInputRootPrimitiveProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
} from "@ark-ui/react";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import type {
  NumberInputContract,
  NumberInputRootContract,
} from "@pisagor/contracts";
import { numberInputRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";
import type { ReactNode } from "react";
import { Button } from "./button";
import { Field } from "./field";
import { Input as TextInput, type InputProps } from "./input";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "NumberInput",
  recipe: numberInputRecipe,
});
// #endregion

// #region Types
type NumberInputRootBaseProps = NumberInputRootPrimitiveProps &
  NumberInputRootContract;

export type NumberInputRootProps = Omit<
  NumberInputRootBaseProps,
  "onValueChange"
> & {
  /** Called with the numeric value when the input changes. */
  onValueChange?: (value: number) => void;
};

export interface NumberInputProps
  extends Omit<NumberInputRootProps, "children">, NumberInputContract {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Scrubbable label rendered above the control. */
  label?: ReactNode;
  /** Placeholder text for the input. */
  placeholder?: string;
  /** Props forwarded to the text input. */
  inputProps?: Omit<InputProps, "placeholder" | "size" | "variant">;
  /**
   * Whether to render the decrement and increment buttons.
   *
   * @defaultValue true
   */
  showTriggers?: boolean;
}

export type NumberInputDecrementTriggerProps =
  NumberInputDecrementTriggerPrimitiveProps;

export type NumberInputIncrementTriggerProps =
  NumberInputIncrementTriggerPrimitiveProps;

export type NumberInputInputProps = NumberInputInputPrimitiveProps;
// #endregion

// #region Parts
const RootBase = withProvider<NumberInputRootBaseProps>(
  NumberInputPrimitive.Root,
  { name: "Root" },
);

/** Root; `onValueChange` receives the numeric value. */
function Root({ onValueChange, ...rest }: NumberInputRootProps) {
  return (
    <RootBase
      {...rest}
      onValueChange={
        onValueChange
          ? (details) => onValueChange(details.valueAsNumber)
          : undefined
      }
    />
  );
}

const Label = withContext<NumberInputLabelProps>(NumberInputPrimitive.Label, {
  name: "Label",
});

const Scrubber = withContext<NumberInputScrubberProps>(
  NumberInputPrimitive.Scrubber,
  { name: "Scrubber" },
);

const Control = withContext<NumberInputControlPrimitiveProps>(
  NumberInputPrimitive.Control,
  { name: "Control" },
);

const Input = withContext<NumberInputInputProps>(NumberInputPrimitive.Input, {
  name: "Input",
});

const ValueText = withContext<NumberInputValueTextProps>(
  NumberInputPrimitive.ValueText,
  { name: "ValueText" },
);

const DecrementTriggerBase = withContext<NumberInputDecrementTriggerProps>(
  NumberInputPrimitive.DecrementTrigger,
  { name: "DecrementTrigger" },
);

/** Decrement trigger with a localized default `aria-label`. */
function DecrementTrigger(props: NumberInputDecrementTriggerProps) {
  const { m } = useLocale();

  return (
    <DecrementTriggerBase aria-label={m("numberInput.decrement")} {...props} />
  );
}

const IncrementTriggerBase = withContext<NumberInputIncrementTriggerProps>(
  NumberInputPrimitive.IncrementTrigger,
  { name: "IncrementTrigger" },
);

/** Increment trigger with a localized default `aria-label`. */
function IncrementTrigger(props: NumberInputIncrementTriggerProps) {
  const { m } = useLocale();

  return (
    <IncrementTriggerBase aria-label={m("numberInput.increment")} {...props} />
  );
}

/** Clears the value; renders nothing while empty. Not an Ark part. */
function ClearTrigger({ className }: { className?: string }) {
  const { slots } = useStyles();

  return (
    <NumberInputPrimitive.Context>
      {(api) => {
        const hasValue =
          api.value !== undefined &&
          api.value !== null &&
          String(api.value).length > 0;

        if (!hasValue) {
          return null;
        }

        return (
          <TextInput.ClearButton
            className={slots.clearTrigger({ className })}
            onClear={() => api.clearValue()}
          />
        );
      }}
    </NumberInputPrimitive.Context>
  );
}
// #endregion

// #region Shorthand
export function NumberInputShorthand({
  classNames,
  clearable = false,
  inputProps,
  label,
  placeholder,
  showTriggers = true,
  ...rest
}: NumberInputProps) {
  return (
    <Root {...rest}>
      {label !== undefined && (
        <Scrubber asChild className={classNames?.scrubber}>
          <Label asChild>
            <Field.Label>{label}</Field.Label>
          </Label>
        </Scrubber>
      )}

      <Control
        className={classNames?.control}
        data-clearable={clearable || undefined}
      >
        {showTriggers && (
          <DecrementTrigger asChild className={classNames?.decrementTrigger}>
            <Button variant="ghost">
              <MinusIcon aria-hidden />
            </Button>
          </DecrementTrigger>
        )}

        <Input asChild className={classNames?.input}>
          <TextInput {...inputProps} placeholder={placeholder} />
        </Input>

        {clearable && <ClearTrigger className={classNames?.clearTrigger} />}

        {showTriggers && (
          <IncrementTrigger asChild className={classNames?.incrementTrigger}>
            <Button variant="ghost">
              <PlusIcon aria-hidden />
            </Button>
          </IncrementTrigger>
        )}
      </Control>
    </Root>
  );
}
// #endregion

export type {
  NumberInputLabelProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
} from "@ark-ui/react";

export const NumberInput = Object.assign(NumberInputShorthand, {
  ClearTrigger,
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input,
  Label,
  Root,
  Scrubber,
  ValueText,
});
