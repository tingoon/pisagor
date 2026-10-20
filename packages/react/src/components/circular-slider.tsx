import {
  AngleSlider as AngleSliderPrimitive,
  useAngleSliderContext,
} from "@ark-ui/react";
import type {
  AngleSliderControlProps,
  AngleSliderHiddenInputProps,
  AngleSliderLabelProps,
  AngleSliderMarkerGroupProps,
  AngleSliderMarkerProps,
  AngleSliderRootProps,
  AngleSliderThumbProps,
  AngleSliderValueTextProps,
} from "@ark-ui/react";
import type {
  CircularSliderContract,
  CircularSliderRootContract,
} from "@pisagor/contracts";
import { circularSliderRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createContext, use, useMemo } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "CircularSlider",
  recipe: circularSliderRecipe,
});

export interface CircularSliderGeometry {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

const CircularSliderGeometryContext = createContext<
  CircularSliderGeometry | undefined
>(undefined);
CircularSliderGeometryContext.displayName = "CircularSliderGeometryContext";

function useCircularSliderGeometry() {
  const geometry = use(CircularSliderGeometryContext);
  if (geometry === undefined) {
    throw new Error(
      "useCircularSliderGeometry must be used within CircularSlider.Root.",
    );
  }

  return geometry;
}
// #endregion

// #region Types
type CircularSliderRootBaseProps = AngleSliderRootProps &
  CircularSliderRootContract;

export type CircularSliderRootProps = Omit<
  CircularSliderRootBaseProps,
  "onValueChange"
> & {
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
};

export interface CircularSliderProps
  extends Omit<CircularSliderRootProps, "children">, CircularSliderContract {
  /** Props forwarded to the hidden input element. */
  hiddenInputProps?: Omit<CircularSliderHiddenInputProps, "className">;
  /** Visible label rendered inside the slider. */
  label?: ReactNode;
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
  /** Content rendered before the value (e.g. an icon). */
  valuePrefix?: ReactNode;
  /** Content rendered after the value (e.g. `°`). */
  valueSuffix?: ReactNode;
}

export type CircularSliderControlProps = AngleSliderControlProps;

export type CircularSliderHiddenInputProps = AngleSliderHiddenInputProps;

export type CircularSliderLabelProps = AngleSliderLabelProps;

export type CircularSliderMarkerGroupProps = AngleSliderMarkerGroupProps;

export type CircularSliderMarkerProps = AngleSliderMarkerProps;

export type CircularSliderRingProps = Omit<
  ComponentPropsWithRef<"svg">,
  "children"
>;

export type CircularSliderThumbProps = AngleSliderThumbProps;

export type CircularSliderValueTextProps = AngleSliderValueTextProps;
// #endregion

// #region Parts
const RootBase = withProvider<CircularSliderRootBaseProps>(
  AngleSliderPrimitive.Root,
  { name: "Root", slot: "base" },
);

/** Root; provides ring geometry and passes the numeric angle to `onValueChange`. */
function Root({
  onValueChange,
  size = 100,
  step = 1,
  style,
  thickness = 6,
  ...rest
}: CircularSliderRootProps) {
  const geometry = useMemo(
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
    <CircularSliderGeometryContext value={geometry}>
      <RootBase
        {...rest}
        onValueChange={
          onValueChange ? (details) => onValueChange(details.value) : undefined
        }
        step={step}
        style={{
          "--thickness": `${thickness}px`,
          height: size,
          width: size,
          ...style,
        }}
      />
    </CircularSliderGeometryContext>
  );
}

const Label = withContext<CircularSliderLabelProps>(
  AngleSliderPrimitive.Label,
  { name: "Label" },
);

const Control = withContext<CircularSliderControlProps>(
  AngleSliderPrimitive.Control,
  { name: "Control" },
);

const MarkerGroup = withContext<CircularSliderMarkerGroupProps>(
  AngleSliderPrimitive.MarkerGroup,
  { name: "MarkerGroup" },
);

const HiddenInput = AngleSliderPrimitive.HiddenInput;

const ValueTextBase = withContext<CircularSliderValueTextProps>(
  AngleSliderPrimitive.ValueText,
  { name: "ValueText", slot: "value" },
);

/** Value text; renders the numeric angle when no children are given. */
function ValueText({ children, ...props }: CircularSliderValueTextProps) {
  const { value } = useAngleSliderContext();

  return <ValueTextBase {...props}>{children ?? value}</ValueTextBase>;
}

/** SVG progress ring (track + range) sized from the root geometry. */
function Ring({ className, ...props }: CircularSliderRingProps) {
  const api = useAngleSliderContext();
  const { slots } = useStyles();
  const { size, thickness, ringRadius, ringCircumference } =
    useCircularSliderGeometry();

  const dashLength = (api.value / 360) * ringCircumference;
  const gapLength = ringCircumference - dashLength;
  const center = size / 2;

  return (
    <svg
      aria-hidden="true"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      {...props}
      className={slots.ring({ className })}
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

/** Thumb positioned on the ring; renders its handle by default. */
function Thumb({ children, className, ...props }: CircularSliderThumbProps) {
  const { slots } = useStyles();
  const { thumbSize, ringRadius } = useCircularSliderGeometry();
  const halfThumb = thumbSize / 2;

  return (
    <AngleSliderPrimitive.Thumb
      {...props}
      className={slots.thumb({ className })}
      style={{ "--size": `${thumbSize}px`, ...props.style }}
    >
      {children ?? (
        <span
          className={slots.thumbHandle()}
          style={{
            insetBlockStart: `calc(50% - ${ringRadius}px - ${halfThumb}px)`,
            insetInlineStart: `calc(50% - ${halfThumb}px)`,
          }}
        />
      )}
    </AngleSliderPrimitive.Thumb>
  );
}

/** Marker sized and offset from the ring geometry. */
function Marker({ className, style, ...props }: CircularSliderMarkerProps) {
  const { slots } = useStyles();
  const { size, thickness, ringRadius } = useCircularSliderGeometry();

  const markerHeight = Math.max(8, Math.min(thickness * 1.1, 16));
  const markerWidth = Math.max(4, Math.min(thickness * 0.4, 6));
  const markerOffset =
    size / 2 - ringRadius - markerHeight / 2 + (thickness + 4);

  return (
    <AngleSliderPrimitive.Marker
      {...props}
      className={slots.marker({ className })}
      style={{
        "--marker-height": `${markerHeight}px`,
        "--marker-offset": `${markerOffset}px`,
        "--marker-width": `${markerWidth}px`,
        ...style,
      }}
    />
  );
}
// #endregion

// #region Shorthand
const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

export function CircularSliderShorthand({
  classNames,
  hiddenInputProps,
  label,
  markers,
  markersAtSteps = false,
  showValue = false,
  step = 1,
  valuePrefix,
  valueSuffix,
  ...rest
}: CircularSliderProps) {
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
    <Root {...rest} step={step}>
      <Control className={classNames?.control}>
        <Ring className={classNames?.ring} />
        {markerValues ? (
          <MarkerGroup className={classNames?.markerGroup}>
            {markerValues.map((value) => (
              <Marker
                className={classNames?.marker}
                key={value}
                value={value}
              />
            ))}
          </MarkerGroup>
        ) : null}
        <Thumb className={classNames?.thumb} />
      </Control>
      {label ? <Label className={classNames?.label}>{label}</Label> : null}
      {showValue ? (
        <ValueText className={classNames?.value}>
          {valuePrefix}
          <ValueNumber />
          {valueSuffix}
        </ValueText>
      ) : null}
      <HiddenInput {...hiddenInputProps} />
    </Root>
  );
}

function ValueNumber() {
  const { value } = useAngleSliderContext();

  return value;
}
// #endregion

// #region Display Names
Root.displayName = "CircularSlider.Root";
ValueText.displayName = "CircularSlider.ValueText";
Ring.displayName = "CircularSlider.Ring";
Thumb.displayName = "CircularSlider.Thumb";
Marker.displayName = "CircularSlider.Marker";
CircularSliderShorthand.displayName = "CircularSlider";
// #endregion

export const CircularSlider = Object.assign(CircularSliderShorthand, {
  Context: AngleSliderPrimitive.Context,
  Control,
  HiddenInput,
  Label,
  Marker,
  MarkerGroup,
  Ring,
  Root,
  Thumb,
  ValueText,
});
