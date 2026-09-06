import { ark } from "@ark-ui/vue/factory";
import { ProgressRoot, ProgressValueText, useProgressContext } from "@ark-ui/vue/progress";
import {
  type CircularProgressRecipeSlot,
  circularProgressRecipe,
} from "@pisagor/recipes/circular-progress";
import { computed, defineComponent, h, type PropType, type VNode } from "vue";
import type { VariantClassNames } from "../../internal/types";

// #region Types
type CircularProgressClassNames = VariantClassNames<CircularProgressRecipeSlot>;

export interface CircularProgressProps {
  /**
   * Style recipe. Defaults to `circularProgressRecipe` from `@pisagor/recipes/circular-progress`.
   *
   * @defaultValue circularProgressRecipe
   */
  recipe?: typeof circularProgressRecipe;
  class?: unknown;
  classNames?: CircularProgressClassNames;
  indeterminate?: boolean;
  isValueVisible?: boolean;
  size?: number;
  thickness?: number;
  trackProps?: Record<string, unknown>;
  value?: number;
  valueProps?: Record<string, unknown>;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const CircularProgressTrack = defineComponent({
  inheritAttrs: false,
  name: "CircularProgressTrack",
  props: {
    classNames: { default: undefined, type: Object as PropType<CircularProgressClassNames> },
    recipe: {
      default: circularProgressRecipe,
      type: Function as PropType<typeof circularProgressRecipe>,
    },
    size: { default: 32, type: Number },
    thickness: { default: 4, type: Number },
    trackProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
  },
  setup(props) {
    const progress = useProgressContext();

    return () => {
      const slots = props.recipe();
      const { max, min, value } = progress.value;
      const radius = props.size / 2 - props.thickness / 2;
      const circumference = 2 * Math.PI * radius;
      const range = Math.max(max - min, 1);
      const normalizedValue = value == null ? min : Math.min(Math.max(value, min), max);
      const percent = (normalizedValue - min) / range;
      const dashOffset = circumference * (1 - percent);

      return h(
        ark.svg as ArkPart,
        {
          ...props.trackProps,
          "aria-hidden": "true",
          class: slots.track({ class: props.classNames?.track }),
          "data-part": "circle",
          "data-scope": "circular-progress",
          height: props.size,
          viewBox: `0 0 ${props.size} ${props.size}`,
          width: props.size,
        },
        () => [
          h("circle", {
            cx: props.size / 2,
            cy: props.size / 2,
            "data-part": "track-bg",
            "data-scope": "circular-progress",
            r: radius,
            strokeWidth: props.thickness,
          }),
          h("circle", {
            class: slots.range({ class: props.classNames?.range }),
            cx: props.size / 2,
            cy: props.size / 2,
            "data-part": "range",
            "data-scope": "circular-progress",
            r: radius,
            strokeDasharray: circumference,
            strokeDashoffset: value == null ? circumference * 0.7 : dashOffset,
            strokeLinecap: "round",
            strokeWidth: props.thickness,
          }),
        ],
      );
    };
  },
});

const CircularProgressValue = defineComponent({
  inheritAttrs: false,
  name: "CircularProgressValue",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(ProgressValueText as ArkPart, {
        ...attrs,
        class: props.class,
      });
  },
});

export const CircularProgress = defineComponent({
  inheritAttrs: false,
  name: "CircularProgress",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<CircularProgressClassNames> },
    indeterminate: { default: false, type: Boolean },
    isValueVisible: { default: undefined, type: Boolean },
    recipe: {
      default: circularProgressRecipe,
      type: Function as PropType<typeof circularProgressRecipe>,
    },
    size: { default: 32, type: Number },
    thickness: { default: 4, type: Number },
    trackProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    value: { default: undefined, type: Number },
    valueProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
  },
  setup(props, { attrs, slots }) {
    const slotsVariants = computed(() => props.recipe());

    return () => {
      const variantSlots = slotsVariants.value;
      const children: VNode[] = [];

      if (props.isValueVisible) {
        children.push(
          h(
            "span",
            { class: variantSlots.valueWrapper({ class: props.classNames?.valueWrapper }) },
            () =>
              h(CircularProgressValue as ArkPart, {
                ...props.valueProps,
                class: variantSlots.value({ class: props.classNames?.value }),
              }),
          ),
        );
      }

      const slotContent = slots.default?.();
      if (slotContent) {
        children.push(...(Array.isArray(slotContent) ? slotContent : [slotContent]));
      }

      children.push(
        h(CircularProgressTrack, {
          classNames: props.classNames,
          recipe: props.recipe,
          size: props.size,
          thickness: props.thickness,
          trackProps: props.trackProps,
        }),
      );

      return h(
        ProgressRoot as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          modelValue: props.indeterminate ? null : props.value,
        },
        () => children,
      );
    };
  },
});
// #endregion
