import {
  AngleSlider as AngleSliderPrimitive,
  useAngleSliderContext,
} from "@ark-ui/solid";
import type {
  AngleSliderControlProps,
  AngleSliderHiddenInputProps,
  AngleSliderLabelProps,
  AngleSliderMarkerGroupProps,
  AngleSliderMarkerProps,
  AngleSliderRootProps,
  AngleSliderThumbProps,
  AngleSliderValueTextProps,
} from "@ark-ui/solid";
import type {
  CircularSliderContract,
  CircularSliderRootContract,
} from "@pisagor/contracts";
import { circularSliderRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { createContext } from "../utils";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "CircularSlider",
  recipe: circularSliderRecipe,
});

/** Ring geometry derived from Root's size/thickness (getters stay reactive). */
export interface CircularSliderGeometry {
  readonly ringCircumference: number;
  readonly ringRadius: number;
  readonly size: number;
  readonly thickness: number;
  readonly thumbSize: number;
}

const { CircularSliderGeometryContext, useCircularSliderGeometry } =
  createContext("CircularSliderGeometry")<CircularSliderGeometry>();
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
  hiddenInputProps?: Omit<CircularSliderHiddenInputProps, "class">;
  /** Visible label rendered inside the slider. */
  label?: JSX.Element;
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
  valuePrefix?: JSX.Element;
  /** Content rendered after the value (e.g. `°`). */
  valueSuffix?: JSX.Element;
}

export type CircularSliderControlProps = AngleSliderControlProps;

export type CircularSliderHiddenInputProps = AngleSliderHiddenInputProps;

export type CircularSliderLabelProps = AngleSliderLabelProps;

export type CircularSliderMarkerGroupProps = AngleSliderMarkerGroupProps;

export type CircularSliderMarkerProps = AngleSliderMarkerProps;

export type CircularSliderRingProps = Omit<
  JSX.SvgSVGAttributes<SVGSVGElement>,
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

function styleObject(style: unknown): JSX.CSSProperties {
  return typeof style === "object" && style !== null
    ? (style as JSX.CSSProperties)
    : {};
}

