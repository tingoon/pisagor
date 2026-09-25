import { Field as FieldPrimitive, type FieldTextareaProps } from "@ark-ui/solid/field";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { type TextareaRecipeSlot, textareaRecipe } from "@pisagor/recipes/textarea";
import { cn } from "@pisagor/utils";
import type { JSX, ParentProps } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useClearableInput } from "../../hooks";
import type { VariantClassNames } from "../../internal/types";
import { callEventHandler } from "../../utils";
import { Input } from "../input";
import { InputGroupAddon, InputGroupRoot } from "../input-group/input-group-core";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { TextareaContext, useTextarea } from "./textarea.context";

type FormControlVariant = "primary" | "secondary";
type TextareaClassNames = VariantClassNames<TextareaRecipeSlot>;

type TextareaRootProps = FieldTextareaProps & {
  variant?: FormControlVariant;
  /** Initial value when uncontrolled. Solid has no native defaultValue on textareas. */
  defaultValue?: string | number | readonly string[];
};

export interface TextareaProps extends TextareaRootProps {
  clearable?: boolean;
  onValueChange?: (value: string) => void;
  recipe?: typeof textareaRecipe;
  classNames?: TextareaClassNames;
}

function TextareaProvider(props: ParentProps<{ recipe?: typeof textareaRecipe }>): JSX.Element {
  const slots = () => (props.recipe ?? textareaRecipe)();
  return <TextareaContext value={{ slots: slots() }}>{props.children}</TextareaContext>;
}

function TextareaField(
  props: TextareaRootProps & { classNames?: TextareaClassNames },
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "class",
    "classNames",
    "defaultValue",
    "ref",
  ]);
  const { slots } = useTextarea();
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);

  const applyDefaultValueRef = (el: HTMLTextAreaElement) => {
    if (rest.value === undefined && local.defaultValue !== undefined && el.value === "") {
      el.value = String(local.defaultValue);
    }
    if (typeof local.ref === "function") {
      local.ref(el);
    }
  };

  return (
    <FieldPrimitive.Textarea
      {...rest}
      class={cn(
        formControlShellRecipe({
          size: "md",
          surfaceVariant,
          variant: variant(),
        }),
        slots.rootLayout({ class: cn(local.class, local.classNames?.rootLayout) }),
      )}
      data-variant={variant()}
      ref={applyDefaultValueRef}
    />
  );
}

function TextareaGroup(
  props: ParentProps<{ class?: string; variant?: FormControlVariant }>,
): JSX.Element {
  const { slots } = useTextarea();

  return (
    <InputGroupRoot class={slots.group({ class: cn(props.class) })} variant={props.variant}>
      {props.children}
    </InputGroupRoot>
  );
}

function TextareaClearableField(
  props: TextareaRootProps & { canClear?: boolean; classNames?: TextareaClassNames },
): JSX.Element {
  const [local, rest] = splitProps(props, ["canClear", "class", "classNames", "defaultValue"]);
  const { slots } = useTextarea();

  return (
    <FieldPrimitive.Textarea
      {...rest}
      class={slots.clearableRoot({
        class: cn(local.canClear && "pe-9", local.class, local.classNames?.clearableRoot),
      })}
    />
  );
}

function TextareaClearAddon(props: { onClear: () => void }): JSX.Element {
  const { slots } = useTextarea();

  return (
    <InputGroupAddon align="inline-end" class={slots.clearAddon()}>
      <Input.ClearButton onClear={props.onClear} />
    </InputGroupAddon>
  );
}

export function Textarea(props: TextareaProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "clearable",
    "defaultValue",
    "disabled",
    "readOnly",
    "value",
    "ref",
    "onChange",
    "onValueChange",
    "recipe",
    "class",
    "classNames",
  ]);

  const clearable = () => local.clearable ?? false;
  const skipClearable = () => !clearable();

  const { canClear, handleChange, handleClear, mergedRef } = useClearableInput<HTMLTextAreaElement>(
    {
      get clearable() {
        return clearable();
      },
      get defaultValue() {
        return local.defaultValue;
      },
      get disabled() {
        return local.disabled;
      },
      get onChange() {
        return (
          event: Event & { currentTarget: HTMLTextAreaElement; target: HTMLTextAreaElement },
        ) => {
          callEventHandler(local.onChange, event);
        };
      },
      get onValueChange() {
        return local.onValueChange;
      },
      get readOnly() {
        return local.readOnly;
      },
      get ref() {
        return typeof local.ref === "function" ? local.ref : undefined;
      },
      get value() {
        return local.value;
      },
    },
  );

  return (
    <TextareaProvider recipe={local.recipe}>
      <Show
        fallback={
          <TextareaField
            {...rest}
            class={local.class}
            classNames={local.classNames}
            defaultValue={local.defaultValue}
            disabled={local.disabled}
            onChange={
              local.onChange || local.onValueChange
                ? (event) => {
                    callEventHandler(local.onChange, event);
                    local.onValueChange?.(event.currentTarget.value);
                  }
                : undefined
            }
            readOnly={local.readOnly}
            ref={typeof local.ref === "function" ? local.ref : undefined}
            value={local.value}
            variant={local.variant}
          />
        }
        when={!skipClearable()}
      >
        <TextareaGroup class={local.classNames?.group} variant={local.variant}>
          <TextareaClearableField
            {...rest}
            canClear={canClear()}
            class={local.class}
            classNames={local.classNames}
            defaultValue={local.defaultValue}
            disabled={local.disabled}
            onChange={handleChange}
            readOnly={local.readOnly}
            ref={mergedRef}
            value={local.value}
          />
          <Show when={canClear()}>
            <TextareaClearAddon onClear={handleClear} />
          </Show>
        </TextareaGroup>
      </Show>
    </TextareaProvider>
  );
}
