import { ark } from "@ark-ui/vue/factory";
import {
  type ProgressRootProps,
  ProgressRootProvider,
  type ProgressValueChangeDetails,
  ProgressValueText,
  type UseProgressReturn,
  useProgress,
  useProgressContext,
} from "@ark-ui/vue/progress";
import type { CircularProgressProps as BaseCircularProgressProps } from "@pisagor/props";
import {
  type CircularProgressRecipeSlot,
  circularProgressRecipe,
} from "@pisagor/recipes";
import { computed, defineComponent, h, type PropType, type VNode } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const {
  useStyles: useCircularProgress,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "CircularProgress",
  recipe: circularProgressRecipe,
});
// #endregion

// #region Parts
const CircularProgressRoot = withProvider(ProgressRootProvider, {
  name: "Root",
  slot: "base",
});

/**
 * Progressbar semantics for the root. Ark only exposes them on `Track` /
 * `Circle`, which the hand-drawn ring does not render.
 */
function getProgressbarProps(progress: UseProgressReturn["value"]) {
  if (progress.indeterminate) return { role: "progressbar" } as const;

  return {
    "aria-valuemax": progress.max,
    "aria-valuemin": progress.min,
    "aria-valuenow": progress.value ?? undefined,
    "aria-valuetext": progress.valueAsString,
    role: "progressbar",
  } as const;
}

const CircularProgressValueWrapper = withContext("span", {
  defaultProps: { "data-part": "value-wrapper" },
  name: "ValueWrapper",
  slot: "valueWrapper",
});

const CircularProgressValue = withContext(ProgressValueText, {
  name: "Value",
});

type ArkPart = Parameters<typeof h>[0];

const CircularProgressTrack = defineComponent({
  inheritAttrs: false,
  name: "CircularProgress.Track",
  props: {
    class: { default: undefined, type: String as PropType<string> },
    rangeClassName: { default: undefined, type: String as PropType<string> },
    size: { default: 32, type: Number },
    thickness: { default: 4, type: Number },
    trackProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
  },
  setup(props) {
    const styles = useCircularProgress();
    const progress = useProgressContext();

    return () => {
      const { max, min, value } = progress.value;
      const radius = props.size / 2 - props.thickness / 2;
      const circumference = 2 * Math.PI * radius;
      const range = Math.max(max - min, 1);
      const normalizedValue =
        value == null ? min : Math.min(Math.max(value, min), max);
      const percent = (normalizedValue - min) / range;
      const dashOffset = circumference * (1 - percent);

      return h(
        ark.svg as ArkPart,
        {
          ...props.trackProps,
          "aria-hidden": "true",
          class: styles.slots.track({ class: props.class }),
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
            class: styles.slots.range({ class: props.rangeClassName }),
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
// #endregion

// #region Types
type CircularProgressClassNames = VariantClassNames<CircularProgressRecipeSlot>;

export interface CircularProgressProps
  extends BaseCircularProgressProps,
    Pick<
      ProgressRootProps,
      | "defaultValue"
      | "formatOptions"
      | "id"
      | "ids"
      | "locale"
      | "max"
      | "min"
      | "orientation"
      | "translations"
    > {
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

// #region Closed
export const CircularProgress = defineComponent({
  emits: {
    valueChange: (_details: ProgressValueChangeDetails) => true,
  },
  inheritAttrs: false,
  name: "CircularProgress",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<CircularProgressClassNames>,
    },
    defaultValue: {
      default: undefined,
      type: Number as PropType<ProgressRootProps["defaultValue"]>,
    },
    formatOptions: {
      default: undefined,
      type: Object as PropType<ProgressRootProps["formatOptions"]>,
    },
    id: { default: undefined, type: String },
    ids: {
      default: undefined,
      type: Object as PropType<ProgressRootProps["ids"]>,
    },
    indeterminate: { default: false, type: Boolean },
    isValueVisible: { default: undefined, type: Boolean },
    locale: { default: undefined, type: String },
    max: { default: undefined, type: Number },
    min: { default: undefined, type: Number },
    orientation: {
      default: undefined,
      type: String as PropType<ProgressRootProps["orientation"]>,
    },
    size: { default: 32, type: Number },
    thickness: { default: 4, type: Number },
    trackProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    translations: {
      default: undefined,
      type: Object as PropType<ProgressRootProps["translations"]>,
    },
    value: { default: undefined, type: Number },
    valueProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
  },
  setup(props, { attrs, emit, slots }) {
    const progress = useProgress(
      computed(() => ({
        defaultValue: props.defaultValue,
        formatOptions: props.formatOptions,
        id: props.id,
        ids: props.ids,
        locale: props.locale,
        max: props.max,
        min: props.min,
        modelValue: props.indeterminate ? null : props.value,
        onValueChange: (details: ProgressValueChangeDetails) =>
          emit("valueChange", details),
        orientation: props.orientation,
        translations: props.translations,
      })),
    );

    return () => {
      const children: VNode[] = [];

      if (props.isValueVisible) {
        children.push(
          h(
            CircularProgressValueWrapper,
            { class: props.classNames?.valueWrapper },
            () =>
              h(CircularProgressValue, {
                ...props.valueProps,
                class: props.classNames?.value,
              }),
          ),
        );
      }

      const slotContent = slots.default?.();
      if (slotContent) {
        children.push(
          ...(Array.isArray(slotContent) ? slotContent : [slotContent]),
        );
      }

      children.push(
        h(CircularProgressTrack, {
          class: props.classNames?.track,
          rangeClassName: props.classNames?.range,
          size: props.size,
          thickness: props.thickness,
          trackProps: props.trackProps,
        }),
      );

      return h(
        CircularProgressRoot,
        {
          ...attrs,
          ...getProgressbarProps(progress.value),
          class: props.class,
          value: progress.value,
        },
        () => children,
      );
    };
  },
});
// #endregion
