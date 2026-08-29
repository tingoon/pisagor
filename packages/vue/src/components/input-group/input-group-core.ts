import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import {
  inputGroupAddonRecipe,
  inputGroupButtonRecipe,
  inputGroupTextRecipe,
} from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { Button, type ButtonProps } from "../button/button";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];
type InputGroupButtonSize = "icon-sm" | "icon-xs" | "sm" | "xs";

// #region Types
export interface InputGroupProps extends FormControlGroupShellVariantProps {
  class?: unknown;
}

export interface InputGroupAddonProps {
  align?: "block-end" | "block-start" | "inline-end" | "inline-start";
  class?: unknown;
}

export interface InputGroupButtonProps extends Omit<ButtonProps, "size"> {
  onClick?: (event: MouseEvent) => void;
  size?: InputGroupButtonSize;
}
// #endregion

// #region Parts
export const InputGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "InputGroupRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    size: { default: "md", type: String as PropType<InputGroupProps["size"]> },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const resolved = {
        surfaceVariant: undefined,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = { variant: resolved.variant };
      const controlProps = { "data-variant": resolved.variant };

      return h(
        "div",
        {
          ...attrs,
          ...controlProps,
          class: cn(formControlGroupShellRecipe({ size: props.size, ...shellArgs }), props.class),
          "data-part": "root",
          "data-scope": "input-group",
          "data-size": props.size,
          role: "group",
        },
        slots.default?.(),
      );
    };
  },
});

export const InputGroupAddon = defineComponent({
  inheritAttrs: false,
  name: "InputGroupAddon",
  props: {
    align: {
      default: "inline-start",
      type: String as PropType<InputGroupAddonProps["align"]>,
    },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(inputGroupAddonRecipe({ align: props.align }), props.class),
          "data-align": props.align,
          "data-part": "addon",
          "data-scope": "input-group",
          onClick: (event: MouseEvent) => {
            if ((event.target as HTMLElement).closest("button")) {
              return;
            }

            const currentTarget = event.currentTarget as HTMLElement | null;
            currentTarget?.parentElement?.querySelector("input")?.focus();
          },
          role: "group",
        },
        slots.default?.(),
      );
  },
});

export const InputGroupButton = defineComponent({
  inheritAttrs: false,
  name: "InputGroupButton",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    size: { default: "xs", type: String as PropType<InputGroupButtonSize> },
    variant: { default: "ghost", type: String as PropType<ButtonProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        Button as ArkPart,
        {
          ...attrs,
          class: cn(inputGroupButtonRecipe({ size: props.size }), props.class),
          "data-part": "button",
          "data-scope": "input-group",
          "data-size": props.size,
          size: props.size,
          variant: props.variant,
        },
        slots,
      );
  },
});

export const InputGroupText = defineComponent({
  inheritAttrs: false,
  name: "InputGroupText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "span",
        {
          ...attrs,
          class: cn(inputGroupTextRecipe(), props.class),
          "data-part": "text",
          "data-scope": "input-group",
        },
        slots.default?.(),
      );
  },
});
// #endregion
