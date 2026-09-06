import type {
  AngleSliderControlProps,
  AngleSliderHiddenInputProps,
  AngleSliderMarkerGroupProps,
  AngleSliderMarkerProps,
  AngleSliderRootProps,
  AngleSliderThumbProps,
  AngleSliderValueTextProps,
} from "@ark-ui/react/angle-slider";
import {
  AngleSlider as AngleSliderPrimitive,
  useAngleSliderContext,
} from "@ark-ui/react/angle-slider";
import { circularSliderRecipe } from "@pisagor/recipes/circular-slider";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { Field } from "../field";
import {
  CircularSliderContext,
  type CircularSliderContextValue,
  useCircularSlider,
} from "./circular-slider.context";

// #region Types
export type CircularSliderHiddenInputProps = AngleSliderHiddenInputProps;

export type CircularSliderRootProps = Omit<AngleSliderRootProps, "onValueChange">;

export interface CircularSliderProps
  extends CircularSliderRootProps,
    Partial<Pick<CircularSliderContextValue, "thickness" | "size">> {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  onValueChange?: (value: number) => void;
  /** Extra props forwarded to the hidden input element */
  hiddenInputProps?: Omit<CircularSliderHiddenInputProps, "className">;
  /**
   * Style recipe. Defaults to `circularSliderRecipe` from `@pisagor/recipes/circular-slider`.
   *
   * @defaultValue circularSliderRecipe
   */
  recipe?: typeof circularSliderRecipe;
}

export interface CircularSliderControlProps extends AngleSliderControlProps {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  step?: number;
}

export interface CircularSliderValueTextProps extends Omit<AngleSliderValueTextProps, "prefix"> {
  prefix?: ReactNode | string;
  suffix?: ReactNode | string;
}

export type CircularSliderThumbProps = AngleSliderThumbProps;

export type CircularSliderMarkerGroupProps = AngleSliderMarkerGroupProps;

export type CircularSliderMarkerProps = AngleSliderMarkerProps;
// #endregion

// #region Parts
export function CircularSliderRoot({
  size = 100,
  step = 1,
  children,
  hiddenInputProps,
  markers,
  markersAtSteps = false,
  thickness = 6,
  onValueChange,
  recipe = circularSliderRecipe,
  className,
  ...rest
}: CircularSliderProps) {
  const slots = recipe();

  const values = useMemo(
    () => ({
      ringCircumference: 2 * Math.PI * (size / 2 - thickness / 2),
      ringRadius: size / 2 - thickness / 2,
      size,
      slots,
      thickness,
      thumbSize: Math.max(thickness + 8, 16),
    }),
    [size, slots, thickness],
  );

  return (
    <CircularSliderContext value={values}>
      <AngleSliderPrimitive.Root
        {...rest}
        className={slots.base({ className })}
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

export function CircularSliderControl({
  step = 1,
  markers,
  markersAtSteps = false,
  className,
  ...rest
}: CircularSliderControlProps) {
  const { slots } = _useCircularSlider();

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
    <AngleSliderPrimitive.Control {...rest} className={slots.control({ className })}>
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

function CircularSliderProgressRing() {
  const api = useAngleSliderContext();
  const { size, thickness, ringRadius, ringCircumference, slots } = _useCircularSlider();

  const percent = api.value / 360;
  const dashLength = percent * ringCircumference;
  const gapLength = ringCircumference - dashLength;
  const center = size / 2;

  return (
    <svg
      aria-hidden="true"
      className={slots.ring()}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    >
      <circle
        className={slots.ringTrack()}
        cx={center}
        cy={center}
        fill="transparent"
        r={ringRadius}
        strokeWidth={thickness}
      />
      <circle
        className={slots.ringRange()}
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

export function CircularSliderThumb({ className, ...rest }: CircularSliderThumbProps) {
  const { thumbSize, ringRadius, slots } = _useCircularSlider();

  const halfThumb = thumbSize / 2;

  return (
    <AngleSliderPrimitive.Thumb
      {...rest}
      className={slots.thumb({ className })}
      style={{
        "--size": `${thumbSize}px`,
      }}
    >
      <span
        className={slots.thumbHandle()}
        style={{
          insetBlockStart: `calc(50% - ${ringRadius}px - ${halfThumb}px)`,
          insetInlineStart: `calc(50% - ${halfThumb}px)`,
        }}
      />
    </AngleSliderPrimitive.Thumb>
  );
}

export function CircularSliderValueText({
  prefix = "",
  suffix = "",
  className,
  ...rest
}: CircularSliderValueTextProps) {
  const { value } = useAngleSliderContext();
  const { slots } = _useCircularSlider();

  return (
    <Field.Label asChild>
      <AngleSliderPrimitive.ValueText {...rest} className={slots.value({ className })}>
        {prefix} {value} {suffix}
      </AngleSliderPrimitive.ValueText>
    </Field.Label>
  );
}

export function CircularSliderMarkerGroup({ className, ...rest }: CircularSliderMarkerGroupProps) {
  const { slots } = _useCircularSlider();

  return (
    <AngleSliderPrimitive.MarkerGroup {...rest} className={slots.markerGroup({ className })} />
  );
}

export function CircularSliderMarker({ className, style, ...rest }: CircularSliderMarkerProps) {
  const { size, thickness, slots } = _useCircularSlider();

  const ringRadius = size / 2 - thickness / 2;
  const markerHeight = Math.max(8, Math.min(thickness * 1.1, 16));
  const markerWidth = Math.max(4, Math.min(thickness * 0.4, 6));
  const markerOffset = size / 2 - ringRadius - markerHeight / 2 + (thickness + 4);

  return (
    <AngleSliderPrimitive.Marker
      {...rest}
      className={slots.marker({ className })}
      style={{
        ...style,
        "--marker-height": `${markerHeight}px`,
        "--marker-offset": `${markerOffset}px`,
        "--marker-width": `${markerWidth}px`,
      }}
    />
  );
}

const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

const _useCircularSlider = () => {
  const context = useCircularSlider();

  if (!context.ringRadius) {
    throw new Error("useCircularSlider must be used within a CircularSlider");
  }

  return context;
};
// #endregion

// #region Display Names
CircularSliderRoot.displayName = "CircularSlider";
CircularSliderControl.displayName = "CircularSlider.Control";
CircularSliderThumb.displayName = "CircularSlider.Thumb";
CircularSliderValueText.displayName = "CircularSlider.ValueText";
CircularSliderMarkerGroup.displayName = "CircularSlider.MarkerGroup";
CircularSliderMarker.displayName = "CircularSlider.Marker";
// #endregion
