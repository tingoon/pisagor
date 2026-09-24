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
import { type SliderRecipeSlot, sliderRecipe } from "@pisagor/recipes/slider";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { Field } from "../field";
import { SliderContext, useSlider } from "./slider.context";

type FormControlVariant = "primary" | "secondary";
type SliderValueProps = SliderValueTextProps;
type SliderClassNames = VariantClassNames<SliderRecipeSlot>;

type SliderRootProps = SliderPrimitiveRootProps & {
  variant?: FormControlVariant;
  recipe?: typeof sliderRecipe;
};

export interface SliderProps extends Omit<SliderRootProps, "children" | "onValueChange"> {
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

function SliderRoot(props: SliderRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "recipe", "class"]);
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const slots = () => (local.recipe ?? sliderRecipe)();
  const thumbShadowClass = () => (variant() === "secondary" ? "shadow-none" : undefined);
  const trackVariantClass = () => (variant() === "secondary" ? "bg-muted/40" : "bg-input/64");

  return (
    <SliderContext
      value={{
        slots: slots(),
        thumbShadowClass: thumbShadowClass(),
        trackVariantClass: trackVariantClass(),
      }}
    >
      <SliderPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-variant={variant()}
      >
        {local.children}
      </SliderPrimitive.Root>
    </SliderContext>
  );
}

function SliderHeader(props: SliderHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useSlider();
  return (
    <div {...rest} class={slots.header({ class: cn(local.class) })}>
      {local.children}
    </div>
  );
}

function SliderValue(props: SliderValueProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSlider();
  return <SliderPrimitive.ValueText {...rest} class={slots.value({ class: cn(local.class) })} />;
}

function SliderControl(props: SliderControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useSlider();
  return (
    <SliderPrimitive.Control {...rest} class={slots.control({ class: cn(local.class) })}>
      {local.children}
    </SliderPrimitive.Control>
  );
}

function SliderTrack(props: SliderTrackProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots, trackVariantClass } = useSlider();
  return (
    <SliderPrimitive.Track
      {...rest}
      class={slots.track({ class: cn(trackVariantClass, local.class) })}
    >
      {local.children}
    </SliderPrimitive.Track>
  );
}

function SliderRange(props: SliderRangeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSlider();
  return <SliderPrimitive.Range {...rest} class={slots.range({ class: cn(local.class) })} />;
}

function SliderThumb(props: SliderThumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "children"]);
  const { slots, thumbShadowClass } = useSlider();
  return (
    <SliderPrimitive.Thumb
      {...rest}
      class={slots.thumb({ class: cn(thumbShadowClass, local.class) })}
    >
      {local.children}
    </SliderPrimitive.Thumb>
  );
}

function SliderMarkerGroup(props: SliderMarkerGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useSlider();
  return (
    <SliderPrimitive.MarkerGroup {...rest} class={slots.markerGroup({ class: cn(local.class) })}>
      {local.children}
    </SliderPrimitive.MarkerGroup>
  );
}

function SliderMarker(props: SliderMarkerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useSlider();
  return (
    <SliderPrimitive.Marker {...rest} class={slots.marker({ class: cn(local.class) })}>
      {local.children}
    </SliderPrimitive.Marker>
  );
}

function SliderMarkerTick(props: SliderMarkerTickProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSlider();
  return <span {...rest} class={slots.markerTick({ class: cn(local.class) })} />;
}

function SliderMarkerLabel(props: SliderMarkerLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useSlider();
  return (
    <span {...rest} class={slots.markerLabel({ class: cn(local.class) })}>
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
        local.onValueChange ? (details) => local.onValueChange?.(details.value) : undefined
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
