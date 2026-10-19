import {
  Field as FieldPrimitive,
  type FieldTextareaProps,
} from "@ark-ui/react";
import type {
  TextareaContract,
  TextareaRootContract,
} from "@pisagor/contracts";
import { textareaRecipe } from "@pisagor/recipes";
import type { ChangeEventHandler, ReactNode, RefAttributes } from "react";
import { useClearableInput } from "../hooks";
import { createSlotRecipeContext } from "../internal";
import { Input } from "./input";
import {
  InputGroupAddon,
  InputGroupRoot,
} from "./input-group/input-group-core";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context, withContext, withProvider, useStyles } =
  createSlotRecipeContext({
    name: "Textarea",
    recipe: textareaRecipe,
  });
// #endregion

// #region Types
type TextareaRootProps = FieldTextareaProps &
  RefAttributes<HTMLTextAreaElement> &
  TextareaRootContract;

export interface TextareaProps extends TextareaRootProps, TextareaContract {
  /**
   * Whether to show a clear button when the textarea has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Called with the string value when the textarea changes. */
  onValueChange?: (value: string) => void;
}

type TextareaGroupProps = {
  children: ReactNode;
  className?: string;
  variant?: TextareaRootContract["variant"];
};
// #endregion

// #region Parts
const Root = withProvider<TextareaRootProps>(FieldPrimitive.Textarea, {
  name: "Root",
  slot: "rootLayout",
});

const ClearableRoot = withContext<TextareaRootProps>(FieldPrimitive.Textarea, {
  name: "ClearableRoot",
});

const GroupBase = withContext<TextareaGroupProps>(InputGroupRoot, {
  name: "Group",
});

function Group({ variant, children, className }: TextareaGroupProps) {
  return (
    <GroupBase className={className} variant={variant}>
      {children}
    </GroupBase>
  );
}

function ClearAddon({ onClear }: { onClear: () => void }) {
  const { slots } = useStyles();

  return (
    <InputGroupAddon align="inline-end" className={slots.clearAddon()}>
      <Input.ClearButton onClear={onClear} />
    </InputGroupAddon>
  );
}

function Provider({
  children,
  clearable,
  size = "md",
  variant,
  surfaceVariant,
  recipe = textareaRecipe,
}: TextareaRootContract & { children: ReactNode }) {
  const surfaceFromContext = useFormControlSurface();
  const resolved = {
    clearable,
    size,
    surfaceVariant: surfaceVariant ?? surfaceFromContext,
    variant,
  };
  const slots = recipe(resolved);

  return (
    <Context value={{ slots, variants: resolved as never }}>{children}</Context>
  );
}
// #endregion

// #region Closed
function TextareaShorthand({
  size = "md",
  variant,
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

  if (skipClearable) {
    return (
      <Root
        {...rest}
        className={className}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={changeHandler}
        readOnly={readOnly}
        recipe={recipe}
        ref={ref}
        size={size}
        value={value}
        variant={variant}
      />
    );
  }

  return (
    <Provider
      clearable={canClear}
      recipe={recipe}
      size={size}
      variant={variant}
    >
      <Group className={classNames?.group} variant={variant}>
        <ClearableRoot
          {...rest}
          className={className}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={handleChange}
          readOnly={readOnly}
          ref={mergedRef}
          value={value}
        />
        {canClear ? <ClearAddon onClear={handleClear} /> : null}
      </Group>
    </Provider>
  );
}
// #endregion

export const Textarea = Object.assign(TextareaShorthand, {
  ClearableRoot,
  Group,
  Root,
});
