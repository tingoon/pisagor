import {
  type SliderControlProps,
  type SliderMarkerGroupProps,
  type SliderMarkerProps,
  Slider as SliderPrimitive,
  type SliderRootProps as SliderPrimitiveRootProps,
  type SliderRangeProps,
  type SliderThumbProps,
  type SliderTrackProps,
  type SliderValueTextProps,
} from "@ark-ui/solid/slider";
import type { SliderProps as BaseSliderProps } from "@pisagor/props";
import { type SliderRecipeSlot, sliderRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";
import { createContext } from "../utils";
import { Field } from "./field";

// #region Context
const { Context: SliderStylesContext, useStyles: useSliderStyles } =
  createSlotRecipeContext({
    name: "Slider",
    recipe: sliderRecipe,
  });

interface SliderExtras {
  thumbShadowClass?: string;
  trackVariantClass: string;
}

const { SliderExtrasContext, useSliderExtras } =
  createContext("SliderExtras")<SliderExtras>();

function useSlider() {
  const styles = useSliderStyles();
  const extras = useSliderExtras();
  return {
    get slots() {
      return styles.slots;
    },
    get thumbShadowClass() {
      return extras.thumbShadowClass;
    },
    get trackVariantClass() {
      return extras.trackVariantClass;
    },
  };
}
// #endregion

type FormControlVariant = "primary" | "secondary";
type SliderValueProps = SliderValueTextProps;
type SliderClassNames = VariantClassNames<SliderRecipeSlot>;

type SliderRootProps = SliderPrimitiveRootProps &
  BaseSliderProps & {
    variant?: FormControlVariant;
  };

export interface SliderProps
  extends Omit<SliderRootProps, "children" | "onValueChange"> {
  markerInterval?: number;
  markerLabels?: string[];
  showMarkers?: boolean;
  showValue?: boolean;
  children?: JSX.Element;
  label?: JSX.Element;
  onValueChange?: (value: number[]) => void;
  classNames?: SliderClassNames;
  controlProps?: Omit<SliderControlProps, "children" | "class">;
  rangeProps?: Omit<SliderRangeProps, "children" | "class">;
  thumbProps?: Omit<SliderThumbProps, "children" | "index" | "class">;
  trackProps?: Omit<SliderTrackProps, "children" | "class">;
  valueProps?: Omit<SliderValueProps, "children" | "class">;
}

type SliderHeaderProps = ComponentProps<"div">;
type SliderMarkerTickProps = ComponentProps<"span">;
type SliderMarkerLabelProps = ComponentProps<"span">;

/** Form-control `variant` feeds thumb/track extras (not a recipe variant). */
function SliderRoot(props: SliderRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "recipe", "class"]);
  const variant = () => local.variant ?? ("primary" as FormControlVariant);

  const slots = createMemo(() => (local.recipe ?? sliderRecipe)());

  return (
    <SliderStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <SliderExtrasContext
        value={{
          get thumbShadowClass() {
            return variant() === "secondary" ? "shadow-none" : undefined;
          },
          get trackVariantClass() {
            return variant() === "secondary" ? "bg-muted/40" : "bg-input/64";
          },
        }}
      >
        <SliderPrimitive.Root
          {...rest}
          class={slots().base({ class: local.class })}
          data-variant={variant()}
        />
      </SliderExtrasContext>
    </SliderStylesContext>
  );
}

function SliderHeader(props: SliderHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useSlider();
  return (
    <div {...rest} class={styles.slots.header({ class: local.class })}>
      {local.children}
    </div>
  );
}

function SliderValue(props: SliderValueProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSlider();

  return (
    <SliderPrimitive.ValueText
      {...rest}
      class={styles.slots.value({ class: local.class })}
    />
  );
}

function SliderControl(props: SliderControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSlider();

  return (
    <SliderPrimitive.Control
      {...rest}
      class={styles.slots.control({ class: local.class })}
    />
  );
}

function SliderTrack(props: SliderTrackProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useSlider();

  return (
    <SliderPrimitive.Track
      {...rest}
      class={styles.slots.track({
        class: cn(styles.trackVariantClass, local.class),
      })}
    >
      {local.children}
    </SliderPrimitive.Track>
  );
}

