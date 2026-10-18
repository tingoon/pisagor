import type { KbdGroupRootContract, KbdRootContract } from "@pisagor/props";
import { kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal";

// #region Types
export interface KbdProps extends KbdRootContract {
  class?: unknown;
}

export interface KbdGroupProps extends KbdGroupRootContract {
  class?: unknown;
}
// #endregion

// #region Parts
export const KbdRoot = defineComponent({
  inheritAttrs: false,
  name: "KbdRoot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: kbdRecipe,
      type: Function as PropType<typeof kbdRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<"sm" | "md" | "lg">,
    },
    variant: {
      default: "default",
      type: String as PropType<KbdProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "kbd",
        {
          ...attrs,
          class: cn(
            props.recipe({ size: props.size, variant: props.variant }),
            props.class,
          ),
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
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: kbdGroupRecipe,
      type: Function as PropType<typeof kbdGroupRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(props.recipe(), props.class),
          "data-part": "group",
          "data-scope": "kbd",
        },
        slots,
      );
  },
});
// #endregion

export const Kbd = Object.assign(KbdRoot, {
  Group: KbdGroup,
});
