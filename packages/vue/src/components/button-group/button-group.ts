import { ark } from "@ark-ui/vue/factory";
import {
  type ButtonGroupVariantProps,
  buttonGroupSeparatorVariants,
  buttonGroupTextVariants,
  buttonGroupVariants,
} from "@pisagor/styles/ui/button-group";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";
import { Separator, type SeparatorProps } from "../separator";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ButtonGroupProps extends WithTestId {
  class?: unknown;
  orientation?: ButtonGroupVariantProps["orientation"];
}
// #endregion

// #region Parts
export const ButtonGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "ButtonGroupRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    orientation: {
      default: "horizontal",
      type: String as PropType<ButtonGroupVariantProps["orientation"]>,
    },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.fieldset as ArkPart,
        {
          ...attrs,
          class: cn(buttonGroupVariants({ orientation: props.orientation }), props.class),
          "data-orientation": props.orientation,
          "data-part": "root",
          "data-scope": "button-group",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
  },
});

export const ButtonGroupText = defineComponent({
  inheritAttrs: false,
  name: "ButtonGroupText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(buttonGroupTextVariants(), props.class),
          "data-part": "text",
          "data-scope": "button-group",
        },
        slots.default?.(),
      );
  },
});

export const ButtonGroupSeparator = defineComponent({
  inheritAttrs: false,
  name: "ButtonGroupSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    orientation: { default: "vertical", type: String as PropType<SeparatorProps["orientation"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(Separator as ArkPart, {
        ...attrs,
        class: cn(buttonGroupSeparatorVariants(), props.class),
        dataPart: "separator",
        dataScope: "button-group",
        orientation: props.orientation,
      });
  },
});
// #endregion
