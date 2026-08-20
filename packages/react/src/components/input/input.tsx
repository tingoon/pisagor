import { FieldInput as InputPrimitive } from "@ark-ui/react/field";
import {
  type InputRootVariantProps,
  type InputSlots,
  inputRootVariants,
  inputVariants,
} from "@pisagor/styles/ui/input";
import { cn } from "@pisagor/utils";
import type { ChangeEventHandler, ComponentProps } from "react";
import { useClearableInput } from "../../hooks";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { InputGroupRoot } from "../input-group/input-group-core";
import { InputClearAddon } from "./input-clear-button";

// #region Types
type InputClassNames = VariantClassNames<InputSlots>;

type InputVariantProps = InputRootVariantProps;

type InputRootProps = Omit<ComponentProps<typeof InputPrimitive>, "size">;

export interface InputProps extends InputRootProps, InputVariantProps, WithTestId {
  /**
   * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
   *
   * @remarks
   * Inside `Surface`, controls default to `secondary` unless overridden.
   */
  variant?: FormControlVariant;
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   *
   * @remarks
   * In controlled mode, pass `value` and update it via `onChange` or `onValueChange` when clearing.
   */
  clearable?: boolean;
  /** Called with the string value when the input changes. */
  onValueChange?: (value: string) => void;
  /** Slot class names */
  classNames?: InputClassNames;
}
// #endregion

// #region Part
export function Input({
  size = "md",
  variant: variantProp,
  type = "text",
  clearable = false,
  value,
  defaultValue,
  disabled,
  readOnly,
  onChange,
  onValueChange,
  className,
  classNames,
  ref,
  testId,
  ...rest
}: InputProps) {
  const resolved = useFormControlVariant(variantProp);

  const { canClear, handleChange, handleClear, mergedRef } = useClearableInput({
    clearable: clearable && type !== "file" && type !== "password",
    defaultValue,
    disabled,
    onChange,
    onValueChange,
    readOnly,
    ref,
    type,
    value,
  });

  const skipClearable = !clearable || type === "file" || type === "password";
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const slots = inputVariants();

  const changeHandler: ChangeEventHandler<HTMLInputElement> | undefined = skipClearable
    ? onChange || onValueChange
      ? (event) => {
          onChange?.(event);
          onValueChange?.(event.target.value);
        }
      : undefined
    : handleChange;

  if (skipClearable) {
    return (
      <InputPrimitive
        {...rest}
        ref={ref}
        {...controlProps}
        className={inputRootVariants({ className, size, ...shellArgs })}
        data-size={size}
        data-testid={testId}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={changeHandler}
        readOnly={readOnly}
        type={type}
        value={value}
      />
    );
  }

  return (
    <InputGroupRoot size={size} variant={variantProp}>
      <InputPrimitive
        {...rest}
        className={slots.clearableRoot({ className: cn(className, classNames?.clearableRoot) })}
        data-size={size}
        data-testid={testId}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={handleChange}
        readOnly={readOnly}
        ref={mergedRef}
        type={type}
        value={value}
      />
      {canClear ? <InputClearAddon onClear={handleClear} /> : null}
    </InputGroupRoot>
  );
}
// #endregion

// #region Display Names
Input.displayName = "Input";
// #endregion
