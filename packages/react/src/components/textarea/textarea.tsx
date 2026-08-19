import { Field as FieldPrimitive } from "@ark-ui/react/field";
import { textareaInlineVariants, textareaVariants } from "@pisagor/styles/ui/textarea";
import { cn } from "@pisagor/utils";
import type { ChangeEventHandler, ComponentProps } from "react";
import { useClearableInput } from "../../hooks";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlShellVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Input } from "../input";
import { InputGroupAddon, InputGroupRoot } from "../input-group/input-group-core";

// #region Variants

// #endregion

// #region Types
type TextareaClassNames = VariantClassNames<typeof textareaVariants>;

type TextareaRootProps = ComponentProps<typeof FieldPrimitive.Textarea>;

export interface TextareaProps extends TextareaRootProps, WithTestId {
  /**
   * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
   */
  variant?: FormControlVariant;
  /**
   * Whether to show a clear button when the textarea has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Called with the string value when the textarea changes. */
  onValueChange?: (value: string) => void;
  /** Slot class names */
  classNames?: TextareaClassNames;
}
// #endregion

// #region Component
export function Textarea({
  variant: variantProp,
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
}: TextareaProps) {
  const resolved = useFormControlVariant(variantProp);

  const { canClear, handleChange, handleClear, mergedRef } = useClearableInput({
    clearable,
    defaultValue,
    disabled,
    onChange,
    onValueChange,
    readOnly,
    ref,
    value,
  });

  const skipClearable = !clearable;
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const slots = textareaVariants();

  const changeHandler: ChangeEventHandler<HTMLTextAreaElement> | undefined = skipClearable
    ? onChange || onValueChange
      ? (event) => {
          onChange?.(event);
          onValueChange?.(event.target.value);
        }
      : undefined
    : handleChange;

  if (skipClearable) {
    return (
      <FieldPrimitive.Textarea
        {...rest}
        ref={ref}
        {...controlProps}
        className={cn(
          formControlShellVariants({ size: "md", ...shellArgs }),
          slots.rootLayout(),
          className,
          classNames?.rootLayout,
        )}
        data-testid={testId}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={changeHandler}
        readOnly={readOnly}
        value={value}
      />
    );
  }

  return (
    <InputGroupRoot className={cn(slots.group(), classNames?.group)} variant={variantProp}>
      <FieldPrimitive.Textarea
        {...rest}
        className={cn(
          slots.clearableRoot(),
          canClear && "pe-9",
          className,
          classNames?.clearableRoot,
        )}
        data-testid={testId}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={handleChange}
        readOnly={readOnly}
        ref={mergedRef}
        value={value}
      />
      {canClear ? (
        <InputGroupAddon align="inline-end" className={textareaInlineVariants()}>
          <Input.ClearButton onClear={handleClear} />
        </InputGroupAddon>
      ) : null}
    </InputGroupRoot>
  );
}
// #endregion
