import { ark } from "@ark-ui/vue/factory";
import { type ButtonVariantProps, buttonRecipe } from "@pisagor/recipes/button";
import { defineComponent, h, type PropType } from "vue";
import { Spinner } from "../spinner";

// #region Types
export interface ButtonProps extends ButtonVariantProps {
  class?: unknown;
  disabled?: boolean;
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
    loading: { default: false, type: Boolean },
    pill: { default: false, type: Boolean },
    size: {
      default: "md",
      type: String as PropType<NonNullable<ButtonVariantProps["size"]>>,
    },
    type: { default: "button", type: String as PropType<NonNullable<ButtonProps["type"]>> },
    variant: {
      default: "default",
      type: String as PropType<NonNullable<ButtonVariantProps["variant"]>>,
    },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = buttonRecipe({
        clickEffect: props.clickEffect,
        loading: props.loading,
        pill: props.pill,
        size: props.size,
        variant: props.variant,
      });

      return h(
        ark.button as ArkPart,
        {
          ...attrs,
          "aria-busy": props.loading || undefined,
          class: slots.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "button",
          "data-size": props.size,
          "data-state": props.loading ? "loading" : "idle",
          "data-variant": props.variant,
          disabled: props.disabled || props.loading,
          type: props.type,
        },
        () =>
          props.loading
            ? [
                h("span", { "aria-hidden": true, class: slots.hidden() }, children.default?.()),
                h("span", { class: slots.srOnly() }, children.default?.()),
                h("span", { class: slots.spinner() }, () => h(Spinner, { "aria-hidden": true })),
              ]
            : children.default?.(),
      );
    };
  },
});
// #endregion
