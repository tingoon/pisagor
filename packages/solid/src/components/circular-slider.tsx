import type {
  AngleSliderControlProps,
  AngleSliderHiddenInputProps,
  AngleSliderMarkerGroupProps,
  AngleSliderMarkerProps,
  AngleSliderRootProps,
  AngleSliderThumbProps,
  AngleSliderValueTextProps,
} from "@ark-ui/solid/angle-slider";
import {
  AngleSlider as AngleSliderPrimitive,
  useAngleSliderContext,
} from "@ark-ui/solid/angle-slider";
import type { CircularSliderProps as BaseCircularSliderProps } from "@pisagor/props";
import { circularSliderRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { createContext } from "../utils";
import { Field } from "./field";

// #region Context
const {
  Context: CircularSliderStylesContext,
  useStyles: useCircularSliderStyles,
} = createSlotRecipeContext({
  name: "CircularSlider",
  recipe: circularSliderRecipe,
});

/** Ring geometry derived from Root's size/thickness (not styles). */
export interface CircularSliderGeometry {
  readonly ringCircumference: number;
  readonly ringRadius: number;
  readonly size: number;
  readonly thickness: number;
  readonly thumbSize: number;
}

const { CircularSliderGeometryContext, useCircularSliderGeometry } =
  createContext("CircularSliderGeometry")<CircularSliderGeometry>();

/** Styles + geometry; getters keep reads reactive. */
function useCircularSlider() {
  const styles = useCircularSliderStyles();
  const geometry = useCircularSliderGeometry();
  return {
    get ringCircumference() {
      return geometry.ringCircumference;
    },
    get ringRadius() {
      return geometry.ringRadius;
    },
    get size() {
      return geometry.size;
    },
    get slots() {
      return styles.slots;
    },
    get thickness() {
      return geometry.thickness;
    },
    get thumbSize() {
      return geometry.thumbSize;
    },
  };
}
/** @deprecated Prefer shape from useCircularSlider; kept for prop typing. */
export type CircularSliderContextValue = CircularSliderGeometry & {
  slots: ReturnType<typeof circularSliderRecipe>;
};
// #endregion

export type CircularSliderHiddenInputProps = AngleSliderHiddenInputProps;
export type CircularSliderRootProps = Omit<
  AngleSliderRootProps,
  "onValueChange"
>;

export interface CircularSliderProps
  extends CircularSliderRootProps,
    Partial<Pick<CircularSliderContextValue, "thickness" | "size">>,
    BaseCircularSliderProps {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  onValueChange?: (value: number) => void;
  hiddenInputProps?: Omit<CircularSliderHiddenInputProps, "class">;
}

export interface CircularSliderControlProps extends AngleSliderControlProps {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  step?: number;
}

export interface CircularSliderValueTextProps
  extends Omit<AngleSliderValueTextProps, "prefix"> {
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
}

export type CircularSliderThumbProps = AngleSliderThumbProps;
export type CircularSliderMarkerGroupProps = AngleSliderMarkerGroupProps;
export type CircularSliderMarkerProps = AngleSliderMarkerProps;

const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

export function CircularSliderRoot(props: CircularSliderProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "step",
    "children",
    "hiddenInputProps",
    "markers",
    "markersAtSteps",
    "thickness",
    "onValueChange",
    "recipe",
    "class",
  ]);
  const slots = createMemo(() => (local.recipe ?? circularSliderRecipe)());

  const size = () => local.size ?? 100;
  const thickness = () => local.thickness ?? 6;
  const step = () => local.step ?? 1;
  const ringRadius = () => size() / 2 - thickness() / 2;

  return (
    <CircularSliderStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
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
        <AngleSliderPrimitive.Root
          {...rest}
          class={slots().base({ class: local.class })}
          onValueChange={
            local.onValueChange
              ? (details) => local.onValueChange?.(details.value)
              : undefined
          }
          step={step()}
          style={{
            "--thickness": `${thickness()}px`,
            height: `${size()}px`,
            width: `${size()}px`,
          }}
        >
          <CircularSliderControl
            markers={local.markers}
            markersAtSteps={local.markersAtSteps ?? false}
            step={step()}
          />
          {local.children}
          <AngleSliderPrimitive.HiddenInput {...local.hiddenInputProps} />
        </AngleSliderPrimitive.Root>
      </CircularSliderGeometryContext>
    </CircularSliderStylesContext>
  );
}

