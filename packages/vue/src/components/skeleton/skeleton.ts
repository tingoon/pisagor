import { ark } from "@ark-ui/vue/factory";
import { skeletonRecipe } from "@pisagor/recipes/skeleton";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface SkeletonTextProps {
  class?: unknown;
  lines?: number;
}

export interface SkeletonProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const SkeletonRoot = defineComponent({
  inheritAttrs: false,
  name: "SkeletonRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = skeletonRecipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "skeleton",
        },
        slots,
      );
    };
  },
});

export const SkeletonCircle = defineComponent({
  inheritAttrs: false,
  name: "SkeletonCircle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = skeletonRecipe();

      return h(ark.div as ArkPart, {
        ...attrs,
        class: variantSlots.circle({ class: props.class }),
        "data-part": "circle",
        "data-scope": "skeleton",
      });
    };
  },
});

export const SkeletonText = defineComponent({
  inheritAttrs: false,
  name: "SkeletonText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    lines: { default: 2, type: Number },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = skeletonRecipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.text({ class: props.class }),
          "data-part": "text",
          "data-scope": "skeleton",
        },
        () =>
          Array.from({ length: props.lines }).map((_, index) =>
            h("div", { class: variantSlots.line(), key: `skeleton-text-${index}` }),
          ),
      );
    };
  },
});
// #endregion
