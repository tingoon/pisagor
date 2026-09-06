import {
  inputGroupControlRecipe,
  inputGroupTextareaControlRecipe,
} from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { Input, type InputProps } from "../input/input";
import { Textarea, type TextareaProps } from "../textarea/textarea";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface InputGroupInputProps {
  /**
   * Style recipe. Defaults to `inputGroupControlRecipe` from `@pisagor/recipes/input-group-control`.
   *
   * @defaultValue inputGroupControlRecipe
   */
  recipe?: typeof inputGroupControlRecipe;
  class?: unknown;
}

export interface InputGroupTextareaProps {
  /**
   * Style recipe. Defaults to `inputGroupTextareaControlRecipe` from `@pisagor/recipes/input-group-textarea-control`.
   *
   * @defaultValue inputGroupTextareaControlRecipe
   */
  recipe?: typeof inputGroupTextareaControlRecipe;
  class?: unknown;
}
// #endregion

export const InputGroupInput = defineComponent({
  inheritAttrs: false,
  name: "InputGroupInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<InputProps["classNames"]> },
    recipe: {
      default: inputGroupControlRecipe,
      type: Function as PropType<typeof inputGroupControlRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(Input as ArkPart, {
        ...(attrs as object),
        class: cn(props.recipe(), props.class),
        classNames: {
          ...props.classNames,
          clearableRoot: cn(props.recipe(), props.classNames?.clearableRoot),
        },
      });
  },
});

export const InputGroupTextarea = defineComponent({
  inheritAttrs: false,
  name: "InputGroupTextarea",
  props: {
    classNames: { default: undefined, type: Object as PropType<TextareaProps["classNames"]> },
    recipe: {
      default: inputGroupTextareaControlRecipe,
      type: Function as PropType<typeof inputGroupTextareaControlRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(Textarea as ArkPart, {
        ...(attrs as object),
        classNames: {
          ...props.classNames,
          rootLayout: cn(props.recipe(), props.classNames?.rootLayout),
        },
      });
  },
});
