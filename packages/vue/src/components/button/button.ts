import { ark } from "@ark-ui/vue/factory";
import {
  type ButtonVariantProps,
  buttonLoadingVariants,
  buttonVariants,
} from "@pisagor/styles/ui/button";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";
import { Spinner } from "../spinner";

// #region Types

export interface ButtonProps extends ButtonVariantProps, WithTestId {
  class?: unknown;
  clickEffect?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "reset" | "submit";
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const Button = defineComponent({
  inheritAttrs: false,
  name: "PisagorButton",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    clickEffect: { default: true, type: Boolean },
    disabled: { default: undefined, type: Boolean },
    isLoading: { default: false, type: Boolean },
    pill: { default: false, type: Boolean },
    size: {
      default: "md",
      type: String as PropType<NonNullable<ButtonVariantProps["size"]>>,
    },
    testId: String,
    type: { default: "button", type: String as PropType<NonNullable<ButtonProps["type"]>> },
    variant: {
      default: "default",
      type: String as PropType<NonNullable<ButtonVariantProps["variant"]>>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const loading = buttonLoadingVariants();

      return h(
        ark.button as ArkPart,
        {
          ...attrs,
          "aria-busy": props.isLoading || undefined,
          class: cn(
            buttonVariants({
              clickEffect: props.clickEffect,
              pill: props.pill,
              size: props.size,
              variant: props.variant,
            }),
            props.class,
          ),
          "data-part": "root",
          "data-scope": "button",
          "data-size": props.size,
          "data-state": props.isLoading ? "loading" : "idle",
          "data-testid": props.testId,
          "data-variant": props.variant,
          disabled: props.disabled || props.isLoading,
          type: props.type,
        },
        () =>
          props.isLoading
            ? [
                h("span", { "aria-hidden": true, class: loading.hidden() }, slots.default?.()),
                h("span", { class: loading.srOnly() }, slots.default?.()),
                h("span", { class: loading.spinner() }, () => h(Spinner, { "aria-hidden": true })),
              ]
            : slots.default?.(),
      );
    };
  },
});
// #endregion
