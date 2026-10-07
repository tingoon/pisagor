import {
  Field as FieldPrimitive,
  type FieldTextareaProps,
} from "@ark-ui/react/field";
import type { TextareaProps as BaseTextareaProps } from "@pisagor/props";
import {
  formControlShellRecipe,
  type TextareaRecipeSlot,
  textareaRecipe,
} from "@pisagor/recipes";

import { cn } from "@pisagor/utils";
import type { ChangeEventHandler, ReactNode, RefAttributes } from "react";
import { useClearableInput } from "../hooks";
import type { VariantClassNames } from "../internal/types";
import { createSlotRecipeContext } from "../utils";
import { Input } from "./input";
import {
  InputGroupAddon,
  InputGroupRoot,
} from "./input-group/input-group-core";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: TextareaStylesContext, useStyles: useTextarea } =
  createSlotRecipeContext({
    name: "Textarea",
    recipe: textareaRecipe,
  });
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";

type TextareaClassNames = VariantClassNames<TextareaRecipeSlot>;

type TextareaRootProps = FieldTextareaProps &
  RefAttributes<HTMLTextAreaElement> & {
    /**
     * Visual shell variant. Defaults to `primary`.
     */
    variant?: FormControlVariant;
  };

export interface TextareaProps extends TextareaRootProps, BaseTextareaProps {
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
function TextareaProvider({
  children,
  recipe = textareaRecipe,
}: {
  children: ReactNode;
  /**
   * Style recipe. Defaults to `textareaRecipe` from `@pisagor/recipes/textarea`.
   *
   * @defaultValue textareaRecipe
   */
  recipe?: typeof textareaRecipe;
}) {
  const slots = recipe();

  return (
    <TextareaStylesContext value={{ slots, variants: {} as never }}>
      {children}
    </TextareaStylesContext>
  );
}

function TextareaField({
  variant: variantProp,
  className,
  classNames,
  ...rest
}: TextareaRootProps & { classNames?: TextareaClassNames }) {
  const { slots } = useTextarea();
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
    <FieldPrimitive.Textarea
      {...rest}
      {...controlProps}
      className={cn(
        formControlShellRecipe({ size: "md", ...shellArgs }),
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
}: TextareaRootProps & {
  canClear?: boolean;
  classNames?: TextareaClassNames;
}) {
  const { slots } = useTextarea();

  return (
    <FieldPrimitive.Textarea
      {...rest}
      className={slots.clearableRoot({
        className: cn(className, classNames?.clearableRoot),
        clearable: canClear,
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
  recipe,
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

  const changeHandler: ChangeEventHandler<HTMLTextAreaElement> | undefined =
    skipClearable
      ? onChange || onValueChange
        ? (event) => {
            onChange?.(event);
            onValueChange?.(event.target.value);
          }
        : undefined
      : handleChange;

  return (
    <TextareaProvider recipe={recipe}>
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
