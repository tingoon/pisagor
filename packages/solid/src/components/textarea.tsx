import {
  Field as FieldPrimitive,
  type FieldTextareaProps,
} from "@ark-ui/solid";
import type {
  TextareaContract,
  TextareaRootContract,
} from "@pisagor/contracts";
import { textareaRecipe } from "@pisagor/recipes";
import type { JSX, ParentProps } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useClearableInput } from "../hooks";
import { createSlotRecipeContext } from "../internal";
import { callEventHandler } from "../utils";
import { Input } from "./input";
import {
  InputGroupAddon,
  InputGroupRoot,
} from "./input-group/input-group-core";

// #region Context
const { Context, withContext, withProvider, useStyles } =
  createSlotRecipeContext({
    name: "Textarea",
    recipe: textareaRecipe,
  });
// #endregion

// #region Types
type TextareaRootProps = FieldTextareaProps &
  TextareaRootContract & {
    /**
     * Initial value when uncontrolled. Solid has no native defaultValue on
     * textareas.
     */
    defaultValue?: string | number | readonly string[];
  };

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

type TextareaGroupProps = ParentProps<{
  class?: string;
  variant?: TextareaRootContract["variant"];
}>;
// #endregion

// #region Parts
const Root = withProvider<TextareaRootProps>(FieldPrimitive.Textarea, {
  name: "Root",
  slot: "rootLayout",
});

function ClearableRoot(
  props: TextareaRootProps & { clearable?: boolean },
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "clearable",
    "class",
    "defaultValue",
    "ref",
  ]);
  const { slots } = useStyles();

  const applyDefaultValueRef = (el: HTMLTextAreaElement) => {
    if (
      rest.value === undefined &&
      local.defaultValue !== undefined &&
      el.value === ""
    ) {
      el.value = String(local.defaultValue);
    }
    if (typeof local.ref === "function") {
      local.ref(el);
    }
  };

  return (
    <FieldPrimitive.Textarea
      {...rest}
      class={slots.clearableRoot({
        class: local.class,
        clearable: local.clearable,
      })}
      data-part="clearable-root"
      data-scope="textarea"
      ref={applyDefaultValueRef}
    />
  );
}

const GroupBase = withContext<TextareaGroupProps>(InputGroupRoot, {
  name: "Group",
});

function Group(props: TextareaGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);

  return (
    <GroupBase {...rest} class={local.class} variant={local.variant}>
      {local.children}
    </GroupBase>
  );
}

function ClearAddon(props: { onClear: () => void }): JSX.Element {
  const { slots } = useStyles();

  return (
    <InputGroupAddon align="inline-end" class={slots.clearAddon()}>
      <Input.ClearButton onClear={props.onClear} />
    </InputGroupAddon>
  );
}

function Provider(
  props: ParentProps<
    TextareaRootContract & {
      recipe?: typeof textareaRecipe;
    }
  >,
): JSX.Element {
  const [local] = splitProps(props, [
    "children",
    "size",
    "variant",
    "surfaceVariant",
    "recipe",
  ]);
  const recipe = () => local.recipe ?? textareaRecipe;
  const resolved = () => ({
    size: local.size ?? "md",
    surfaceVariant: local.surfaceVariant,
    variant: local.variant,
  });
  const slots = () => recipe()(resolved());

  return (
    <Context
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return resolved() as never;
        },
      }}
    >
      {local.children}
    </Context>
  );
}
// #endregion

// #region Closed
function TextareaShorthand(props: TextareaProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
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

  const { canClear, handleChange, handleClear, mergedRef } =
    useClearableInput<HTMLTextAreaElement>({
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
          event: Event & {
            currentTarget: HTMLTextAreaElement;
            target: HTMLTextAreaElement;
          },
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
    });

  return (
    <Show
      fallback={
        <Root
          {...rest}
          class={local.class}
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
          recipe={local.recipe}
          ref={typeof local.ref === "function" ? local.ref : undefined}
          size={local.size ?? "md"}
          value={local.value}
          variant={local.variant}
        />
      }
      when={!skipClearable()}
    >
      <Provider
        recipe={local.recipe}
        size={local.size ?? "md"}
        variant={local.variant}
      >
        <Group class={local.classNames?.group} variant={local.variant}>
          <ClearableRoot
            {...rest}
            class={local.class}
            clearable={canClear()}
            defaultValue={local.defaultValue}
            disabled={local.disabled}
            onChange={handleChange}
            readOnly={local.readOnly}
            ref={mergedRef}
            value={local.value}
          />
          <Show when={canClear()}>
            <ClearAddon onClear={handleClear} />
          </Show>
        </Group>
      </Provider>
    </Show>
  );
}
// #endregion

export const Textarea = Object.assign(TextareaShorthand, {
  ClearableRoot,
  Group,
  Root,
});
