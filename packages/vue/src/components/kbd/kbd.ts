import { ark } from "@ark-ui/vue/factory";
import { type KbdVariantProps, kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes/kbd";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface KbdProps extends KbdVariantProps {
  /**
   * Style recipe. Defaults to `kbdRecipe` from `@pisagor/recipes/kbd`.
   *
   * @defaultValue kbdRecipe
   */
  recipe?: typeof kbdRecipe;
  class?: unknown;
}

export interface KbdGroupProps {
  /**
   * Style recipe. Defaults to `kbdGroupRecipe` from `@pisagor/recipes/kbd-group`.
   *
   * @defaultValue kbdGroupRecipe
   */
  recipe?: typeof kbdGroupRecipe;
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
    recipe: {
      default: kbdRecipe,
      type: Function as PropType<typeof kbdRecipe>,
    },
    variant: { default: "default", type: String as PropType<KbdProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.kbd as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe({ variant: props.variant }), props.class),
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
    recipe: {
      default: kbdGroupRecipe,
      type: Function as PropType<typeof kbdGroupRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
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
