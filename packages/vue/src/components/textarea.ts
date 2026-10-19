import { Field as FieldPrimitive, type FieldTextareaProps } from "@ark-ui/vue";
import type {
  TextareaContract,
  TextareaRootContract,
} from "@pisagor/contracts";
import { textareaRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import {
  type ClearableChangeEvent,
  useClearableInput,
} from "../hooks/use-clearable-input";
import { type ClassValue, createSlotRecipeContext } from "../internal";
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
type TextareaRootProps = FieldTextareaProps & TextareaRootContract;

export interface TextareaProps
  extends Omit<TextareaRootProps, "onChange">, TextareaContract {
  /**
   * Whether to show a clear button when the textarea has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Called with the string value when the textarea changes. */
  onValueChange?: (value: string) => void;
  onChange?: (event: ClearableChangeEvent) => void;
  defaultValue?: string | number | readonly string[];
  value?: string | number | readonly string[];
}

type TextareaGroupProps = {
  children?: VNodeChild;
  class?: unknown;
  variant?: TextareaRootContract["variant"];
};
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const Root = withProvider<TextareaRootProps>(FieldPrimitive.Textarea, {
  name: "Root",
  slot: "rootLayout",
});

const ClearableRoot = defineComponent({
  inheritAttrs: false,
  name: "Textarea.ClearableRoot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: undefined, type: Boolean },
  },
  setup(props, { attrs }) {
    const styles = useStyles();

    return () =>
      h(FieldPrimitive.Textarea as ArkPart, {
        ...attrs,
        class: styles.slots.clearableRoot({
          class: props.class,
          clearable: props.clearable,
        }),
        "data-part": "clearable-root",
        "data-scope": "textarea",
      });
  },
});

const GroupBase = withContext<TextareaGroupProps>(InputGroupRoot, {
  name: "Group",
});

const Group = defineComponent({
  inheritAttrs: false,
  name: "Textarea.Group",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    variant: {
      default: undefined,
      type: String as PropType<TextareaRootContract["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        GroupBase,
        {
          ...attrs,
          class: props.class,
          variant: props.variant,
        },
        slots,
      );
  },
});

const ClearAddon = defineComponent({
  name: "Textarea.ClearAddon",
  props: {
    onClear: {
      required: true,
      type: Function as PropType<() => void>,
    },
  },
  setup(props) {
    const styles = useStyles();

    return () =>
      h(
        InputGroupAddon,
        { align: "inline-end", class: styles.slots.clearAddon() },
        () => h(Input.ClearButton, { onClear: props.onClear }),
      );
  },
});

const Provider = defineComponent({
  inheritAttrs: false,
  name: "Textarea.Provider",
  props: {
    recipe: {
      default: textareaRecipe,
      type: Function as PropType<typeof textareaRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<TextareaRootContract["size"]>,
    },
    surfaceVariant: {
      default: undefined,
      type: String as PropType<TextareaRootContract["surfaceVariant"]>,
    },
    variant: {
      default: undefined,
      type: String as PropType<TextareaRootContract["variant"]>,
    },
  },
  setup(props, { slots }) {
    const surfaceFromContext = useFormControlSurface();

    return () => {
      const resolved = {
        size: props.size,
        surfaceVariant: props.surfaceVariant ?? surfaceFromContext,
        variant: props.variant,
      };
      const recipeSlots = props.recipe(resolved);

      return h(
        Context,
        { value: { slots: recipeSlots, variants: resolved as never } },
        () => slots.default?.(),
      );
    };
  },
});
// #endregion

// #region Closed
const TextareaShorthand = defineComponent({
  inheritAttrs: false,
  name: "Textarea",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<TextareaProps["classNames"]>,
    },
    clearable: { default: false, type: Boolean },
    defaultValue: {
      default: undefined,
      type: [String, Number, Array] as PropType<TextareaProps["defaultValue"]>,
    },
    disabled: { default: undefined, type: Boolean },
    onChange: {
      default: undefined,
      type: Function as PropType<TextareaProps["onChange"]>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<TextareaProps["onValueChange"]>,
    },
    readOnly: { default: undefined, type: Boolean },
    recipe: {
      default: undefined,
      type: Function as PropType<typeof textareaRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<"sm" | "md" | "lg">,
    },
    value: {
      default: undefined,
      type: [String, Number, Array] as PropType<TextareaProps["value"]>,
    },
    variant: {
      default: undefined,
      type: String as PropType<TextareaRootContract["variant"]>,
    },
  },
  setup(props, { attrs }) {
    const { canClear, handleChange, handleClear, inputRef } = useClearableInput(
      {
        clearable: () => props.clearable,
        defaultValue: props.defaultValue,
        disabled: () => props.disabled,
        onChange: props.onChange,
        onValueChange: props.onValueChange,
        readOnly: () => props.readOnly,
        value: () => props.value,
      },
    );

    return () => {
      const skipClearable = !props.clearable;

      const changeHandler = skipClearable
        ? props.onChange || props.onValueChange
          ? (event: Event) => {
              const typed = event as ClearableChangeEvent;
              props.onChange?.(typed);
              props.onValueChange?.(typed.target.value);
            }
          : undefined
        : handleChange;

      if (skipClearable) {
        return h(Root, {
          ...attrs,
          class: props.class as string | undefined,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          onInput: changeHandler,
          readOnly: props.readOnly,
          recipe: props.recipe,
          size: props.size,
          value: props.value,
          variant: props.variant,
        });
      }

      return h(
        Provider,
        {
          recipe: props.recipe,
          size: props.size,
          variant: props.variant,
        },
        () =>
          h(
            Group,
            { class: props.classNames?.group, variant: props.variant },
            () => [
              h(ClearableRoot, {
                ...attrs,
                class: props.class,
                clearable: canClear.value,
                defaultValue: props.defaultValue,
                disabled: props.disabled,
                onInput: handleChange,
                readOnly: props.readOnly,
                ref: inputRef,
                value: props.value,
              }),
              canClear.value ? h(ClearAddon, { onClear: handleClear }) : null,
            ],
          ),
      );
    };
  },
});
// #endregion

export const Textarea = Object.assign(TextareaShorthand, {
  ClearableRoot,
  Group,
  Root,
});
