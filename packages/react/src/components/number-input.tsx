import { NumberInput as NumberInputPrimitive } from "@ark-ui/react";
import type {
  NumberInputControlProps as NumberInputControlPrimitiveProps,
  NumberInputDecrementTriggerProps as NumberInputDecrementTriggerPrimitiveProps,
  NumberInputIncrementTriggerProps as NumberInputIncrementTriggerPrimitiveProps,
  NumberInputInputProps as NumberInputInputPrimitiveProps,
  NumberInputRootProps as NumberInputRootPrimitiveProps,
  NumberInputScrubberProps,
} from "@ark-ui/react";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import type { NumberInputRootContract } from "@pisagor/contracts";
import { numberInputRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";
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

function Root({
  clearable = false,
  children,
  placeholder,
  onValueChange,
  ...rest
}: NumberInputProps) {
  return (
    <RootBase
      {...rest}
      onValueChange={
        onValueChange
          ? (details) => onValueChange(details.valueAsNumber)
          : undefined
      }
    >
      {children ?? (
        <Control data-clearable={clearable || undefined}>
          <DecrementTrigger />
          <InputPart placeholder={placeholder} />
          {clearable ? <ClearTrigger /> : null}
          <IncrementTrigger />
        </Control>
      )}
    </RootBase>
  );
}

const Control = withContext<NumberInputControlPrimitiveProps>(
  NumberInputPrimitive.Control,
  {
    name: "Control",
  },
);

function ClearTrigger() {
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
          <Input.ClearButton
            className={slots.clearTrigger()}
            onClear={() => api.clearValue()}
          />
        );
      }}
    </NumberInputPrimitive.Context>
  );
}

const DecrementTriggerBase = withContext<NumberInputDecrementTriggerProps>(
  NumberInputPrimitive.DecrementTrigger,
  { name: "DecrementTrigger" },
);

function DecrementTrigger({
  className,
  ...rest
}: NumberInputDecrementTriggerProps) {
  const { m } = useLocale();

  return (
    <DecrementTriggerBase {...rest} asChild className={className}>
      <Button aria-label={m("numberInput.decrement")} variant="ghost">
        <MinusIcon aria-hidden />
      </Button>
    </DecrementTriggerBase>
  );
}

const IncrementTriggerBase = withContext<NumberInputIncrementTriggerProps>(
  NumberInputPrimitive.IncrementTrigger,
  { name: "IncrementTrigger" },
);

function IncrementTrigger({
  className,
  ...rest
}: NumberInputIncrementTriggerProps) {
  const { m } = useLocale();

  return (
    <IncrementTriggerBase {...rest} asChild className={className}>
      <Button aria-label={m("numberInput.increment")} variant="ghost">
        <PlusIcon aria-hidden />
      </Button>
    </IncrementTriggerBase>
  );
}

function InputPart({
  size,
  variant,
  className,
  classNames,
  ...rest
}: NumberInputInputPartProps) {
  const { slots } = useStyles();

  return (
    <NumberInputPrimitive.Input {...rest} asChild>
      <Input
        className={slots.input({ className })}
        classNames={classNames}
        size={size}
        variant={variant}
      />
    </NumberInputPrimitive.Input>
  );
}

const ScrubberBase = withContext<NumberInputScrubberProps>(
  NumberInputPrimitive.Scrubber,
  {
    name: "Scrubber",
  },
);

function Scrubber({ children, className, ...rest }: NumberInputScrubberProps) {
  return (
    <ScrubberBase {...rest} asChild className={className}>
      <NumberInputPrimitive.Label asChild>
        <Field.Label>{children}</Field.Label>
      </NumberInputPrimitive.Label>
    </ScrubberBase>
  );
}
// #endregion

export type { NumberInputScrubberProps } from "@ark-ui/react";

export const NumberInput = Object.assign(Root, {
  ClearTrigger,
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input: InputPart,
  Scrubber,
});
