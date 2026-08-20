import {
  AngleSlider as AngleSliderPrimitive,
  useAngleSliderContext,
} from "@ark-ui/vue/angle-slider";
import { circularSliderVariants } from "@pisagor/styles/ui/circular-slider";
import { cn } from "@pisagor/utils";
import {
  defineComponent,
  h,
  type PropType,
  reactive,
  toValue,
  unref,
  type VNodeChild,
  watchEffect,
} from "vue";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";
import { FieldLabel } from "../field/field";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

export interface CircularSliderProps extends WithTestId {
  class?: unknown;
  defaultValue?: number;
  disabled?: boolean;
  /** Extra props forwarded to the hidden input element. */
  hiddenInputProps?: Record<string, unknown>;
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  onValueChange?: (value: number) => void;
  size?: number;
  step?: number;
  thickness?: number;
  value?: number;
}
// #endregion

// #region Context
const [provideCircularSliderContext, , useCircularSliderContext] =
  createContext<CircularSliderContextValue>({
    name: "CircularSlider",
  });
// #endregion

const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

// #region Parts
export const CircularSliderRoot = defineComponent({
  inheritAttrs: false,
  name: "CircularSliderRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: Number },
    disabled: { default: undefined, type: Boolean },
    hiddenInputProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    markers: {
      default: undefined,
      type: [Boolean, Array] as PropType<boolean | number[] | undefined>,
    },
    markersAtSteps: { default: false, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<CircularSliderProps["onValueChange"]>,
    },
    size: { default: 100, type: Number },
    step: { default: 1, type: Number },
    testId: String,
    thickness: { default: 6, type: Number },
    value: { default: undefined, type: Number },
  },
  setup(props, { attrs, slots }) {
    const context = reactive<CircularSliderContextValue>({
      ringCircumference: 2 * Math.PI * (props.size / 2 - props.thickness / 2),
      ringRadius: props.size / 2 - props.thickness / 2,
      size: props.size,
      thickness: props.thickness,
      thumbSize: Math.max(props.thickness + 8, 16),
    });

    watchEffect(() => {
      context.ringCircumference = 2 * Math.PI * (props.size / 2 - props.thickness / 2);
      context.ringRadius = props.size / 2 - props.thickness / 2;
      context.size = props.size;
      context.thickness = props.thickness;
      context.thumbSize = Math.max(props.thickness + 8, 16);
    });

    provideCircularSliderContext(context);

    return () =>
      h(
        AngleSliderPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(circularSliderVariants().root(), props.class),
          "data-testid": props.testId,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: { value: number }) => props.onValueChange?.(details.value)
            : undefined,
          step: props.step,
          style: {
            "--thickness": `${props.thickness}px`,
            height: `${props.size}px`,
            width: `${props.size}px`,
          },
        },
        () => [
          h(CircularSliderControl, {
            markers: props.markers,
            markersAtSteps: props.markersAtSteps,
            step: props.step,
          }),
          slots.default?.(),
          h(AngleSliderPrimitive.HiddenInput as ArkPart, { ...props.hiddenInputProps }),
        ],
      );
  },
});

export const CircularSliderControl = defineComponent({
  inheritAttrs: false,
  name: "CircularSliderControl",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    markers: {
      default: undefined,
      type: [Boolean, Array] as PropType<boolean | number[] | undefined>,
    },
    markersAtSteps: { default: false, type: Boolean },
    step: { default: 1, type: Number },
  },
  setup(props, { attrs }) {
    return () => {
      const markerValues =
        Array.isArray(props.markers) && props.markers.length > 0
          ? props.markers
          : props.markers === true
            ? props.markersAtSteps
              ? Array.from({ length: Math.floor(360 / props.step) }, (_, i) => i * props.step)
              : CLOCK_MARKER_ANGLES
            : null;

      return h(
        AngleSliderPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: cn(circularSliderVariants().control(), props.class),
        },
        () => [
          h(CircularSliderProgressRing),
          markerValues
            ? h(CircularSliderMarkerGroup, {}, () =>
                markerValues.map((value) => h(CircularSliderMarker, { key: value, value })),
              )
            : null,
          h(CircularSliderThumb),
        ],
      );
    };
  },
});

