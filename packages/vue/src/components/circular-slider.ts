import {
  AngleSlider as AngleSliderPrimitive,
  useAngleSliderContext,
} from "@ark-ui/vue";
import type {
  CircularSliderContract,
  CircularSliderRootContract,
} from "@pisagor/contracts";
import { circularSliderRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType, unref } from "vue";
import {
  type ClassValue,
  createContext,
  createSlotRecipeContext,
} from "../internal";
import { contentProp, slotOrProp } from "../internal/shorthand";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "CircularSlider",
  recipe: circularSliderRecipe,
});

interface CircularSliderGeometry {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

const [provideGeometry, , useGeometryRef] = createContext(
  "CircularSliderGeometry",
)<CircularSliderGeometry>();

/** Returns a getter for the root geometry; call it during render. */
function useGeometry(): () => CircularSliderGeometry {
  const geometryRef = useGeometryRef();

  return () => {
    const geometry = unref(geometryRef);

    if (!geometry) {
      throw new Error(
        "CircularSlider parts must be rendered inside CircularSlider.Root",
      );
    }

    return geometry;
  };
}
// #endregion

// #region Types
type ArkPart = Parameters<typeof h>[0];

export interface CircularSliderRootProps extends CircularSliderRootContract {
  /** Called with the angle in degrees when the value changes. */
  onValueChange?: (value: number) => void;
  /**
   * Diameter in pixels.
   *
   * @defaultValue 100
   */
  size?: number;
  /**
   * Ring thickness in pixels.
   *
   * @defaultValue 6
   */
  thickness?: number;
  /** Controlled angle in degrees. */
  value?: number;
}

export interface CircularSliderProps
  extends CircularSliderRootProps, CircularSliderContract {
  /** Props forwarded to the hidden input element. */
  hiddenInputProps?: Record<string, unknown>;
  /** Visible label rendered inside the slider; also the `label` slot. */
  label?: string;
  /** Render markers: `true` for defaults, or explicit angles. */
  markers?: boolean | number[];
  /**
   * With `markers`, place one marker per `step` instead of the clock defaults.
   *
   * @defaultValue false
   */
  markersAtSteps?: boolean;
  /**
   * Whether to render the current value in the center.
   *
   * @defaultValue false
   */
  showValue?: boolean;
}

export type {
  AngleSliderControlProps as CircularSliderControlProps,
  AngleSliderHiddenInputProps as CircularSliderHiddenInputProps,
  AngleSliderLabelProps as CircularSliderLabelProps,
  AngleSliderMarkerGroupProps as CircularSliderMarkerGroupProps,
  AngleSliderMarkerProps as CircularSliderMarkerProps,
  AngleSliderThumbProps as CircularSliderThumbProps,
  AngleSliderValueTextProps as CircularSliderValueTextProps,
} from "@ark-ui/vue";
// #endregion

// #region Parts
const RootBase = withProvider<CircularSliderRootContract>(
  AngleSliderPrimitive.Root,
  { name: "Root", slot: "base" },
);

/** Root; provides ring geometry and passes the numeric angle to `onValueChange`. */
export const CircularSliderRoot = defineComponent({
  inheritAttrs: false,
  name: "CircularSlider.Root",
  props: {
    onValueChange: {
      default: undefined,
      type: Function as PropType<CircularSliderRootProps["onValueChange"]>,
    },
    size: { default: 100, type: Number },
    step: { default: 1, type: Number },
    thickness: { default: 6, type: Number },
    value: { default: undefined, type: Number },
  },
  setup(props, { attrs, slots }) {
    const geometry = computed<CircularSliderGeometry>(() => ({
      ringCircumference: 2 * Math.PI * (props.size / 2 - props.thickness / 2),
      ringRadius: props.size / 2 - props.thickness / 2,
      size: props.size,
      thickness: props.thickness,
      thumbSize: Math.max(props.thickness + 8, 16),
    }));

    provideGeometry(geometry);

    return () =>
      h(
        RootBase as ArkPart,
        {
          ...attrs,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: { value: number }) =>
                props.onValueChange?.(details.value)
            : undefined,
          step: props.step,
          style: [
            {
              "--thickness": `${props.thickness}px`,
              height: `${props.size}px`,
              width: `${props.size}px`,
            },
            attrs.style,
          ],
        },
        slots,
      );
  },
});

