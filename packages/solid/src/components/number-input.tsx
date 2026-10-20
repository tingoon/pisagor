import { NumberInput as NumberInputPrimitive } from "@ark-ui/solid";
import type {
  NumberInputControlProps as NumberInputControlPrimitiveProps,
  NumberInputDecrementTriggerProps as NumberInputDecrementTriggerPrimitiveProps,
  NumberInputIncrementTriggerProps as NumberInputIncrementTriggerPrimitiveProps,
  NumberInputInputProps as NumberInputInputPrimitiveProps,
  NumberInputLabelProps,
  NumberInputRootProps as NumberInputRootPrimitiveProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
} from "@ark-ui/solid";
import type {
  NumberInputContract,
  NumberInputRootContract,
} from "@pisagor/contracts";
import { numberInputRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { MinusIcon, PlusIcon, createSlotRecipeContext } from "../internal";
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
  label?: JSX.Element;
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
function Root(props: NumberInputRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onValueChange"]);

  return (
    <RootBase
      {...rest}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.valueAsNumber)
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
function DecrementTrigger(
  props: NumberInputDecrementTriggerProps,
): JSX.Element {
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
function IncrementTrigger(
  props: NumberInputIncrementTriggerProps,
): JSX.Element {
  const { m } = useLocale();

  return (
    <IncrementTriggerBase aria-label={m("numberInput.increment")} {...props} />
  );
}

/** Clears the value; renders nothing while empty. Not an Ark part. */
function ClearTrigger(props: { class?: string }): JSX.Element {
  const styles = useStyles();

  return (
    <NumberInputPrimitive.Context>
      {(api) => {
        const hasValue = () => {
          const value = api().value;

          return (
            value !== undefined && value !== null && String(value).length > 0
          );
        };

        return (
          <Show when={hasValue()}>
            <TextInput.ClearButton
              class={styles.slots.clearTrigger({ class: props.class })}
              onClear={() => api().clearValue()}
            />
          </Show>
        );
      }}
    </NumberInputPrimitive.Context>
  );
}
// #endregion

// #region Shorthand
export function NumberInputShorthand(props: NumberInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "classNames",
    "clearable",
    "inputProps",
    "label",
    "placeholder",
    "showTriggers",
  ]);
  const clearable = () => local.clearable ?? false;
  const showTriggers = () => local.showTriggers ?? true;

  return (
    <Root {...rest}>
      <Show when={local.label !== undefined}>
        <Scrubber
          asChild={(scrubberProps) => (
            <Label
              {...scrubberProps()}
              asChild={(labelProps) => (
                <Field.Label {...labelProps()}>{local.label}</Field.Label>
              )}
            />
          )}
          class={local.classNames?.scrubber}
        />
      </Show>

      <Control
        class={local.classNames?.control}
        data-clearable={clearable() || undefined}
      >
        <Show when={showTriggers()}>
          <DecrementTrigger
            asChild={(triggerProps) => (
              <Button {...triggerProps()} variant="ghost">
                <MinusIcon aria-hidden />
              </Button>
            )}
            class={local.classNames?.decrementTrigger}
          />
        </Show>

        <Input
          asChild={(inputProps) => (
            <TextInput
              {...inputProps(local.inputProps)}
              placeholder={local.placeholder}
            />
          )}
          class={local.classNames?.input}
        />

        <Show when={clearable()}>
          <ClearTrigger class={local.classNames?.clearTrigger} />
        </Show>

        <Show when={showTriggers()}>
          <IncrementTrigger
            asChild={(triggerProps) => (
              <Button {...triggerProps()} variant="ghost">
                <PlusIcon aria-hidden />
              </Button>
            )}
            class={local.classNames?.incrementTrigger}
          />
        </Show>
      </Control>
    </Root>
  );
}
// #endregion

export type {
  NumberInputLabelProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
} from "@ark-ui/solid";

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
