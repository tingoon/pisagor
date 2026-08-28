import { FieldInput as InputPrimitive } from "@ark-ui/react/field";
import {
  type InputRootVariantProps,
  type InputSlots,
  inputRootVariants,
  inputVariants,
} from "@pisagor/recipes/input";
import type { ChangeEventHandler, ComponentProps } from "react";
import { useClearableInput } from "../../internal/hooks";
import type { VariantClassNames } from "../../internal/types";
import { cn } from "../../internal/utils";
import { InputGroupRoot } from "../input-group/input-group-core";
import { InputClearAddon } from "./input-clear-button";

// #region Types
type FormControlVariant = "primary" | "secondary";

type InputClassNames = VariantClassNames<InputSlots>;

type InputVariantProps = InputRootVariantProps;

type InputRootProps = Omit<ComponentProps<typeof InputPrimitive>, "size">;

export interface InputProps extends InputRootProps, InputVariantProps {
  /**
   * Visual shell variant. Defaults to `primary`.
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
  clearable = false,
  defaultValue,
  disabled,
  readOnly,
  type = "text",
  value,
  ref,
  onChange,
  onValueChange,
  className,
  classNames,
  ...rest
}: InputProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };

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
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };
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
        {...controlProps}
        className={inputRootVariants({ className, size, ...shellArgs })}
        data-size={size}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={changeHandler}
        readOnly={readOnly}
        ref={ref}
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
