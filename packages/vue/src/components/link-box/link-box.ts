import { ark } from "@ark-ui/vue/factory";
import { linkBoxRecipe } from "@pisagor/recipes/link-box";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface LinkBoxRootProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const LinkBoxRoot = defineComponent({
  inheritAttrs: false,
  name: "LinkBoxRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = linkBoxRecipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "link-box",
        },
        slots.default?.(),
      );
    };
  },
});

export const LinkOverlayLink = defineComponent({
  inheritAttrs: false,
  name: "LinkOverlayLink",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = linkBoxRecipe();

      return h(
        ark.a as ArkPart,
        {
          ...attrs,
          class: variantSlots.overlay({ class: props.class }),
          "data-part": "overlay",
          "data-scope": "link-box",
        },
        slots.default?.(),
      );
    };
  },
});
// #endregion
