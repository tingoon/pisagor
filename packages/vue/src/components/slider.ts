import { Slider as SliderPrimitive } from "@ark-ui/vue";
import type {
  SliderControlProps,
  SliderMarkerGroupProps,
  SliderMarkerProps,
  SliderRangeProps,
  SliderRootProps as SliderRootPrimitiveProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueTextProps,
} from "@ark-ui/vue";
import type { SliderContract, SliderRootContract } from "@pisagor/contracts";
import { fieldRecipe, sliderRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Slider",
  recipe: sliderRecipe,
});
// #endregion

// #region Types
type SliderRootProps = SliderRootPrimitiveProps & SliderRootContract;

export interface SliderProps
  extends
    Omit<SliderRootProps, "children" | "modelValue" | "onValueChange">,
    SliderContract {
  /**
   * The interval between markers.
   *
   * @defaultValue 1
   */
  markerInterval?: number;
  /**
   * The labels to show on the markers.
   *
   * @defaultValue [ ]
   */
  markerLabels?: string[];
  /**
   * Whether to show markers.
   *
   * @defaultValue false
   */
  showMarkers?: boolean;
  /**
   * Whether to show the current value text next to the label.
   *
   * @defaultValue false
   */
  showValue?: boolean;
  label?: VNodeChild;
  /** Controlled slider value. */
  value?: number[];
  /**
   * Called when the slider value changes.
   *
   * @remarks
   *   Receives the numeric value array directly, not Ark UI event details.
   */
  onValueChange?: (value: number[]) => void;
  /** Extra props forwarded to the slider control element */
  controlProps?: Omit<SliderControlProps, "children" | "class">;
  /** Extra props forwarded to the slider range element */
  rangeProps?: Omit<SliderRangeProps, "children" | "class">;
  /** Extra props forwarded to each slider thumb element */
  thumbProps?: Omit<SliderThumbProps, "children" | "index" | "class">;
  /** Extra props forwarded to the slider track element */
  trackProps?: Omit<SliderTrackProps, "children" | "class">;
  /** Extra props forwarded to the slider value text element */
  valueTextProps?: Omit<SliderValueTextProps, "children" | "class">;
}

type SliderHeaderProps = {
  class?: unknown;
};

type SliderMarkerTickProps = {
  class?: unknown;
};

type SliderMarkerLabelProps = {
  class?: unknown;
};
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const Root = withProvider<SliderRootProps>(SliderPrimitive.Root, {
  name: "Root",
});

const Header = withContext<SliderHeaderProps>("div", {
  name: "Header",
});

const ValueText = withContext<SliderValueTextProps>(SliderPrimitive.ValueText, {
  name: "ValueText",
  slot: "value",
});

const Control = withContext<SliderControlProps>(SliderPrimitive.Control, {
  name: "Control",
});

const Track = withContext<SliderTrackProps>(SliderPrimitive.Track, {
  name: "Track",
});

const Range = withContext<SliderRangeProps>(SliderPrimitive.Range, {
  name: "Range",
});

const Thumb = withContext<SliderThumbProps>(SliderPrimitive.Thumb, {
  name: "Thumb",
});

const MarkerGroup = withContext<SliderMarkerGroupProps>(
  SliderPrimitive.MarkerGroup,
  { name: "MarkerGroup" },
);

const Marker = withContext<SliderMarkerProps>(SliderPrimitive.Marker, {
  name: "Marker",
});

const MarkerTick = withContext<SliderMarkerTickProps>("span", {
  name: "MarkerTick",
});

const MarkerLabel = withContext<SliderMarkerLabelProps>("span", {
  name: "MarkerLabel",
});

const Label = defineComponent({
  inheritAttrs: false,
  name: "Slider.Label",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        SliderPrimitive.Label as ArkPart,
        {
          ...attrs,
          class: fieldRecipe().label({ class: props.class }),
        },
        slots,
      );
  },
});
// #endregion

