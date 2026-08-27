import {
  inputGroupControlVariants,
  inputGroupTextareaControlVariants,
} from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { Input, type InputProps } from "../input/input";
import { Textarea, type TextareaProps } from "../textarea/textarea";

type ArkPart = Parameters<typeof h>[0];

export const InputGroupInput = defineComponent({
  inheritAttrs: false,
  name: "InputGroupInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<InputProps["classNames"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(Input as ArkPart, {
        ...(attrs as object),
        class: cn(inputGroupControlVariants(), props.class),
        classNames: {
          ...props.classNames,
          clearableRoot: cn(inputGroupControlVariants(), props.classNames?.clearableRoot),
        },
      });
  },
});

export const InputGroupTextarea = defineComponent({
  inheritAttrs: false,
  name: "InputGroupTextarea",
  props: {
    classNames: { default: undefined, type: Object as PropType<TextareaProps["classNames"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(Textarea as ArkPart, {
        ...(attrs as object),
        classNames: {
          ...props.classNames,
          rootLayout: cn(inputGroupTextareaControlVariants(), props.classNames?.rootLayout),
        },
      });
  },
});
