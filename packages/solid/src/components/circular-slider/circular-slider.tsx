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
import { circularSliderRecipe } from "@pisagor/recipes/circular-slider";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { Field } from "../field";
import {
  CircularSliderContext,
  type CircularSliderContextValue,
  useCircularSlider,
} from "./circular-slider.context";

export type CircularSliderHiddenInputProps = AngleSliderHiddenInputProps;
export type CircularSliderRootProps = Omit<AngleSliderRootProps, "onValueChange">;

export interface CircularSliderProps
  extends CircularSliderRootProps,
    Partial<Pick<CircularSliderContextValue, "thickness" | "size">> {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  onValueChange?: (value: number) => void;
  hiddenInputProps?: Omit<CircularSliderHiddenInputProps, "class">;
  recipe?: typeof circularSliderRecipe;
}

export interface CircularSliderControlProps extends AngleSliderControlProps {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  step?: number;
}

export interface CircularSliderValueTextProps extends Omit<AngleSliderValueTextProps, "prefix"> {
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
}

export type CircularSliderThumbProps = AngleSliderThumbProps;
export type CircularSliderMarkerGroupProps = AngleSliderMarkerGroupProps;
export type CircularSliderMarkerProps = AngleSliderMarkerProps;

const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

function useCircularSliderStrict() {
  const context = useCircularSlider();
  if (!context.ringRadius) {
    throw new Error("useCircularSlider must be used within a CircularSlider");
  }
  return context;
}

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

  const size = () => local.size ?? 100;
  const thickness = () => local.thickness ?? 6;
  const step = () => local.step ?? 1;
  const slots = () => (local.recipe ?? circularSliderRecipe)();

  const values = createMemo(() => ({
    ringCircumference: 2 * Math.PI * (size() / 2 - thickness() / 2),
    ringRadius: size() / 2 - thickness() / 2,
    size: size(),
    slots: slots(),
    thickness: thickness(),
    thumbSize: Math.max(thickness() + 8, 16),
  }));

  return (
    <CircularSliderContext value={values()}>
      <AngleSliderPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        onValueChange={
          local.onValueChange ? (details) => local.onValueChange?.(details.value) : undefined
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
    </CircularSliderContext>
  );
}

export function CircularSliderControl(props: CircularSliderControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["step", "markers", "markersAtSteps", "class"]);
  const { slots } = useCircularSliderStrict();
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
    <AngleSliderPrimitive.Control {...rest} class={slots.control({ class: cn(local.class) })}>
      <CircularSliderProgressRing />
      <Show when={markerValues()}>
        {(values) => (
          <CircularSliderMarkerGroup>
            <For each={values()}>{(value) => <CircularSliderMarker value={value} />}</For>
          </CircularSliderMarkerGroup>
        )}
      </Show>
      <CircularSliderThumb />
    </AngleSliderPrimitive.Control>
  );
}

function CircularSliderProgressRing(): JSX.Element {
  const api = useAngleSliderContext();
  const { size, thickness, ringRadius, ringCircumference, slots } = useCircularSliderStrict();

  const percent = () => api().value / 360;
  const dashLength = () => percent() * ringCircumference;
  const gapLength = () => ringCircumference - dashLength();
  const center = size / 2;

  return (
    <svg
      aria-hidden="true"
      class={slots.ring()}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    >
      <circle
        class={slots.ringTrack()}
        cx={center}
        cy={center}
        fill="transparent"
        r={ringRadius}
        stroke-width={thickness}
      />
      <circle
        class={slots.ringRange()}
        cx={center}
        cy={center}
        fill="transparent"
        r={ringRadius}
        stroke-dasharray={`${dashLength()} ${gapLength()}`}
        stroke-width={thickness}
      />
    </svg>
  );
}

export function CircularSliderThumb(props: CircularSliderThumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { thumbSize, ringRadius, slots } = useCircularSliderStrict();
  const halfThumb = thumbSize / 2;

  return (
    <AngleSliderPrimitive.Thumb
      {...rest}
      class={slots.thumb({ class: cn(local.class) })}
      style={{ "--size": `${thumbSize}px` }}
    >
      <span
        class={slots.thumbHandle()}
        style={{
          "inset-block-start": `calc(50% - ${ringRadius}px - ${halfThumb}px)`,
          "inset-inline-start": `calc(50% - ${halfThumb}px)`,
        }}
      />
    </AngleSliderPrimitive.Thumb>
  );
}

export function CircularSliderValueText(props: CircularSliderValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["prefix", "suffix", "class"]);
  const api = useAngleSliderContext();
  const { slots } = useCircularSliderStrict();

  return (
    <Field.Label
      asChild={(labelProps) => (
        <AngleSliderPrimitive.ValueText
          {...labelProps({ class: slots.value({ class: cn(local.class) }) })}
          {...rest}
        >
          {local.prefix} {api().value} {local.suffix}
        </AngleSliderPrimitive.ValueText>
      )}
    />
  );
}

export function CircularSliderMarkerGroup(props: CircularSliderMarkerGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCircularSliderStrict();
  return (
    <AngleSliderPrimitive.MarkerGroup
      {...rest}
      class={slots.markerGroup({ class: cn(local.class) })}
    />
  );
}

export function CircularSliderMarker(props: CircularSliderMarkerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "style"]);
  const { size, thickness, slots } = useCircularSliderStrict();

  const ringRadius = size / 2 - thickness / 2;
  const markerHeight = Math.max(8, Math.min(thickness * 1.1, 16));
  const markerWidth = Math.max(4, Math.min(thickness * 0.4, 6));
  const markerOffset = size / 2 - ringRadius - markerHeight / 2 + (thickness + 4);

  return (
    <AngleSliderPrimitive.Marker
      {...rest}
      class={slots.marker({ class: cn(local.class) })}
      style={{
        ...(typeof local.style === "object" && local.style ? local.style : {}),
        "--marker-height": `${markerHeight}px`,
        "--marker-offset": `${markerOffset}px`,
        "--marker-width": `${markerWidth}px`,
      }}
    />
  );
}
