import { Progress as ProgressPrimitive } from "@ark-ui/vue/progress";
import type { ProgressProps as BaseProgressProps } from "@pisagor/props";
import {
  fieldRecipe,
  type ProgressRecipeSlot,
  progressRecipe,
} from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Progress",
  recipe: progressRecipe,
});
// #endregion

// #region Parts
const ProgressRoot = withProvider(ProgressPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const ProgressHeader = withContext("div", {
  name: "Header",
});

const ProgressValue = withContext(ProgressPrimitive.ValueText, {
  name: "Value",
});

const ProgressTrack = withContext(ProgressPrimitive.Track, {
  name: "Track",
});

const ProgressRange = withContext(ProgressPrimitive.Range, {
  name: "Range",
});
// #endregion

// #region Types
type ProgressClassNames = VariantClassNames<ProgressRecipeSlot>;

export interface ProgressProps extends BaseProgressProps {
  class?: unknown;
  classNames?: ProgressClassNames;
  /**
   * Initial value when uncontrolled.
   *
   * @defaultValue 0
   */
  defaultValue?: number;
  indeterminate?: boolean;
  isValueVisible?: boolean;
  label?: string;
  orientation?: "horizontal" | "vertical";
  rangeProps?: Record<string, unknown>;
  trackProps?: Record<string, unknown>;
  value?: number;
  valueProps?: Record<string, unknown>;
}
// #endregion

// #region Closed
export const Progress = defineComponent({
  inheritAttrs: false,
  name: "Progress",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<ProgressClassNames>,
    },
    defaultValue: { default: 0, type: Number },
    indeterminate: { default: false, type: Boolean },
    isValueVisible: { default: undefined, type: Boolean },
    label: { default: undefined, type: String },
    orientation: {
      default: "horizontal",
      type: String as PropType<ProgressProps["orientation"]>,
    },
    rangeProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    trackProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    value: { default: undefined, type: Number },
    valueProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const showHeader = props.label || props.isValueVisible;

      return h(
        ProgressRoot,
        {
          ...attrs,
          class: props.class,
          defaultValue: props.defaultValue,
          modelValue: props.indeterminate ? null : props.value,
          orientation: props.orientation,
        },
        () => {
          const children: VNodeChild[] = [];

          if (showHeader) {
            children.push(
              h(ProgressHeader, { class: props.classNames?.header }, () => [
                props.label
                  ? h("label", { class: fieldRecipe().label() }, props.label)
                  : null,
                props.isValueVisible
                  ? h(ProgressValue, {
                      ...props.valueProps,
                      class: props.classNames?.value,
                    })
                  : null,
              ]),
            );
          }

          children.push(slots.default?.());
          children.push(
            h(
              ProgressTrack,
              { ...props.trackProps, class: props.classNames?.track },
              () =>
                h(ProgressRange, {
                  ...props.rangeProps,
                  class: props.classNames?.range,
                }),
            ),
          );

          return children;
        },
      );
    };
  },
});
// #endregion
