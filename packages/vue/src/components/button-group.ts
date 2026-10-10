import { ark } from "@ark-ui/vue/factory";
import type { ButtonGroupProps as BaseButtonGroupProps } from "@pisagor/props";
import { buttonGroupRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Separator } from "./separator";

// #region Context
const {
  useStyles: useButtonGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ButtonGroup",
  recipe: buttonGroupRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ButtonGroupProps extends BaseButtonGroupProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const ButtonGroupRoot = withProvider(ark.fieldset, {
  name: "Root",
  slot: "base",
});

export const ButtonGroupText = withContext(ark.div, {
  name: "Text",
  slot: "text",
});

export const ButtonGroupSeparator = defineComponent({
  inheritAttrs: false,
  name: "ButtonGroup.Separator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    orientation: {
      default: "vertical",
      type: String as PropType<"horizontal" | "vertical">,
    },
  },
  setup(props, { attrs }) {
    const { slots } = useButtonGroup();

    return () =>
      h(Separator as ArkPart, {
        ...attrs,
        class: slots.separator({ class: props.class }),
        dataPart: "separator",
        dataScope: "button-group",
        orientation: props.orientation,
      });
  },
});
// #endregion

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
});
