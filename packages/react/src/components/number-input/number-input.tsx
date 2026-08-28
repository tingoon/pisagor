import { NumberInput as NumberInputPrimitive } from "@ark-ui/react/number-input";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { formControlGroupShellVariants } from "@pisagor/recipes/form-control";
import { numberInputVariants } from "@pisagor/recipes/number-input";
import type { ComponentProps } from "react";
import { cn } from "../../internal/utils";
import { Button } from "../button";
import { Field } from "../field";
import { Input, type InputProps } from "../input";
import { NumberInputContext, useNumberInput } from "./number-input.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

export type NumberInputRootProps = Omit<
  ComponentProps<typeof NumberInputPrimitive.Root>,
  "onValueChange"
> &
  Pick<InputProps, "size" | "variant">;

export interface NumberInputProps extends NumberInputRootProps {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Placeholder text for the auto-rendered input */
  placeholder?: string;
  /** Called with the numeric value when the input changes. */
  onValueChange?: (value: number) => void;
}

export type NumberInputControlProps = ComponentProps<typeof NumberInputPrimitive.Control> & {
  variant?: FormControlVariant;
  clearable?: boolean;
};

export type NumberInputDecrementTriggerProps = ComponentProps<
  typeof NumberInputPrimitive.DecrementTrigger
>;

export type NumberInputIncrementTriggerProps = ComponentProps<
  typeof NumberInputPrimitive.IncrementTrigger
>;

export type NumberInputScrubberProps = ComponentProps<typeof NumberInputPrimitive.Scrubber>;
// #endregion

// #region Parts
export function NumberInputRoot({
  size = "md",
  variant,
  clearable = false,
  children,
  placeholder,
  onValueChange,
  className,
  ...rest
}: NumberInputProps) {
  const slots = numberInputVariants();

  return (
    <NumberInputContext value={{ slots }}>
      <NumberInputPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-size={size}
        onValueChange={
          onValueChange ? (details) => onValueChange(Number(details.value)) : undefined
        }
      >
        {children ?? (
          <NumberInputControl clearable={clearable} variant={variant}>
            <NumberInputDecrementTrigger />
            <NumberInputInput placeholder={placeholder} variant={variant} />
            <NumberInputClearTrigger />
            <NumberInputIncrementTrigger />
          </NumberInputControl>
        )}
      </NumberInputPrimitive.Root>
    </NumberInputContext>
  );
}

export function NumberInputControl({
  variant: variantProp,
  clearable = false,
  className,
  ...rest
}: NumberInputControlProps) {
  const { slots } = useNumberInput();
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };

  return (
    <NumberInputPrimitive.Control
      {...rest}
      {...controlProps}
      className={cn(
        slots.control(),
        formControlGroupShellVariants({ size: "md", ...shellArgs }),
        className,
      )}
      data-clearable={clearable || undefined}
    />
  );
}

export function NumberInputClearTrigger() {
  const { slots } = useNumberInput();

  return (
    <NumberInputPrimitive.Context>
      {(api) => {
        const hasValue =
          api.value !== undefined && api.value !== null && String(api.value).length > 0;

        if (!hasValue) {
          return null;
        }

        return (
          <Input.ClearButton
            className={slots.clearTrigger()}
            onClear={() => api.setValue(Number.NaN)}
          />
        );
      }}
    </NumberInputPrimitive.Context>
  );
}

export function NumberInputDecrementTrigger({
  className,
  ...rest
}: NumberInputDecrementTriggerProps) {
  const { slots } = useNumberInput();

  return (
    <NumberInputPrimitive.DecrementTrigger
      {...rest}
      asChild
      className={slots.decrementTrigger({ className })}
    >
      <Button aria-label="Decrement" variant="ghost">
        <MinusIcon aria-hidden />
      </Button>
    </NumberInputPrimitive.DecrementTrigger>
  );
}

export function NumberInputIncrementTrigger({
  className,
  ...rest
}: NumberInputIncrementTriggerProps) {
  const { slots } = useNumberInput();

  return (
    <NumberInputPrimitive.IncrementTrigger
      {...rest}
      asChild
      className={slots.incrementTrigger({ className })}
    >
      <Button aria-label="Increment" variant="ghost">
        <PlusIcon aria-hidden />
      </Button>
    </NumberInputPrimitive.IncrementTrigger>
  );
}

export function NumberInputInput({ size, variant, className, classNames, ...rest }: InputProps) {
  const { slots } = useNumberInput();

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

export function NumberInputScrubber({ children, className, ...rest }: NumberInputScrubberProps) {
  const { slots } = useNumberInput();

  return (
    <NumberInputPrimitive.Scrubber {...rest} asChild className={slots.scrubber({ className })}>
      <NumberInputPrimitive.Label asChild>
        <Field.Label>{children}</Field.Label>
      </NumberInputPrimitive.Label>
    </NumberInputPrimitive.Scrubber>
  );
}
// #endregion

// #region Display Names
NumberInputRoot.displayName = "NumberInput";
NumberInputControl.displayName = "NumberInput.Control";
NumberInputClearTrigger.displayName = "NumberInput.ClearTrigger";
NumberInputDecrementTrigger.displayName = "NumberInput.DecrementTrigger";
NumberInputIncrementTrigger.displayName = "NumberInput.IncrementTrigger";
NumberInputInput.displayName = "NumberInput.Input";
NumberInputScrubber.displayName = "NumberInput.Scrubber";
// #endregion