export function CircularSliderControl(
  props: CircularSliderControlProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "step",
    "markers",
    "markersAtSteps",
    "class",
  ]);
  const styles = useCircularSliderStyles();
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
    <AngleSliderPrimitive.Control
      {...rest}
      class={styles.slots.control({ class: local.class })}
    >
      <CircularSliderProgressRing />
      <Show when={markerValues()}>
        {(values) => (
          <CircularSliderMarkerGroup>
            <For each={values()}>
              {(value) => <CircularSliderMarker value={value} />}
            </For>
          </CircularSliderMarkerGroup>
        )}
      </Show>
      <CircularSliderThumb />
    </AngleSliderPrimitive.Control>
  );
}

function CircularSliderProgressRing(): JSX.Element {
  const api = useAngleSliderContext();
  const ctx = useCircularSlider();

  const percent = () => api().value / 360;
  const dashLength = () => percent() * ctx.ringCircumference;
  const gapLength = () => ctx.ringCircumference - dashLength();
  const center = () => ctx.size / 2;

  return (
    <svg
      aria-hidden="true"
      class={ctx.slots.ring()}
      height={ctx.size}
      viewBox={`0 0 ${ctx.size} ${ctx.size}`}
      width={ctx.size}
    >
      <circle
        class={ctx.slots.ringTrack()}
        cx={center()}
        cy={center()}
        fill="transparent"
        r={ctx.ringRadius}
        stroke-width={ctx.thickness}
      />
      <circle
        class={ctx.slots.ringRange()}
        cx={center()}
        cy={center()}
        fill="transparent"
        r={ctx.ringRadius}
        stroke-dasharray={`${dashLength()} ${gapLength()}`}
        stroke-width={ctx.thickness}
      />
    </svg>
  );
}

export function CircularSliderThumb(
  props: CircularSliderThumbProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const ctx = useCircularSlider();
  const halfThumb = () => ctx.thumbSize / 2;

  return (
    <AngleSliderPrimitive.Thumb
      {...rest}
      class={ctx.slots.thumb({ class: local.class })}
      style={{ "--size": `${ctx.thumbSize}px` }}
    >
      <span
        class={ctx.slots.thumbHandle()}
        style={{
          "inset-block-start": `calc(50% - ${ctx.ringRadius}px - ${halfThumb()}px)`,
          "inset-inline-start": `calc(50% - ${halfThumb()}px)`,
        }}
      />
    </AngleSliderPrimitive.Thumb>
  );
}

export function CircularSliderValueText(
  props: CircularSliderValueTextProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["prefix", "suffix", "class"]);
  const api = useAngleSliderContext();
  const styles = useCircularSliderStyles();

  return (
    <Field.Label
      asChild={(labelProps) => (
        <AngleSliderPrimitive.ValueText
          {...labelProps({ class: styles.slots.value({ class: local.class }) })}
          {...rest}
        >
          {local.prefix} {api().value} {local.suffix}
        </AngleSliderPrimitive.ValueText>
      )}
    />
  );
}

export function CircularSliderMarkerGroup(
  props: CircularSliderMarkerGroupProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCircularSlider();

  return (
    <AngleSliderPrimitive.MarkerGroup
      {...rest}
      class={styles.slots.markerGroup({ class: local.class })}
    />
  );
}

export function CircularSliderMarker(
  props: CircularSliderMarkerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "style"]);
  const ctx = useCircularSlider();

  const markerHeight = () => Math.max(8, Math.min(ctx.thickness * 1.1, 16));
  const markerWidth = () => Math.max(4, Math.min(ctx.thickness * 0.4, 6));
  const markerOffset = () =>
    ctx.size / 2 - ctx.ringRadius - markerHeight() / 2 + (ctx.thickness + 4);

  return (
    <AngleSliderPrimitive.Marker
      {...rest}
      class={ctx.slots.marker({ class: local.class })}
      style={{
        ...(typeof local.style === "object" && local.style ? local.style : {}),
        "--marker-height": `${markerHeight()}px`,
        "--marker-offset": `${markerOffset()}px`,
        "--marker-width": `${markerWidth()}px`,
      }}
    />
  );
}

export const CircularSlider = Object.assign(CircularSliderRoot, {
  Control: CircularSliderControl,
  Marker: CircularSliderMarker,
  MarkerGroup: CircularSliderMarkerGroup,
  Thumb: CircularSliderThumb,
  ValueText: CircularSliderValueText,
});
