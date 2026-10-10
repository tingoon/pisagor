import {
  NumberInput as NumberInputPrimitive,
  type NumberInputControlProps as NumberInputPrimitiveControlProps,
  type NumberInputRootProps as NumberInputPrimitiveRootProps,
  type NumberInputScrubberProps,
} from "@ark-ui/solid/number-input";
import type { NumberInputProps as BaseNumberInputProps } from "@pisagor/props";
import {
  formControlGroupShellRecipe,
  numberInputRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { MinusIcon, PlusIcon } from "../internal/icons";
import { Button } from "./button";
import { Input, type InputProps } from "./input";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: NumberInputStylesContext, useStyles: useNumberInput } =
  createSlotRecipeContext({
    name: "NumberInput",
    recipe: numberInputRecipe,
  });
// #endregion

type FormControlVariant = "primary" | "secondary";

export type NumberInputRootProps = Omit<
  NumberInputPrimitiveRootProps,
  "onValueChange"
> &
  Pick<InputProps, "size" | "variant">;

export interface NumberInputProps
  extends NumberInputRootProps,
    BaseNumberInputProps {
  clearable?: boolean;
  placeholder?: string;
  onValueChange?: (value: number) => void;
}

export interface NumberInputControlProps
  extends NumberInputPrimitiveControlProps {
  variant?: FormControlVariant;
  clearable?: boolean;
}

export type NumberInputDecrementTriggerProps = ComponentProps<
  typeof NumberInputPrimitive.DecrementTrigger
>;

export type NumberInputIncrementTriggerProps = ComponentProps<
  typeof NumberInputPrimitive.IncrementTrigger
>;

export function NumberInputRoot(props: NumberInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "clearable",
    "children",
    "placeholder",
    "onValueChange",
    "recipe",
    "class",
  ]);
  const size = () => local.size ?? "md";
  const clearable = () => local.clearable ?? false;

  const slots = createMemo(() => (local.recipe ?? numberInputRecipe)());

  return (
    <NumberInputStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <NumberInputPrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
        data-size={size()}
        onValueChange={
          local.onValueChange
            ? (details) => local.onValueChange?.(Number(details.value))
            : undefined
        }
      >
        <Show
          fallback={
            <NumberInputControl clearable={clearable()} variant={local.variant}>
              <NumberInputDecrementTrigger />
              <NumberInputInput
                placeholder={local.placeholder}
                variant={local.variant}
              />
              <NumberInputClearTrigger />
              <NumberInputIncrementTrigger />
            </NumberInputControl>
          }
          when={local.children}
        >
          {local.children}
        </Show>
      </NumberInputPrimitive.Root>
    </NumberInputStylesContext>
  );
}

export function NumberInputControl(
  props: NumberInputControlProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "clearable", "class"]);
  const styles = useNumberInput();
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);

  return (
    <NumberInputPrimitive.Control
      {...rest}
      class={cn(
        styles.slots.control(),
        formControlGroupShellRecipe({
          size: "md",
          surfaceVariant,
          variant: variant(),
        }),
        local.class,
      )}
      data-clearable={local.clearable || undefined}
      data-variant={variant()}
    />
  );
}

export function NumberInputClearTrigger(): JSX.Element {
  const styles = useNumberInput();

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
              class={styles.slots.clearTrigger()}
              onClear={() => api().setValue(Number.NaN)}
            />
          </Show>
        );
      }}
    </NumberInputPrimitive.Context>
  );
}

export function NumberInputDecrementTrigger(
  props: NumberInputDecrementTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useNumberInput();

  return (
    <NumberInputPrimitive.DecrementTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: styles.slots.decrementTrigger({ class: local.class }),
          })}
          aria-label="Decrement"
          variant="ghost"
        >
          <MinusIcon />
        </Button>
      )}
    />
  );
}

export function NumberInputIncrementTrigger(
  props: NumberInputIncrementTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useNumberInput();

  return (
    <NumberInputPrimitive.IncrementTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: styles.slots.incrementTrigger({ class: local.class }),
          })}
          aria-label="Increment"
          variant="ghost"
        >
          <PlusIcon />
        </Button>
      )}
    />
  );
}

export function NumberInputInput(props: InputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "class",
    "classNames",
  ]);
  const styles = useNumberInput();

  return (
    <NumberInputPrimitive.Input
      asChild={(inputProps) => (
        <Input
          {...inputProps({ class: styles.slots.input({ class: local.class }) })}
          {...rest}
          classNames={local.classNames}
          size={local.size}
          variant={local.variant}
        />
      )}
    />
  );
}

export function NumberInputScrubber(
  props: NumberInputScrubberProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useNumberInput();

  return (
    <NumberInputPrimitive.Scrubber
      {...rest}
      class={styles.slots.scrubber({ class: local.class })}
    >
      <NumberInputPrimitive.Label>{local.children}</NumberInputPrimitive.Label>
    </NumberInputPrimitive.Scrubber>
  );
}

export type { NumberInputScrubberProps } from "@ark-ui/solid/number-input";

export const NumberInput = Object.assign(NumberInputRoot, {
  ClearTrigger: NumberInputClearTrigger,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Input: NumberInputInput,
  Scrubber: NumberInputScrubber,
});