// #region Closed
const SliderShorthand = defineComponent({
  inheritAttrs: false,
  name: "Slider",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<SliderProps["classNames"]>,
    },
    controlProps: {
      default: undefined,
      type: Object as PropType<SliderProps["controlProps"]>,
    },
    defaultValue: {
      default: undefined,
      type: Array as PropType<number[] | undefined>,
    },
    label: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    markerInterval: { default: 1, type: Number },
    markerLabels: {
      default: () => [],
      type: Array as PropType<string[]>,
    },
    max: { default: 100, type: Number },
    min: { default: 0, type: Number },
    onValueChange: {
      default: undefined,
      type: Function as PropType<SliderProps["onValueChange"]>,
    },
    rangeProps: {
      default: undefined,
      type: Object as PropType<SliderProps["rangeProps"]>,
    },
    showMarkers: { default: false, type: Boolean },
    showValue: { default: false, type: Boolean },
    tabIndex: { default: undefined, type: Number },
    thumbProps: {
      default: undefined,
      type: Object as PropType<SliderProps["thumbProps"]>,
    },
    trackProps: {
      default: undefined,
      type: Object as PropType<SliderProps["trackProps"]>,
    },
    value: {
      default: undefined,
      type: Array as PropType<number[] | undefined>,
    },
    valueTextProps: {
      default: undefined,
      type: Object as PropType<SliderProps["valueTextProps"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const _values = Array.isArray(props.value)
        ? props.value
        : Array.isArray(props.defaultValue)
          ? props.defaultValue
          : [props.min];

      return h(
        Root,
        {
          ...attrs,
          class: props.class as string | undefined,
          defaultValue: props.defaultValue,
          max: props.max,
          min: props.min,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: { value: number[] }) =>
                props.onValueChange?.(details.value)
            : undefined,
        },
        () => [
          (props.label !== undefined || props.showValue) &&
            h(Header, { class: props.classNames?.header }, () => [
              props.label !== undefined
                ? h(
                    SliderPrimitive.Label as ArkPart,
                    { class: fieldRecipe().label() },
                    () => props.label,
                  )
                : null,
              props.showValue
                ? h(ValueText, {
                    ...props.valueTextProps,
                    class: props.classNames?.value,
                  })
                : null,
            ]),

          slots.default?.(),

          h(
            Control,
            { ...props.controlProps, class: props.classNames?.control },
            () => [
              h(
                Track,
                { ...props.trackProps, class: props.classNames?.track },
                () =>
                  h(Range, {
                    ...props.rangeProps,
                    class: props.classNames?.range,
                  }),
              ),
              ...Array.from({ length: _values.length }, (_, index) =>
                h(
                  Thumb,
                  {
                    ...props.thumbProps,
                    class: props.classNames?.thumb,
                    index,
                    key: `slider-thumb-${index}`,
                    tabIndex: props.tabIndex ?? undefined,
                  },
                  () => h(SliderPrimitive.HiddenInput as ArkPart),
                ),
              ),
            ],
          ),

          props.showMarkers
            ? h(MarkerGroup, { class: props.classNames?.markerGroup }, () =>
                Array.from({ length: props.max - props.min + 1 }, (_, index) =>
                  h(
                    Marker,
                    {
                      class: props.classNames?.marker,
                      "data-interval":
                        index % props.markerInterval === 0 ? undefined : "",
                      key: String(props.min + index),
                      value: props.min + index,
                    },
                    () => [
                      h(MarkerTick, {
                        class: props.classNames?.markerTick,
                      }),
                      h(
                        MarkerLabel,
                        { class: props.classNames?.markerLabel },
                        () =>
                          props.markerLabels?.[index] ??
                          String(props.min + index),
                      ),
                    ],
                  ),
                ),
              )
            : null,
        ],
      );
    };
  },
});
// #endregion

export type {
  SliderControlProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueTextProps,
} from "@ark-ui/vue";

export const Slider = Object.assign(SliderShorthand, {
  Control,
  Header,
  Label,
  Marker,
  MarkerGroup,
  MarkerLabel,
  MarkerTick,
  Range,
  Root,
  Thumb,
  Track,
  ValueText,
});