function SliderRange(props: SliderRangeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSlider();

  return (
    <SliderPrimitive.Range
      {...rest}
      class={styles.slots.range({ class: local.class })}
    />
  );
}

function SliderThumb(props: SliderThumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "children"]);
  const styles = useSlider();

  return (
    <SliderPrimitive.Thumb
      {...rest}
      class={styles.slots.thumb({
        class: cn(styles.thumbShadowClass, local.class),
      })}
    >
      {local.children}
    </SliderPrimitive.Thumb>
  );
}

function SliderMarkerGroup(props: SliderMarkerGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSlider();

  return (
    <SliderPrimitive.MarkerGroup
      {...rest}
      class={styles.slots.markerGroup({ class: local.class })}
    />
  );
}

function SliderMarker(props: SliderMarkerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSlider();

  return (
    <SliderPrimitive.Marker
      {...rest}
      class={styles.slots.marker({ class: local.class })}
    />
  );
}

function SliderMarkerTick(props: SliderMarkerTickProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSlider();
  return (
    <span {...rest} class={styles.slots.markerTick({ class: local.class })} />
  );
}

function SliderMarkerLabel(props: SliderMarkerLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useSlider();
  return (
    <span {...rest} class={styles.slots.markerLabel({ class: local.class })}>
      {local.children}
    </span>
  );
}

export function Slider(props: SliderProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "defaultValue",
    "max",
    "min",
    "showMarkers",
    "showValue",
    "tabIndex",
    "value",
    "children",
    "controlProps",
    "label",
    "markerInterval",
    "markerLabels",
    "rangeProps",
    "thumbProps",
    "trackProps",
    "valueProps",
    "onValueChange",
    "class",
    "classNames",
  ]);

  const max = () => local.max ?? 100;
  const min = () => local.min ?? 0;
  const markerInterval = () => local.markerInterval ?? 1;
  const markerLabels = () => local.markerLabels ?? [];

  const values = createMemo(() => {
    if (Array.isArray(local.value)) return local.value;
    if (Array.isArray(local.defaultValue)) return local.defaultValue;
    return [min(), max()];
  });

  return (
    <SliderRoot
      {...rest}
      class={local.class}
      defaultValue={local.defaultValue}
      max={max()}
      min={min()}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.value)
          : undefined
      }
      value={local.value}
      variant={local.variant}
    >
      <Show when={local.label !== undefined || local.showValue}>
        <SliderHeader class={local.classNames?.header}>
          <Show when={local.label !== undefined}>
            <Field.Label>
              <SliderPrimitive.Label>{local.label}</SliderPrimitive.Label>
            </Field.Label>
          </Show>
          <Show when={local.showValue}>
            <Field.Label
              asChild={(labelProps) => (
                <SliderValue
                  {...labelProps()}
                  {...local.valueProps}
                  class={local.classNames?.value}
                />
              )}
            />
          </Show>
        </SliderHeader>
      </Show>

      {local.children}

      <SliderControl {...local.controlProps} class={local.classNames?.control}>
        <SliderTrack {...local.trackProps} class={local.classNames?.track}>
          <SliderRange {...local.rangeProps} class={local.classNames?.range} />
        </SliderTrack>
        <For each={values()}>
          {(_, index) => (
            <SliderThumb
              {...local.thumbProps}
              class={local.classNames?.thumb}
              index={index()}
              tabIndex={local.tabIndex ?? undefined}
            >
              <SliderPrimitive.HiddenInput />
            </SliderThumb>
          )}
        </For>
      </SliderControl>

      <Show when={local.showMarkers}>
        <SliderMarkerGroup class={local.classNames?.markerGroup}>
          <For each={Array.from({ length: max() + 1 }, (_, i) => i)}>
            {(index) => (
              <SliderMarker
                class={local.classNames?.marker}
                data-interval={index % markerInterval() === 0 ? undefined : ""}
                value={index}
              >
                <SliderMarkerTick class={local.classNames?.markerTick} />
                <SliderMarkerLabel class={local.classNames?.markerLabel}>
                  {markerLabels()[index] ?? index}
                </SliderMarkerLabel>
              </SliderMarker>
            )}
          </For>
        </SliderMarkerGroup>
      </Show>
    </SliderRoot>
  );
}

export type {
  SliderControlProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
} from "@ark-ui/solid/slider";
