import {
  AngleSlider as AngleSliderPrimitive,
  useAngleSliderContext as useCircularSlider,
} from "@ark-ui/react/angle-slider";
import { circularSliderVariants } from "@pisagor/styles/ui/circular-slider";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";
import { Field } from "../field";

// #region Variants

// #endregion

// #region Types
interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

type CircularSliderHiddenInputProps = ComponentProps<typeof AngleSliderPrimitive.HiddenInput>;

type CircularSliderRootProps = Omit<
  ComponentProps<typeof AngleSliderPrimitive.Root>,
  "onValueChange"
>;

export interface CircularSliderProps
  extends CircularSliderRootProps,
    Partial<Pick<CircularSliderContextValue, "thickness" | "size">>,
    WithTestId {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  onValueChange?: (value: number) => void;
  /** Extra props forwarded to the hidden input element */
  hiddenInputProps?: Omit<CircularSliderHiddenInputProps, "className">;
}

interface CircularSliderControlProps extends ComponentProps<typeof AngleSliderPrimitive.Control> {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  step?: number;
}

interface CircularSliderValueProps
  extends Omit<ComponentProps<typeof AngleSliderPrimitive.ValueText>, "prefix"> {
  prefix?: ReactNode | string;
  suffix?: ReactNode | string;
}
// #endregion

// #region Context
const [CircularSliderContext, useCircularSliderContext] = createContext<CircularSliderContextValue>(
  {
    name: "CircularSlider",
  },
);
// #endregion

// #region Components
export function CircularSliderRoot({
  className,
  children,
  size = 100,
  thickness = 6,
  markers,
  markersAtSteps = false,
  step = 1,
  onValueChange,
  hiddenInputProps,
  testId,
  ...rest
}: CircularSliderProps) {
  const slots = circularSliderVariants();

  const values = useMemo(
    () => ({
      ringCircumference: 2 * Math.PI * (size / 2 - thickness / 2),
      ringRadius: size / 2 - thickness / 2,
      size,
      thickness,
      thumbSize: Math.max(thickness + 8, 16),
    }),
    [size, thickness],
  );

  return (
    <CircularSliderContext value={values}>
      <AngleSliderPrimitive.Root
        {...rest}
        className={cn(slots.root(), className)}
        data-testid={testId}
        onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
        step={step}
        style={{
          "--thickness": `${thickness}px`,
          height: size,
          width: size,
        }}
      >
        <CircularSliderControl markers={markers} markersAtSteps={markersAtSteps} step={step} />

        {children}

        <AngleSliderPrimitive.HiddenInput {...hiddenInputProps} />
      </AngleSliderPrimitive.Root>
    </CircularSliderContext>
  );
}
CircularSliderRoot.displayName = "CircularSlider";

export function CircularSliderControl({
  className,
  markers,
  markersAtSteps = false,
  step = 1,
  ...rest
}: CircularSliderControlProps) {
  const slots = circularSliderVariants();

  const markerValues = useMemo(() => {
    if (Array.isArray(markers) && markers.length > 0) {
      return markers;
    }
    if (markers === true) {
      return markersAtSteps
        ? Array.from({ length: Math.floor(360 / step) }, (_, i) => i * step)
        : CLOCK_MARKER_ANGLES;
    }
    return null;
  }, [markers, markersAtSteps, step]);

  return (
    <AngleSliderPrimitive.Control {...rest} className={cn(slots.control(), className)}>
      <CircularSliderProgressRing />
      {markerValues ? (
        <CircularSliderMarkerGroup>
          {markerValues.map((value) => (
            <CircularSliderMarker key={value} value={value} />
          ))}
        </CircularSliderMarkerGroup>
      ) : null}
      <CircularSliderThumb />
    </AngleSliderPrimitive.Control>
  );
}
CircularSliderControl.displayName = "CircularSlider.Control";

function CircularSliderProgressRing() {
  const api = useCircularSlider();
  const { size, thickness, ringRadius, ringCircumference } = _useCircularSlider();
  const slots = circularSliderVariants();

  const percent = api.value / 360;
  const dashLength = percent * ringCircumference;
  const gapLength = ringCircumference - dashLength;
  const center = size / 2;

  return (
    <svg
      aria-hidden="true"
      className={cn(slots.ring())}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    >
      <circle
        className={cn(slots.ringTrack())}
        cx={center}
        cy={center}
        fill="transparent"
        r={ringRadius}
        strokeWidth={thickness}
      />
      <circle
        className={cn(slots.ringRange())}
        cx={center}
        cy={center}
        fill="transparent"
        r={ringRadius}
        strokeDasharray={`${dashLength} ${gapLength}`}
        strokeWidth={thickness}
      />
    </svg>
  );
}

export function CircularSliderThumb({
  className,
  ...rest
}: ComponentProps<typeof AngleSliderPrimitive.Thumb>) {
  const { thumbSize, ringRadius } = _useCircularSlider();
  const slots = circularSliderVariants();

  const halfThumb = thumbSize / 2;

  return (
    <AngleSliderPrimitive.Thumb
      {...rest}
      className={cn(slots.thumb(), className)}
      style={{
        "--size": `${thumbSize}px`,
      }}
    >
      <span
        className={cn(slots.thumbHandle())}
        style={{
          insetBlockStart: `calc(50% - ${ringRadius}px - ${halfThumb}px)`,
          insetInlineStart: `calc(50% - ${halfThumb}px)`,
        }}
      />
    </AngleSliderPrimitive.Thumb>
  );
}
CircularSliderThumb.displayName = "CircularSlider.Thumb";

export function CircularSliderValue({
  prefix = "",
  suffix = "",
  className,
  ...rest
}: CircularSliderValueProps) {
  const { value } = useCircularSlider();
  const slots = circularSliderVariants();

  return (
    <Field.Label asChild>
      <AngleSliderPrimitive.ValueText {...rest} className={cn(slots.value(), className)}>
        {prefix} {value} {suffix}
      </AngleSliderPrimitive.ValueText>
    </Field.Label>
  );
}
CircularSliderValue.displayName = "CircularSlider.Value";

export function CircularSliderMarkerGroup({
  className,
  ...rest
}: ComponentProps<typeof AngleSliderPrimitive.MarkerGroup>) {
  const slots = circularSliderVariants();

  return (
    <AngleSliderPrimitive.MarkerGroup {...rest} className={cn(slots.markerGroup(), className)} />
  );
}
CircularSliderMarkerGroup.displayName = "CircularSlider.MarkerGroup";

export function CircularSliderMarker({
  className,
  style,
  ...rest
}: ComponentProps<typeof AngleSliderPrimitive.Marker>) {
  const { size, thickness } = _useCircularSlider();
  const slots = circularSliderVariants();

  const ringRadius = size / 2 - thickness / 2;
  const markerHeight = Math.max(8, Math.min(thickness * 1.1, 16));
  const markerWidth = Math.max(4, Math.min(thickness * 0.4, 6));
  const markerOffset = size / 2 - ringRadius - markerHeight / 2 + (thickness + 4);

  return (
    <AngleSliderPrimitive.Marker
      {...rest}
      className={cn(slots.marker(), className)}
      style={{
        ...style,
        "--marker-height": `${markerHeight}px`,
        "--marker-offset": `${markerOffset}px`,
        "--marker-width": `${markerWidth}px`,
      }}
    />
  );
}
CircularSliderMarker.displayName = "CircularSlider.Marker";

const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

const _useCircularSlider = () => {
  const context = useCircularSliderContext();

  if (!context.ringRadius) {
    throw new Error("useCircularSlider must be used within a CircularSlider");
  }

  return context;
};
// #endregion
