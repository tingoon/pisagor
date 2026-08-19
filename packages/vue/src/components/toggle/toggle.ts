import { Toggle as TogglePrimitive } from "@ark-ui/vue/toggle";
import { buttonVariants } from "@pisagor/styles/ui/button";
import { toggleVariants } from "@pisagor/styles/ui/toggle";
import { cn } from "@pisagor/utils";
import type { VariantProps } from "tailwind-variants";
import { defineComponent, h, type PropType } from "vue";

type ToggleVariantProps = VariantProps<typeof toggleVariants>;
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ArkPart = Parameters<typeof h>[0];

// #region Component
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
    testId: String,
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
            buttonVariants({ clickEffect: false, variant: props.variant }),
            toggleVariants({ size: props.size }),
            props.class,
          ),
          "data-testid": props.testId,
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
