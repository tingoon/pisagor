import { Slider as SliderPrimitive } from "@ark-ui/react/slider";
import { type SliderSlots, sliderRecipe } from "@pisagor/recipes/slider";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import type { VariantClassNames } from "../../internal/types";
import { cn } from "../../internal/utils";
import { Field } from "../field";
import { SliderContext, useSlider } from "./slider.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

type SliderControlProps = ComponentProps<typeof SliderPrimitive.Control>;

type SliderTrackProps = ComponentProps<typeof SliderPrimitive.Track>;

type SliderRangeProps = ComponentProps<typeof SliderPrimitive.Range>;

type SliderThumbProps = ComponentProps<typeof SliderPrimitive.Thumb>;

type SliderValueProps = ComponentProps<typeof SliderPrimitive.ValueText>;

type SliderClassNames = VariantClassNames<SliderSlots>;

type SliderRootProps = ComponentProps<typeof SliderPrimitive.Root> & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
};

export interface SliderProps extends Omit<SliderRootProps, "children" | "onValueChange"> {
  /**
   * The interval between markers.
   *
   * @defaultValue 1
   */
  markerInterval?: number;
  /**
   * The labels to show on the markers.
   *
   * @defaultValue []
   */
  markerLabels?: string[];
  /**
   * Whether to show markers.
   *
   * @defaultValue false
   */
  showMarkers?: boolean;
  /**
   * Whether to show the current value text next to the label.
   *
   * @defaultValue false
   */
  showValue?: boolean;
  children?: ReactNode;
  /** Label rendered above the slider track. */
  label?: ReactNode;
  /**
   * Called when the slider value changes.
   *
   * @remarks
   * Receives the numeric value array directly, not Ark UI event details.
   */
  onValueChange?: (value: number[]) => void;
  /** Slot class names */
  classNames?: SliderClassNames;
  /** Extra props forwarded to the slider control element */
  controlProps?: Omit<SliderControlProps, "children" | "className">;
  /** Extra props forwarded to the slider range element */
  rangeProps?: Omit<SliderRangeProps, "children" | "className">;
  /** Extra props forwarded to each slider thumb element */
  thumbProps?: Omit<SliderThumbProps, "children" | "index" | "className">;
  /** Extra props forwarded to the slider track element */
  trackProps?: Omit<SliderTrackProps, "children" | "className">;
  /** Extra props forwarded to the slider value text element */
  valueProps?: Omit<SliderValueProps, "children" | "className">;
}

interface SliderHeaderProps extends ComponentProps<"div"> {}

interface SliderMarkerGroupProps extends ComponentProps<typeof SliderPrimitive.MarkerGroup> {}

interface SliderMarkerProps extends ComponentProps<typeof SliderPrimitive.Marker> {}

interface SliderMarkerTickProps extends ComponentProps<"span"> {}

interface SliderMarkerLabelProps extends ComponentProps<"span"> {}
// #endregion

// #region Parts
function SliderRoot({ variant: variantProp, children, className, ...rest }: SliderRootProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellControlProps = { "data-variant": resolved.variant };
  const slots = sliderRecipe();
  const thumbShadowClass = resolved.variant === "secondary" ? "shadow-none" : undefined;
  const trackVariantClass = resolved.variant === "secondary" ? "bg-muted/40" : "bg-input/64";

  return (
    <SliderContext value={{ slots, thumbShadowClass, trackVariantClass }}>
      <SliderPrimitive.Root {...rest} {...shellControlProps} className={slots.base({ className })}>
        {children}
      </SliderPrimitive.Root>
    </SliderContext>
  );
}

function SliderHeader({ children, className, ...rest }: SliderHeaderProps) {
  const { slots } = useSlider();

  return (
    <div {...rest} className={slots.header({ className })}>
      {children}
    </div>
  );
}

function SliderValue({ className, ...rest }: SliderValueProps) {
  const { slots } = useSlider();

  return <SliderPrimitive.ValueText {...rest} className={slots.value({ className })} />;
}

function SliderControl({ children, className, ...rest }: SliderControlProps) {
  const { slots } = useSlider();

  return (
    <SliderPrimitive.Control {...rest} className={slots.control({ className })}>
      {children}
    </SliderPrimitive.Control>
  );
}

function SliderTrack({ children, className, ...rest }: SliderTrackProps) {
  const { slots, trackVariantClass } = useSlider();

  return (
    <SliderPrimitive.Track
      {...rest}
      className={slots.track({ className: cn(trackVariantClass, className) })}
    >
      {children}
    </SliderPrimitive.Track>
  );
}

function SliderRange({ className, ...rest }: SliderRangeProps) {
  const { slots } = useSlider();

  return <SliderPrimitive.Range {...rest} className={slots.range({ className })} />;
}

