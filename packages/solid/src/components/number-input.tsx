import { NumberInput as NumberInputPrimitive } from "@ark-ui/solid";
import type {
  NumberInputControlProps as NumberInputControlPrimitiveProps,
  NumberInputDecrementTriggerProps as NumberInputDecrementTriggerPrimitiveProps,
  NumberInputIncrementTriggerProps as NumberInputIncrementTriggerPrimitiveProps,
  NumberInputInputProps as NumberInputInputPrimitiveProps,
  NumberInputRootProps as NumberInputRootPrimitiveProps,
  NumberInputScrubberProps,
} from "@ark-ui/solid";
import type { NumberInputRootContract } from "@pisagor/contracts";
import { numberInputRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { MinusIcon, PlusIcon, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { Field } from "./field";
import { Input, type InputProps } from "./input";
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

type NumberInputRootProps = Omit<NumberInputRootBaseProps, "onValueChange"> & {
  /** Called with the numeric value when the input changes. */
  onValueChange?: (value: number) => void;
};

export interface NumberInputProps extends NumberInputRootProps {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Placeholder text for the auto-rendered input */
  placeholder?: string;
}

type NumberInputControlProps = NumberInputControlPrimitiveProps & {
  clearable?: boolean;
};

type NumberInputDecrementTriggerProps =
  NumberInputDecrementTriggerPrimitiveProps;

type NumberInputIncrementTriggerProps =
  NumberInputIncrementTriggerPrimitiveProps;

type NumberInputInputPartProps = NumberInputInputPrimitiveProps &
  Pick<InputProps, "classNames" | "size" | "variant">;
// #endregion

// #region Parts
const RootBase = withProvider<NumberInputRootBaseProps>(
  NumberInputPrimitive.Root,
  { name: "Root" },
);

function Root(props: NumberInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "clearable",
    "children",
    "placeholder",
    "onValueChange",
  ]);
  const clearable = () => local.clearable ?? false;

  return (
    <RootBase
      {...rest}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.valueAsNumber)
          : undefined
      }
    >
      <Show
        fallback={
          <Control clearable={clearable()}>
            <DecrementTrigger />
            <InputPart placeholder={local.placeholder} />
            <Show when={clearable()}>
              <ClearTrigger />
            </Show>
            <IncrementTrigger />
          </Control>
        }
        when={local.children}
      >
        {local.children}
      </Show>
    </RootBase>
  );
}

const ControlBase = withContext<NumberInputControlProps>(
  NumberInputPrimitive.Control,
  {
    name: "Control",
  },
);

function Control(props: NumberInputControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable"]);

  return (
    <ControlBase {...rest} data-clearable={local.clearable || undefined} />
  );
}

function ClearTrigger(): JSX.Element {
  const { slots } = useStyles();

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
            <Input.ClearButton
              class={slots.clearTrigger()}
              onClear={() => api().clearValue()}
            />
          </Show>
        );
      }}
    </NumberInputPrimitive.Context>
  );
}

const DecrementTriggerBase = withContext<NumberInputDecrementTriggerProps>(
  NumberInputPrimitive.DecrementTrigger,
  { name: "DecrementTrigger" },
);

function DecrementTrigger(
  props: NumberInputDecrementTriggerProps,
): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <DecrementTriggerBase
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({ class: local.class })}
          aria-label={m("numberInput.decrement")}
          variant="ghost"
        >
          <MinusIcon aria-hidden />
        </Button>
      )}
    />
  );
}

const IncrementTriggerBase = withContext<NumberInputIncrementTriggerProps>(
  NumberInputPrimitive.IncrementTrigger,
  { name: "IncrementTrigger" },
);

function IncrementTrigger(
  props: NumberInputIncrementTriggerProps,
): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <IncrementTriggerBase
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({ class: local.class })}
          aria-label={m("numberInput.increment")}
          variant="ghost"
        >
          <PlusIcon aria-hidden />
        </Button>
      )}
    />
  );
}

function InputPart(props: NumberInputInputPartProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "class",
    "classNames",
  ]);
  const { slots } = useStyles();

  return (
    <NumberInputPrimitive.Input
      {...rest}
      asChild={(inputProps) => (
        <Input
          {...inputProps({ class: slots.input({ class: local.class }) })}
          classNames={local.classNames}
          size={local.size}
          variant={local.variant}
        />
      )}
    />
  );
}

const ScrubberBase = withContext<NumberInputScrubberProps>(
  NumberInputPrimitive.Scrubber,
  {
    name: "Scrubber",
  },
);

function Scrubber(props: NumberInputScrubberProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);

  return (
    <ScrubberBase
      {...rest}
      asChild={(scrubberProps) => (
        <NumberInputPrimitive.Label
          {...scrubberProps({ class: local.class })}
          asChild={(labelProps) => (
            <Field.Label {...labelProps()}>{local.children}</Field.Label>
          )}
        />
      )}
    />
  );
}
// #endregion

export type { NumberInputScrubberProps } from "@ark-ui/solid";

export const NumberInput = Object.assign(Root, {
  ClearTrigger,
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input: InputPart,
  Scrubber,
});