const CircularSliderProgressRing = defineComponent({
  name: "CircularSliderProgressRing",
  setup() {
    const api = useAngleSliderContext();
    const contextRef = useCircularSliderContext();

    return () => {
      const context = toValue(contextRef);
      if (!context) return null;
      const { size, thickness, ringRadius, ringCircumference } = context;
      const slots = circularSliderVariants();

      const percent = unref(api).value / 360;
      const dashLength = percent * ringCircumference;
      const gapLength = ringCircumference - dashLength;
      const center = size / 2;

      return h(
        "svg",
        {
          "aria-hidden": "true",
          class: cn(slots.ring()),
          height: size,
          viewBox: `0 0 ${size} ${size}`,
          width: size,
        },
        [
          h("circle", {
            class: cn(slots.ringTrack()),
            cx: center,
            cy: center,
            fill: "transparent",
            r: ringRadius,
            strokeWidth: thickness,
          }),
          h("circle", {
            class: cn(slots.ringRange()),
            cx: center,
            cy: center,
            fill: "transparent",
            r: ringRadius,
            strokeDasharray: `${dashLength} ${gapLength}`,
            strokeWidth: thickness,
          }),
        ],
      );
    };
  },
});

export const CircularSliderThumb = defineComponent({
  inheritAttrs: false,
  name: "CircularSliderThumb",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    const contextRef = useCircularSliderContext();

    return () => {
      const context = toValue(contextRef);
      if (!context) return null;
      const { thumbSize, ringRadius } = context;
      const slots = circularSliderVariants();
      const halfThumb = thumbSize / 2;

      return h(
        AngleSliderPrimitive.Thumb as ArkPart,
        {
          ...attrs,
          class: cn(slots.thumb(), props.class),
          style: {
            "--size": `${thumbSize}px`,
          },
        },
        () =>
          h("span", {
            class: cn(slots.thumbHandle()),
            style: {
              insetBlockStart: `calc(50% - ${ringRadius}px - ${halfThumb}px)`,
              insetInlineStart: `calc(50% - ${halfThumb}px)`,
            },
          }),
      );
    };
  },
});

export const CircularSliderValue = defineComponent({
  inheritAttrs: false,
  name: "CircularSliderValue",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    prefix: { default: "", type: [String, Object, Array] as PropType<VNodeChild> },
    suffix: { default: "", type: [String, Object, Array] as PropType<VNodeChild> },
  },
  setup(props, { attrs }) {
    const api = useAngleSliderContext();
    const slots = circularSliderVariants();

    return () =>
      h(FieldLabel as ArkPart, { asChild: true }, () =>
        h(
          AngleSliderPrimitive.ValueText as ArkPart,
          {
            ...attrs,
            class: cn(slots.value(), props.class),
          },
          () => [props.prefix, " ", unref(api).value, " ", props.suffix],
        ),
      );
  },
});

export const CircularSliderMarkerGroup = defineComponent({
  inheritAttrs: false,
  name: "CircularSliderMarkerGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        AngleSliderPrimitive.MarkerGroup as ArkPart,
        {
          ...attrs,
          class: cn(circularSliderVariants().markerGroup(), props.class),
        },
        slots,
      );
  },
});

export const CircularSliderMarker = defineComponent({
  inheritAttrs: false,
  name: "CircularSliderMarker",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    value: { required: true, type: Number },
  },
  setup(props, { attrs }) {
    const contextRef = useCircularSliderContext();

    return () => {
      const context = toValue(contextRef);
      if (!context) return null;
      const { size, thickness } = context;
      const slots = circularSliderVariants();

      const ringRadius = size / 2 - thickness / 2;
      const markerHeight = Math.max(8, Math.min(thickness * 1.1, 16));
      const markerWidth = Math.max(4, Math.min(thickness * 0.4, 6));
      const markerOffset = size / 2 - ringRadius - markerHeight / 2 + (thickness + 4);

      return h(AngleSliderPrimitive.Marker as ArkPart, {
        ...attrs,
        class: cn(slots.marker(), props.class),
        style: {
          "--marker-height": `${markerHeight}px`,
          "--marker-offset": `${markerOffset}px`,
          "--marker-width": `${markerWidth}px`,
        },
        value: props.value,
      });
    };
  },
});
// #endregion
