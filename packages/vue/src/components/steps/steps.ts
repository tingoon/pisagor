import { ark } from "@ark-ui/vue/factory";
import { Steps as StepsPrimitive } from "@ark-ui/vue/steps";
import { PhCheck } from "@phosphor-icons/vue";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes/steps";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface StepsItemProps {
  /**
   * Style recipe. Defaults to `stepsItemRecipe` from `@pisagor/recipes/steps-item`.
   *
   * @defaultValue stepsItemRecipe
   */
  itemRecipe?: typeof stepsItemRecipe;
  class?: unknown;
}

export interface StepsRootProps {
  /**
   * Style recipe. Defaults to `stepsRecipe` from `@pisagor/recipes/steps`.
   *
   * @defaultValue stepsRecipe
   */
  recipe?: typeof stepsRecipe;
  class?: unknown;
}
// #endregion

// #region Parts
export const StepsRoot = defineComponent({
  inheritAttrs: false,
  name: "StepsRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: stepsRecipe,
      type: Function as PropType<typeof stepsRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        StepsPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsList = defineComponent({
  inheritAttrs: false,
  name: "StepsList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: stepsRecipe,
      type: Function as PropType<typeof stepsRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        StepsPrimitive.List as ArkPart,
        {
          ...attrs,
          class: variantSlots.list({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsItem = defineComponent({
  inheritAttrs: false,
  name: "StepsItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: stepsItemRecipe,
      type: Function as PropType<typeof stepsItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        StepsPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: stepsItemRecipe,
      type: Function as PropType<typeof stepsItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        StepsPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: variantSlots.trigger({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsIndicator = defineComponent({
  inheritAttrs: false,
  name: "StepsIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: stepsItemRecipe,
      type: Function as PropType<typeof stepsItemRecipe>,
    },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        StepsPrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: variantSlots.indicator({ class: props.class }),
        },
        () => [
          h("span", { class: variantSlots.label() }, children.default?.()),
          h(PhCheck, { class: variantSlots.check() }),
        ],
      );
    };
  },
});

export const StepsSeparator = defineComponent({
  inheritAttrs: false,
  name: "StepsSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: stepsItemRecipe,
      type: Function as PropType<typeof stepsItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        StepsPrimitive.Separator as ArkPart,
        {
          ...attrs,
          class: variantSlots.separator({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsTitle = defineComponent({
  inheritAttrs: false,
  name: "StepsTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: stepsItemRecipe,
      type: Function as PropType<typeof stepsItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: variantSlots.title({ class: props.class }),
          "data-part": "title",
          "data-scope": "steps",
        },
        slots,
      );
    };
  },
});

export const StepsDescription = defineComponent({
  inheritAttrs: false,
  name: "StepsDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: stepsItemRecipe,
      type: Function as PropType<typeof stepsItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: variantSlots.description({ class: props.class }),
          "data-part": "description",
          "data-scope": "steps",
        },
        slots,
      );
    };
  },
});

export const StepsContent = defineComponent({
  inheritAttrs: false,
  name: "StepsContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: stepsRecipe,
      type: Function as PropType<typeof stepsRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        StepsPrimitive.Content as ArkPart,
        {
          ...attrs,
          class: variantSlots.content({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsCompletedContent = defineComponent({
  inheritAttrs: false,
  name: "StepsCompletedContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: stepsRecipe,
      type: Function as PropType<typeof stepsRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        StepsPrimitive.CompletedContent as ArkPart,
        {
          ...attrs,
          class: variantSlots.completedContent({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const StepsPrevTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsPrevTrigger",
  setup(_, { attrs, slots }) {
    return () => h(StepsPrimitive.PrevTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const StepsNextTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsNextTrigger",
  setup(_, { attrs, slots }) {
    return () => h(StepsPrimitive.NextTrigger as ArkPart, { ...attrs }, slots);
  },
});
// #endregion
