import { ark } from "@ark-ui/vue/factory";
import { frameRecipe } from "@pisagor/recipes/frame";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FrameRootProps {
  /**
   * Style recipe. Defaults to `frameRecipe` from `@pisagor/recipes/frame`.
   *
   * @defaultValue frameRecipe
   */
  recipe?: typeof frameRecipe;
  class?: unknown;
}
// #endregion

// #region Parts
export const FrameRoot = defineComponent({
  inheritAttrs: false,
  name: "FrameRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: frameRecipe,
      type: Function as PropType<typeof frameRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "frame",
        },
        slots.default?.(),
      );
    };
  },
});

export const FramePanel = defineComponent({
  inheritAttrs: false,
  name: "FramePanel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: frameRecipe,
      type: Function as PropType<typeof frameRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.panel({ class: props.class }),
          "data-part": "panel",
          "data-scope": "frame",
        },
        slots.default?.(),
      );
    };
  },
});

export const FrameTitle = defineComponent({
  inheritAttrs: false,
  name: "FrameTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: frameRecipe,
      type: Function as PropType<typeof frameRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.panelTitle({ class: props.class }),
          "data-part": "panel-title",
          "data-scope": "frame",
        },
        slots.default?.(),
      );
    };
  },
});

export const FrameDescription = defineComponent({
  inheritAttrs: false,
  name: "FrameDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: frameRecipe,
      type: Function as PropType<typeof frameRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.panelDescription({ class: props.class }),
          "data-part": "panel-description",
          "data-scope": "frame",
        },
        slots.default?.(),
      );
    };
  },
});

export const FrameHeader = defineComponent({
  inheritAttrs: false,
  name: "FrameHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: frameRecipe,
      type: Function as PropType<typeof frameRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.header as ArkPart,
        {
          ...attrs,
          class: variantSlots.panelHeader({ class: props.class }),
          "data-part": "panel-header",
          "data-scope": "frame",
        },
        slots.default?.(),
      );
    };
  },
});

export const FrameFooter = defineComponent({
  inheritAttrs: false,
  name: "FrameFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: frameRecipe,
      type: Function as PropType<typeof frameRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.footer as ArkPart,
        {
          ...attrs,
          class: variantSlots.panelFooter({ class: props.class }),
          "data-part": "panel-footer",
          "data-scope": "frame",
        },
        slots.default?.(),
      );
    };
  },
});
// #endregion
