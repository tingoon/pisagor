import { Slider as SliderPrimitive } from "@ark-ui/react/slider";
import { sliderVariants } from "@pisagor/styles/ui/slider";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { formControlShellProps } from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Field } from "../field";

// #region Types
export type SliderControlProps = ComponentProps<typeof SliderPrimitive.Control>;

export type SliderTrackProps = ComponentProps<typeof SliderPrimitive.Track>;

export type SliderRangeProps = ComponentProps<typeof SliderPrimitive.Range>;

export type SliderThumbProps = ComponentProps<typeof SliderPrimitive.Thumb>;

export type SliderValueProps = ComponentProps<typeof SliderPrimitive.ValueText>;

type SliderClassNames = VariantClassNames<typeof sliderVariants>;

export type SliderRootProps = Omit<ComponentProps<typeof SliderPrimitive.Root>, "onValueChange">;

export interface SliderProps extends SliderRootProps, WithTestId {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  /**
   * Controlled slider value.
   *
   * @remarks
   * When set, `defaultValue` is ignored. Pair with `onValueChange` to handle updates.
   */
  value?: number[];
  /**
   * Initial slider value when uncontrolled.
   *
   * @remarks
   * Ignored when `value` is set.
   */
  defaultValue?: number[];
  /**
   * Whether to show the current value text next to the label.
   *
   * @defaultValue false
   */
  showValue?: boolean;
  /**
   * The interval between markers.
   *
   * @defaultValue 1
   */
  markerInterval?: number;
  /**
   * Whether to show markers.
   *
   * @defaultValue false
   */
  showMarkers?: boolean;
  /** Label rendered above the slider track. */
  label?: ReactNode;
  /**
   * The labels to show on the markers.
   *
   * @defaultValue []
   */
  markerLabels?: string[];
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
  /** Extra props forwarded to the slider track element */
  trackProps?: Omit<SliderTrackProps, "children" | "className">;
  /** Extra props forwarded to the slider range element */
  rangeProps?: Omit<SliderRangeProps, "children" | "className">;
  /** Extra props forwarded to each slider thumb element */
  thumbProps?: Omit<SliderThumbProps, "children" | "index" | "className">;
  /** Extra props forwarded to the slider value text element */
  valueProps?: Omit<SliderValueProps, "children" | "className">;
}
// #endregion

// #region Part
export function Slider({
  variant: variantProp,
  value,
  defaultValue,
  min = 0,
  max = 100,
  showValue = false,
  markerInterval = 1,
  showMarkers = false,
  label,
  markerLabels = [],
  children,
  tabIndex,
  onValueChange,
  controlProps,
  trackProps,
  rangeProps,
  thumbProps,
  valueProps,
  className,
  classNames,
  testId,
  ...rest
}: SliderProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellControlProps = formControlShellProps(resolved);
  const slots = sliderVariants();
  const thumbShadowClass = resolved.variant === "secondary" ? "shadow-none" : undefined;
  const trackVariantClass = resolved.variant === "secondary" ? "bg-muted/40" : "bg-input/64";

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
    <SliderPrimitive.Root
      {...rest}
      {...shellControlProps}
      className={cn(slots.root(), className, classNames?.root)}
      data-testid={testId}
      defaultValue={defaultValue}
      max={max}
      min={min}
      onValueChange={handleValueChange}
      value={value}
    >
      {(label !== undefined || showValue) && (
        <div className={cn(slots.header(), classNames?.header)}>
          {label !== undefined && (
            <Field.Label>
              <SliderPrimitive.Label>{label}</SliderPrimitive.Label>
            </Field.Label>
          )}

          {showValue && (
            <Field.Label asChild>
              <SliderPrimitive.ValueText
                {...valueProps}
                className={cn(slots.value(), classNames?.value)}
              />
            </Field.Label>
          )}
        </div>
      )}

      {children}

      <SliderPrimitive.Control
        {...controlProps}
        className={cn(slots.control(), classNames?.control)}
      >
        <SliderPrimitive.Track
          {...trackProps}
          className={cn(slots.track(), trackVariantClass, classNames?.track)}
        >
          <SliderPrimitive.Range {...rangeProps} className={cn(slots.range(), classNames?.range)} />
        </SliderPrimitive.Track>

        {Array.from({ length: _values.length }, (_, index) => {
          const key = `slider-thumb-${index}`;

          return (
            <SliderPrimitive.Thumb
              {...thumbProps}
              className={cn(slots.thumb(), thumbShadowClass, classNames?.thumb)}
              index={index}
              key={key}
              tabIndex={tabIndex ?? undefined}
            >
              <SliderPrimitive.HiddenInput />
            </SliderPrimitive.Thumb>
          );
        })}
      </SliderPrimitive.Control>

      {showMarkers && (
        <SliderPrimitive.MarkerGroup className={cn(slots.markerGroup(), classNames?.markerGroup)}>
          {Array.from({ length: max + 1 }, (_, index) => (
            <SliderPrimitive.Marker
              className={cn(slots.marker(), classNames?.marker)}
              data-interval={index % markerInterval === 0 ? undefined : ""}
              key={String(index)}
              value={index}
            >
              <span className={cn(slots.markerTick(), classNames?.markerTick)} />

              <span className={cn(slots.markerLabel(), classNames?.markerLabel)}>
                {markerLabels?.[index] ?? index}
              </span>
            </SliderPrimitive.Marker>
          ))}
        </SliderPrimitive.MarkerGroup>
      )}
    </SliderPrimitive.Root>
  );
}
// #endregion
