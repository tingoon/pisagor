import { ark } from "@ark-ui/vue/factory";
import { type KbdVariantProps, kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes/kbd";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface KbdProps extends KbdVariantProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const KbdRoot = defineComponent({
  inheritAttrs: false,
  name: "KbdRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: "default", type: String as PropType<KbdProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.kbd as ArkPart,
        {
          ...attrs,
          class: cn(kbdRecipe({ variant: props.variant }), props.class),
          "data-part": "root",
          "data-scope": "kbd",
        },
        slots,
      );
  },
});

export const KbdGroup = defineComponent({
  inheritAttrs: false,
  name: "KbdGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(kbdGroupRecipe(), props.class),
          "data-part": "group",
          "data-scope": "kbd",
        },
        slots,
      );
  },
});
// #endregion
