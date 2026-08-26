import { NumberInput as NumberInputPrimitive } from "@ark-ui/react/number-input";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import {
  numberFieldControlVariants,
  numberFieldDecrementTriggerVariants,
  numberFieldIncrementTriggerVariants,
  numberFieldScrubberVariants,
  numberFieldVariants,
  numberInputInline2Variants,
  numberInputInlineVariants,
} from "@pisagor/styles/ui/number-input";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlGroupShellVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import { Button } from "../button";
import { Field } from "../field";
import { Input, type InputProps } from "../input";

// #region Types
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
  placeholder,
  children,
  onValueChange,
  className,
  ...rest
}: NumberInputProps) {
  return (
    <FormControlVariantProvider value={variant}>
      <NumberInputPrimitive.Root
        {...rest}
        className={numberFieldVariants({ className })}
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
    </FormControlVariantProvider>
  );
}

export function NumberInputControl({
  variant: variantProp,
  clearable = false,
  className,
  ...rest
}: NumberInputControlProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);

  return (
    <NumberInputPrimitive.Control
      {...rest}
      {...controlProps}
      className={cn(
        numberFieldControlVariants(),
        formControlGroupShellVariants({ size: "md", ...shellArgs }),
        className,
      )}
      data-clearable={clearable || undefined}
    />
  );
}

export function NumberInputClearTrigger() {
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
            className={numberInputInline2Variants()}
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
  return (
    <NumberInputPrimitive.DecrementTrigger
      {...rest}
      asChild
      className={numberFieldDecrementTriggerVariants({ className })}
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
  return (
    <NumberInputPrimitive.IncrementTrigger
      {...rest}
      asChild
      className={numberFieldIncrementTriggerVariants({ className })}
    >
      <Button aria-label="Increment" variant="ghost">
        <PlusIcon aria-hidden />
      </Button>
    </NumberInputPrimitive.IncrementTrigger>
  );
}

export function NumberInputInput({ size, variant, className, classNames, ...rest }: InputProps) {
  return (
    <NumberInputPrimitive.Input {...rest} asChild>
      <Input
        className={numberInputInlineVariants({ className })}
        classNames={classNames}
        size={size}
        variant={variant}
      />
    </NumberInputPrimitive.Input>
  );
}

export function NumberInputScrubber({ className, children, ...rest }: NumberInputScrubberProps) {
  return (
    <NumberInputPrimitive.Scrubber
      {...rest}
      asChild
      className={numberFieldScrubberVariants({ className })}
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