/** Root; provides ring geometry and passes the numeric angle to `onValueChange`. */
function Root(props: CircularSliderRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "onValueChange",
    "size",
    "step",
    "style",
    "thickness",
  ]);
  const size = () => local.size ?? 100;
  const thickness = () => local.thickness ?? 6;
  const ringRadius = () => size() / 2 - thickness() / 2;

  return (
    <CircularSliderGeometryContext
      value={{
        get ringCircumference() {
          return 2 * Math.PI * ringRadius();
        },
        get ringRadius() {
          return ringRadius();
        },
        get size() {
          return size();
        },
        get thickness() {
          return thickness();
        },
        get thumbSize() {
          return Math.max(thickness() + 8, 16);
        },
      }}
    >
      <RootBase
        {...rest}
        onValueChange={
          local.onValueChange
            ? (details) => local.onValueChange?.(details.value)
            : undefined
        }
        step={local.step ?? 1}
        style={{
          "--thickness": `${thickness()}px`,
          height: `${size()}px`,
          width: `${size()}px`,
          ...styleObject(local.style),
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
function ValueText(props: CircularSliderValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children"]);
  const api = useAngleSliderContext();

  return (
    <ValueTextBase {...rest}>
      <Show fallback={api().value} when={local.children}>
        {local.children}
      </Show>
    </ValueTextBase>
  );
}

/** SVG progress ring (track + range) sized from the root geometry. */
function Ring(props: CircularSliderRingProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const api = useAngleSliderContext();
  const styles = useStyles();
  const geometry = useCircularSliderGeometry();

  const dashLength = () => (api().value / 360) * geometry.ringCircumference;
  const gapLength = () => geometry.ringCircumference - dashLength();
  const center = () => geometry.size / 2;

  return (
    <svg
      aria-hidden="true"
      height={geometry.size}
      viewBox={`0 0 ${geometry.size} ${geometry.size}`}
      width={geometry.size}
      {...rest}
      class={styles.slots.ring({ class: local.class })}
    >
      <circle
        class={styles.slots.ringTrack()}
        cx={center()}
        cy={center()}
        fill="transparent"
        r={geometry.ringRadius}
        stroke-width={geometry.thickness}
      />
      <circle
        class={styles.slots.ringRange()}
        cx={center()}
        cy={center()}
        fill="transparent"
        r={geometry.ringRadius}
        stroke-dasharray={`${dashLength()} ${gapLength()}`}
        stroke-width={geometry.thickness}
      />
    </svg>
  );
}

/** Thumb positioned on the ring; renders its handle by default. */
function Thumb(props: CircularSliderThumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class", "style"]);
  const styles = useStyles();
  const geometry = useCircularSliderGeometry();
  const halfThumb = () => geometry.thumbSize / 2;

  return (
    <AngleSliderPrimitive.Thumb
      {...rest}
      class={styles.slots.thumb({ class: local.class })}
      style={{
        "--size": `${geometry.thumbSize}px`,
        ...styleObject(local.style),
      }}
    >
      <Show
        fallback={
          <span
            class={styles.slots.thumbHandle()}
            style={{
              "inset-block-start": `calc(50% - ${geometry.ringRadius}px - ${halfThumb()}px)`,
              "inset-inline-start": `calc(50% - ${halfThumb()}px)`,
            }}
          />
        }
        when={local.children}
      >
        {local.children}
      </Show>
    </AngleSliderPrimitive.Thumb>
  );
}

/** Marker sized and offset from the ring geometry. */
function Marker(props: CircularSliderMarkerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "style"]);
  const styles = useStyles();
  const geometry = useCircularSliderGeometry();

  const markerHeight = () =>
    Math.max(8, Math.min(geometry.thickness * 1.1, 16));
  const markerWidth = () => Math.max(4, Math.min(geometry.thickness * 0.4, 6));
  const markerOffset = () =>
    geometry.size / 2 -
    geometry.ringRadius -
    markerHeight() / 2 +
    (geometry.thickness + 4);

  return (
    <AngleSliderPrimitive.Marker
      {...rest}
      class={styles.slots.marker({ class: local.class })}
      style={{
        "--marker-height": `${markerHeight()}px`,
        "--marker-offset": `${markerOffset()}px`,
        "--marker-width": `${markerWidth()}px`,
        ...styleObject(local.style),
      }}
    />
  );
}
// #endregion

// #region Shorthand
const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

export function CircularSliderShorthand(
  props: CircularSliderProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "classNames",
    "hiddenInputProps",
    "label",
    "markers",
    "markersAtSteps",
    "showValue",
    "step",
    "valuePrefix",
    "valueSuffix",
  ]);
  const step = () => local.step ?? 1;
  const markerValues = createMemo(() => {
    if (Array.isArray(local.markers) && local.markers.length > 0) {
      return local.markers;
    }
    if (local.markers === true) {
      return local.markersAtSteps
        ? Array.from({ length: Math.floor(360 / step()) }, (_, i) => i * step())
        : CLOCK_MARKER_ANGLES;
    }

    return null;
  });

  return (
    <Root {...rest} step={step()}>
      <Control class={local.classNames?.control}>
        <Ring class={local.classNames?.ring} />
        <Show when={markerValues()}>
          {(values) => (
            <MarkerGroup class={local.classNames?.markerGroup}>
              <For each={values()}>
                {(value) => (
                  <Marker class={local.classNames?.marker} value={value} />
                )}
              </For>
            </MarkerGroup>
          )}
        </Show>
        <Thumb class={local.classNames?.thumb} />
      </Control>
      <Show when={local.label}>
        <Label class={local.classNames?.label}>{local.label}</Label>
      </Show>
      <Show when={local.showValue}>
        <ValueText class={local.classNames?.value}>
          {local.valuePrefix}
          <ValueNumber />
          {local.valueSuffix}
        </ValueText>
      </Show>
      <HiddenInput {...local.hiddenInputProps} />
    </Root>
  );
}

function ValueNumber(): JSX.Element {
  const api = useAngleSliderContext();

  return <>{api().value}</>;
}
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
