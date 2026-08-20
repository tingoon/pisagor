import { Field as FieldPrimitive } from "@ark-ui/react/field";
import {
  type TextareaSlots,
  textareaInlineVariants,
  textareaVariants,
} from "@pisagor/styles/ui/textarea";
import { cn } from "@pisagor/utils";
import type { ChangeEventHandler, ComponentProps, ReactNode } from "react";
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
import { TextareaContext, useTextarea } from "./textarea.context";

// #region Types
type TextareaClassNames = VariantClassNames<TextareaSlots>;

type TextareaRootProps = ComponentProps<typeof FieldPrimitive.Textarea> &
  WithTestId & {
    /**
     * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
     */
    variant?: FormControlVariant;
  };

export interface TextareaProps extends TextareaRootProps {
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

// #region Parts
function TextareaProvider({ children }: { children: ReactNode }) {
  const slots = textareaVariants();

  return <TextareaContext value={{ slots }}>{children}</TextareaContext>;
}

function TextareaField({
  className,
  classNames,
  testId,
  variant: variantProp,
  ...rest
}: TextareaRootProps & { classNames?: TextareaClassNames }) {
  const { slots } = useTextarea();
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);

  return (
    <FieldPrimitive.Textarea
      {...rest}
      {...controlProps}
      className={cn(
        formControlShellVariants({ size: "md", ...shellArgs }),
        slots.rootLayout({ className: cn(className, classNames?.rootLayout) }),
      )}
      data-testid={testId}
    />
  );
}

function TextareaGroup({
  children,
  className,
  variant,
}: {
  children: ReactNode;
  className?: string;
  variant?: FormControlVariant;
}) {
  const { slots } = useTextarea();

  return (
    <InputGroupRoot className={slots.group({ className })} variant={variant}>
      {children}
    </InputGroupRoot>
  );
}

function TextareaClearableField({
  canClear,
  className,
  classNames,
  testId,
  ...rest
}: TextareaRootProps & { canClear?: boolean; classNames?: TextareaClassNames }) {
  const { slots } = useTextarea();

  return (
    <FieldPrimitive.Textarea
      {...rest}
      className={slots.clearableRoot({
        className: cn(canClear && "pe-9", className, classNames?.clearableRoot),
      })}
      data-testid={testId}
    />
  );
}

TextareaProvider.displayName = "Textarea.Provider";
TextareaField.displayName = "Textarea.Field";
TextareaGroup.displayName = "Textarea.Group";
TextareaClearableField.displayName = "Textarea.ClearableField";
// #endregion

// #region Closed
export function Textarea({
  className,
  classNames,
  clearable = false,
  defaultValue,
  disabled,
  onChange,
  onValueChange,
  readOnly,
  ref,
  testId,
  value,
  variant: variantProp,
  ...rest
}: TextareaProps) {
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

  const changeHandler: ChangeEventHandler<HTMLTextAreaElement> | undefined = skipClearable
    ? onChange || onValueChange
      ? (event) => {
          onChange?.(event);
          onValueChange?.(event.target.value);
        }
      : undefined
    : handleChange;

  return (
    <TextareaProvider>
      {skipClearable ? (
        <TextareaField
          {...rest}
          className={className}
          classNames={classNames}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={changeHandler}
          readOnly={readOnly}
          ref={ref}
          testId={testId}
          value={value}
          variant={variantProp}
        />
      ) : (
        <TextareaGroup className={classNames?.group} variant={variantProp}>
          <TextareaClearableField
            {...rest}
            canClear={canClear}
            className={className}
            classNames={classNames}
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={handleChange}
            readOnly={readOnly}
            ref={mergedRef}
            testId={testId}
            value={value}
          />
          {canClear ? (
            <InputGroupAddon align="inline-end" className={textareaInlineVariants()}>
              <Input.ClearButton onClear={handleClear} />
            </InputGroupAddon>
          ) : null}
        </TextareaGroup>
      )}
    </TextareaProvider>
  );
}
Textarea.displayName = "Textarea";
// #endregion