export const CircularSliderLabel = withContext(AngleSliderPrimitive.Label, {
  name: "Label",
});

export const CircularSliderControl = withContext(AngleSliderPrimitive.Control, {
  name: "Control",
});

export const CircularSliderMarkerGroup = withContext(
  AngleSliderPrimitive.MarkerGroup,
  { name: "MarkerGroup" },
);

export const CircularSliderHiddenInput = AngleSliderPrimitive.HiddenInput;

const ValueTextBase = withContext(AngleSliderPrimitive.ValueText, {
  name: "ValueText",
  slot: "value",
});

/** Value text; renders the numeric angle when no children are given. */
export const CircularSliderValueText = defineComponent({
  inheritAttrs: false,
  name: "CircularSlider.ValueText",
  setup(_, { attrs, slots }) {
    const api = useAngleSliderContext();

    return () =>
      h(
        ValueTextBase as ArkPart,
        attrs,
        () => slots.default?.() ?? unref(api).value,
      );
  },
});

/** SVG progress ring (track + range) sized from the root geometry. */
export const CircularSliderRing = defineComponent({
  inheritAttrs: false,
  name: "CircularSlider.Ring",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const api = useAngleSliderContext();
    const styles = useStyles();
    const geometry = useGeometry();

    return () => {
      const { ringCircumference, ringRadius, size, thickness } = geometry();
      const slots = styles.slots;
      const dashLength = (unref(api).value / 360) * ringCircumference;
      const gapLength = ringCircumference - dashLength;
      const center = size / 2;

      return h(
        "svg",
        {
          "aria-hidden": "true",
          height: size,
          viewBox: `0 0 ${size} ${size}`,
          width: size,
          ...attrs,
          class: slots.ring({ class: cn(props.class) }),
        },
        [
          h("circle", {
            class: slots.ringTrack(),
            cx: center,
            cy: center,
            fill: "transparent",
            r: ringRadius,
            "stroke-width": thickness,
          }),
          h("circle", {
            class: slots.ringRange(),
            cx: center,
            cy: center,
            fill: "transparent",
            r: ringRadius,
            "stroke-dasharray": `${dashLength} ${gapLength}`,
            "stroke-width": thickness,
          }),
        ],
      );
    };
  },
});

/** Thumb positioned on the ring; renders its handle by default. */
export const CircularSliderThumb = defineComponent({
  inheritAttrs: false,
  name: "CircularSlider.Thumb",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();
    const geometry = useGeometry();

    return () => {
      const { ringRadius, thumbSize } = geometry();
      const halfThumb = thumbSize / 2;

      return h(
        AngleSliderPrimitive.Thumb as ArkPart,
        {
          ...attrs,
          class: styles.slots.thumb({ class: cn(props.class) }),
          style: [{ "--size": `${thumbSize}px` }, attrs.style],
        },
        () =>
          slots.default?.() ??
          h("span", {
            class: styles.slots.thumbHandle(),
            style: {
              insetBlockStart: `calc(50% - ${ringRadius}px - ${halfThumb}px)`,
              insetInlineStart: `calc(50% - ${halfThumb}px)`,
            },
          }),
      );
    };
  },
});