function SliderThumb({ className, ...rest }: SliderThumbProps) {
  const { slots, thumbShadowClass } = useSlider();

  return (
    <SliderPrimitive.Thumb
      {...rest}
      className={slots.thumb({ className: cn(thumbShadowClass, className) })}
    />
  );
}

function SliderMarkerGroup({ children, className, ...rest }: SliderMarkerGroupProps) {
  const { slots } = useSlider();

  return (
    <SliderPrimitive.MarkerGroup {...rest} className={slots.markerGroup({ className })}>
      {children}
    </SliderPrimitive.MarkerGroup>
  );
}

function SliderMarker({ children, className, ...rest }: SliderMarkerProps) {
  const { slots } = useSlider();

  return (
    <SliderPrimitive.Marker {...rest} className={slots.marker({ className })}>
      {children}
    </SliderPrimitive.Marker>
  );
}

function SliderMarkerTick({ className, ...rest }: SliderMarkerTickProps) {
  const { slots } = useSlider();

  return <span {...rest} className={slots.markerTick({ className })} />;
}

function SliderMarkerLabel({ children, className, ...rest }: SliderMarkerLabelProps) {
  const { slots } = useSlider();

  return (
    <span {...rest} className={slots.markerLabel({ className })}>
      {children}
    </span>
  );
}
// #endregion

// #region Closed
export function Slider({
  variant,
  defaultValue,
  max = 100,
  min = 0,
  showMarkers = false,
  showValue = false,
  tabIndex,
  value,
  children,
  controlProps,
  label,
  markerInterval = 1,
  markerLabels = [],
  rangeProps,
  thumbProps,
  trackProps,
  valueProps,
  onValueChange,
  className,
  classNames,
  ...rest
}: SliderProps) {
  const _values = useMemo(() => {
    if (Array.isArray(value)) {
      return value;
    }
    if (Array.isArray(defaultValue)) {
      return defaultValue;
    }
    return [min, max];
  }, [value, defaultValue, min, max]);

  const handleValueChange = onValueChange
    ? (
        details: Parameters<
          NonNullable<ComponentProps<typeof SliderPrimitive.Root>["onValueChange"]>
        >[0],
      ) => onValueChange(details.value)
    : undefined;

  return (
    <SliderRoot
      {...rest}
      className={className}
      defaultValue={defaultValue}
      max={max}
      min={min}
      onValueChange={handleValueChange}
      value={value}
      variant={variant}
    >
      {(label !== undefined || showValue) && (
        <SliderHeader className={classNames?.header}>
          {label !== undefined && (
            <Field.Label>
              <SliderPrimitive.Label>{label}</SliderPrimitive.Label>
            </Field.Label>
          )}

          {showValue && (
            <Field.Label asChild>
              <SliderValue {...valueProps} className={classNames?.value} />
            </Field.Label>
          )}
        </SliderHeader>
      )}

      {children}

      <SliderControl {...controlProps} className={classNames?.control}>
        <SliderTrack {...trackProps} className={classNames?.track}>
          <SliderRange {...rangeProps} className={classNames?.range} />
        </SliderTrack>

        {Array.from({ length: _values.length }, (_, index) => {
          const key = `slider-thumb-${index}`;

          return (
            <SliderThumb
              {...thumbProps}
              className={classNames?.thumb}
              index={index}
              key={key}
              tabIndex={tabIndex ?? undefined}
            >
              <SliderPrimitive.HiddenInput />
            </SliderThumb>
          );
        })}
      </SliderControl>

      {showMarkers && (
        <SliderMarkerGroup className={classNames?.markerGroup}>
          {Array.from({ length: max + 1 }, (_, index) => (
            <SliderMarker
              className={classNames?.marker}
              data-interval={index % markerInterval === 0 ? undefined : ""}
              key={String(index)}
              value={index}
            >
              <SliderMarkerTick className={classNames?.markerTick} />

              <SliderMarkerLabel className={classNames?.markerLabel}>
                {markerLabels?.[index] ?? index}
              </SliderMarkerLabel>
            </SliderMarker>
          ))}
        </SliderMarkerGroup>
      )}
    </SliderRoot>
  );
}
// #endregion

// #region Display Names
SliderRoot.displayName = "Slider.Root";
SliderHeader.displayName = "Slider.Header";
SliderValue.displayName = "Slider.Value";
SliderControl.displayName = "Slider.Control";
SliderTrack.displayName = "Slider.Track";
SliderRange.displayName = "Slider.Range";
SliderThumb.displayName = "Slider.Thumb";
SliderMarkerGroup.displayName = "Slider.MarkerGroup";
SliderMarker.displayName = "Slider.Marker";
SliderMarkerTick.displayName = "Slider.MarkerTick";
SliderMarkerLabel.displayName = "Slider.MarkerLabel";
Slider.displayName = "Slider";
// #endregion
