import { ark } from "@ark-ui/vue/factory";
import { kbdGroupVariants, kbdVariants } from "@pisagor/styles/ui/kbd";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface KbdProps extends WithTestId {
  class?: unknown;
  variant?: "default" | "outline";
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Components
export const KbdRoot = defineComponent({
  inheritAttrs: false,
  name: "KbdRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
    variant: { default: "default", type: String as PropType<KbdProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.kbd as ArkPart,
        {
          ...attrs,
          class: cn(kbdVariants({ variant: props.variant }), props.class),
          "data-part": "root",
          "data-scope": "kbd",
          "data-testid": props.testId,
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
          class: cn(kbdGroupVariants(), props.class),
          "data-part": "group",
          "data-scope": "kbd",
        },
        slots,
      );
  },
});
// #endregion