/** Marker sized and offset from the ring geometry. */
export const CircularSliderMarker = defineComponent({
  inheritAttrs: false,
  name: "CircularSlider.Marker",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    value: { required: true, type: Number },
  },
  setup(props, { attrs }) {
    const styles = useStyles();
    const geometry = useGeometry();

    return () => {
      const { ringRadius, size, thickness } = geometry();
      const markerHeight = Math.max(8, Math.min(thickness * 1.1, 16));
      const markerWidth = Math.max(4, Math.min(thickness * 0.4, 6));
      const markerOffset =
        size / 2 - ringRadius - markerHeight / 2 + (thickness + 4);

      return h(AngleSliderPrimitive.Marker as ArkPart, {
        ...attrs,
        class: styles.slots.marker({ class: cn(props.class) }),
        style: [
          {
            "--marker-height": `${markerHeight}px`,
            "--marker-offset": `${markerOffset}px`,
            "--marker-width": `${markerWidth}px`,
          },
          attrs.style,
        ],
        value: props.value,
      });
    };
  },
});
// #endregion

// #region Shorthand
const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

const ValueNumber = defineComponent({
  name: "CircularSlider.ValueNumber",
  setup() {
    const api = useAngleSliderContext();

    return () => String(unref(api).value);
  },
});

export const CircularSliderShorthand = defineComponent({
  inheritAttrs: false,
  name: "CircularSlider",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<CircularSliderProps["classNames"]>,
    },
    hiddenInputProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    label: contentProp,
    markers: {
      default: undefined,
      type: [Boolean, Array] as PropType<boolean | number[] | undefined>,
    },
    markersAtSteps: { default: false, type: Boolean },
    showValue: { default: false, type: Boolean },
    step: { default: 1, type: Number },
    valuePrefix: contentProp,
    valueSuffix: contentProp,
  },
  setup(props, { attrs, slots }) {
    const markerValues = computed(() => {
      const markers = props.markers;

      if (Array.isArray(markers) && markers.length > 0) {
        return markers;
      }
      if (markers === true) {
        return props.markersAtSteps
          ? Array.from(
              { length: Math.floor(360 / props.step) },
              (_, i) => i * props.step,
            )
          : CLOCK_MARKER_ANGLES;
      }

      return null;
    });

    return () => {
      const classNames = props.classNames;
      const label = slotOrProp(slots.label, props.label);
      const prefix = slotOrProp(slots.valuePrefix, props.valuePrefix);
      const suffix = slotOrProp(slots.valueSuffix, props.valueSuffix);
      const markers = markerValues.value;

      return h(
        CircularSliderRoot as ArkPart,
        { ...attrs, step: props.step },
        () => [
          h(CircularSliderControl, { class: classNames?.control }, () => [
            h(CircularSliderRing, { class: classNames?.ring }),
            markers
              ? h(
                  CircularSliderMarkerGroup,
                  { class: classNames?.markerGroup },
                  () =>
                    markers.map((value) =>
                      h(CircularSliderMarker, {
                        class: classNames?.marker,
                        key: value,
                        value,
                      }),
                    ),
                )
              : null,
            h(CircularSliderThumb, { class: classNames?.thumb }),
          ]),
          label
            ? h(CircularSliderLabel, { class: classNames?.label }, label)
            : null,
          props.showValue
            ? h(CircularSliderValueText, { class: classNames?.value }, () => [
                prefix?.(),
                h(ValueNumber),
                suffix?.(),
              ])
            : null,
          h(CircularSliderHiddenInput as ArkPart, props.hiddenInputProps),
        ],
      );
    };
  },
});
// #endregion

export const CircularSlider = Object.assign(CircularSliderShorthand, {
  Context: AngleSliderPrimitive.Context,
  Control: CircularSliderControl,
  HiddenInput: CircularSliderHiddenInput,
  Label: CircularSliderLabel,
  Marker: CircularSliderMarker,
  MarkerGroup: CircularSliderMarkerGroup,
  Ring: CircularSliderRing,
  Root: CircularSliderRoot,
  Thumb: CircularSliderThumb,
  ValueText: CircularSliderValueText,
});
