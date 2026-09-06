import { ark } from "@ark-ui/vue/factory";
import { type ButtonGroupVariantProps, buttonGroupRecipe } from "@pisagor/recipes/button-group";
import { defineComponent, h, type PropType } from "vue";
import { Separator, type SeparatorProps } from "../separator";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ButtonGroupProps extends ButtonGroupVariantProps {
  /**
   * Style recipe. Defaults to `buttonGroupRecipe` from `@pisagor/recipes/button-group`.
   *
   * @defaultValue buttonGroupRecipe
   */
  recipe?: typeof buttonGroupRecipe;
  class?: unknown;
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
    recipe: {
      default: buttonGroupRecipe,
      type: Function as PropType<typeof buttonGroupRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe({ orientation: props.orientation });

      return h(
        ark.fieldset as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-orientation": props.orientation,
          "data-part": "root",
          "data-scope": "button-group",
        },
        slots.default?.(),
      );
    };
  },
});

export const ButtonGroupText = defineComponent({
  inheritAttrs: false,
  name: "ButtonGroupText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: buttonGroupRecipe,
      type: Function as PropType<typeof buttonGroupRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.text({ class: props.class }),
          "data-part": "text",
          "data-scope": "button-group",
        },
        slots.default?.(),
      );
    };
  },
});

export const ButtonGroupSeparator = defineComponent({
  inheritAttrs: false,
  name: "ButtonGroupSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    orientation: { default: "vertical", type: String as PropType<SeparatorProps["orientation"]> },
    recipe: {
      default: buttonGroupRecipe,
      type: Function as PropType<typeof buttonGroupRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = props.recipe();

      return h(Separator as ArkPart, {
        ...attrs,
        class: variantSlots.separator({ class: props.class }),
        dataPart: "separator",
        dataScope: "button-group",
        orientation: props.orientation,
      });
    };
  },
});
// #endregion
