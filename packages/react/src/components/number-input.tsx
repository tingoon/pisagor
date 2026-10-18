import { NumberInput as NumberInputPrimitive } from "@ark-ui/react";
import type {
  NumberInputControlProps as NumberInputControlPrimitiveProps,
  NumberInputRootProps as NumberInputRootPrimitiveProps,
  NumberInputScrubberProps,
} from "@ark-ui/react";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import type { NumberInputProps as BaseNumberInputProps } from "@pisagor/props";
import {
  formControlGroupShellRecipe,
  numberInputRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { Field } from "./field";
import { Input, type InputProps } from "./input";
import { useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: NumberInputStylesContext, useStyles: useNumberInput } =
  createSlotRecipeContext({
    name: "NumberInput",
    recipe: numberInputRecipe,
  });
// #endregion

// #region Types

export type NumberInputRootProps = Omit<
  NumberInputRootPrimitiveProps,
  "onValueChange"
> &
  BaseNumberInputProps;

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

export interface NumberInputControlProps extends NumberInputControlPrimitiveProps {
  variant?: FormControlVariant;
  clearable?: boolean;
}

export type NumberInputDecrementTriggerProps = ComponentProps<
  typeof NumberInputPrimitive.DecrementTrigger
>;

export type NumberInputIncrementTriggerProps = ComponentProps<
  typeof NumberInputPrimitive.IncrementTrigger
>;

// #endregion

// #region Parts
export function NumberInputRoot({
  size = "md",
  variant,
  clearable = false,
  children,
  placeholder,
  onValueChange,
  recipe = numberInputRecipe,
  className,
  ...rest
}: NumberInputProps) {
  const slots = recipe();

  return (
    <NumberInputStylesContext value={{ slots, variants: { size } as never }}>
      <NumberInputPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-size={size}
        onValueChange={
          onValueChange
            ? (details) => onValueChange(details.valueAsNumber)
            : undefined
        }
      >
        {children ?? (
          <NumberInputControl clearable={clearable} variant={variant}>
            <NumberInputDecrementTrigger />
            <NumberInputInput placeholder={placeholder} variant={variant} />
            {clearable && <NumberInputClearTrigger />}
            <NumberInputIncrementTrigger />
          </NumberInputControl>
        )}
      </NumberInputPrimitive.Root>
    </NumberInputStylesContext>
  );
}

export function NumberInputControl({
  variant: variantProp,
  clearable = false,
  className,
  ...rest
}: NumberInputControlProps) {
  const { slots, variants } = useNumberInput();
  const size = (variants as { size?: "sm" | "md" | "lg" } | undefined)?.size;
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };

  return (
    <NumberInputPrimitive.Control
      {...rest}
      {...controlProps}
      className={cn(
        slots.control(),
        formControlGroupShellRecipe({ size: size ?? "md", ...shellArgs }),
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

export function NumberInputDecrementTrigger({
  className,
  ...rest
}: NumberInputDecrementTriggerProps) {
  const { m } = useLocale();
  const { slots } = useNumberInput();

  return (
    <NumberInputPrimitive.DecrementTrigger
      {...rest}
      asChild
      className={slots.decrementTrigger({ className })}
    >
      <Button aria-label={m("numberInput.decrement")} variant="ghost">
        <MinusIcon aria-hidden />
      </Button>
    </NumberInputPrimitive.DecrementTrigger>
  );
}

export function NumberInputIncrementTrigger({
  className,
  ...rest
}: NumberInputIncrementTriggerProps) {
  const { m } = useLocale();
  const { slots } = useNumberInput();

  return (
    <NumberInputPrimitive.IncrementTrigger
      {...rest}
      asChild
      className={slots.incrementTrigger({ className })}
    >
      <Button aria-label={m("numberInput.increment")} variant="ghost">
        <PlusIcon aria-hidden />
      </Button>
    </NumberInputPrimitive.IncrementTrigger>
  );
}

export function NumberInputInput({
  size,
  variant,
  className,
  classNames,
  ...rest
}: InputProps) {
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

export function NumberInputScrubber({
  children,
  className,
  ...rest
}: NumberInputScrubberProps) {
  const { slots } = useNumberInput();

  return (
    <NumberInputPrimitive.Scrubber
      {...rest}
      asChild
      className={slots.scrubber({ className })}
    >
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

export type { NumberInputScrubberProps } from "@ark-ui/react";

export const NumberInput = Object.assign(NumberInputRoot, {
  ClearTrigger: NumberInputClearTrigger,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Input: NumberInputInput,
  Scrubber: NumberInputScrubber,
});
