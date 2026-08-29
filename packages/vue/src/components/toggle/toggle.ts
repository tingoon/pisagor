import { Toggle as TogglePrimitive } from "@ark-ui/vue/toggle";
import { type ButtonVariantProps, buttonRecipe } from "@pisagor/recipes/button";
import { type ToggleVariantProps, toggleRecipe } from "@pisagor/recipes/toggle";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const Toggle = defineComponent({
  emits: {
    pressedChange: (_pressed: boolean) => true,
    valueChange: (_value: boolean) => true,
  },
  inheritAttrs: false,
  name: "PisagorToggle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    disabled: { default: false, type: Boolean },
    size: { default: "md", type: String as PropType<ToggleVariantProps["size"]> },
    variant: {
      default: "ghost",
      type: String as PropType<Extract<ButtonVariantProps["variant"], "outline" | "ghost">>,
    },
  },
  setup(props, { attrs, emit, slots }) {
    return () =>
      h(
        TogglePrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(
            buttonRecipe({ clickEffect: false, variant: props.variant }).base(),
            toggleRecipe({ size: props.size }),
            props.class,
          ),
          disabled: props.disabled,
          onPressedChange: (pressed: boolean) => {
            emit("pressedChange", pressed);
            emit("valueChange", pressed);
          },
        },
        slots,
      );
  },
});
// #endregion
