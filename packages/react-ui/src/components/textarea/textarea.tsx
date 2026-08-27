import { Field as FieldPrimitive } from "@ark-ui/react/field";
import { type TextareaSlots, textareaVariants } from "@pisagor/recipes/textarea";
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
import type { VariantClassNames } from "../../internal/types";
import { Input } from "../input";
import { InputGroupAddon, InputGroupRoot } from "../input-group/input-group-core";
import { TextareaContext, useTextarea } from "./textarea.context";

// #region Types
type TextareaClassNames = VariantClassNames<TextareaSlots>;

type TextareaRootProps = ComponentProps<typeof FieldPrimitive.Textarea> & {
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
  variant: variantProp,
  className,
  classNames,
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
    />
  );
}

function TextareaGroup({
  variant,
  children,
  className,
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
  ...rest
}: TextareaRootProps & { canClear?: boolean; classNames?: TextareaClassNames }) {
  const { slots } = useTextarea();

  return (
    <FieldPrimitive.Textarea
      {...rest}
      className={slots.clearableRoot({
        className: cn(canClear && "pe-9", className, classNames?.clearableRoot),
      })}
    />
  );
}

function TextareaClearAddon({ onClear }: { onClear: () => void }) {
  const { slots } = useTextarea();

  return (
    <InputGroupAddon align="inline-end" className={slots.clearAddon()}>
      <Input.ClearButton onClear={onClear} />
    </InputGroupAddon>
  );
}
// #endregion

// #region Closed
export function Textarea({
  variant: variantProp,
  clearable = false,
  defaultValue,
  disabled,
  readOnly,
  value,
  ref,
  onChange,
  onValueChange,
  className,
  classNames,
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
            value={value}
          />
          {canClear ? <TextareaClearAddon onClear={handleClear} /> : null}
        </TextareaGroup>
      )}
    </TextareaProvider>
  );
}
// #endregion

// #region Display Names
TextareaProvider.displayName = "Textarea.Provider";
TextareaField.displayName = "Textarea.Field";
TextareaGroup.displayName = "Textarea.Group";
TextareaClearableField.displayName = "Textarea.ClearableField";
TextareaClearAddon.displayName = "Textarea.ClearAddon";
Textarea.displayName = "Textarea";
// #endregion
