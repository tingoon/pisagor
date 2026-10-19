import { Slider as SliderPrimitive } from "@ark-ui/react";
import type {
  SliderControlProps,
  SliderMarkerGroupProps,
  SliderMarkerProps,
  SliderRangeProps,
  SliderRootProps as SliderRootPrimitiveProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueTextProps,
} from "@ark-ui/react";
import type { SliderContract, SliderRootContract } from "@pisagor/contracts";
import { fieldRecipe, sliderRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Slider",
  recipe: sliderRecipe,
});
// #endregion

// #region Types
type SliderRootProps = SliderRootPrimitiveProps & SliderRootContract;

export interface SliderProps
  extends Omit<SliderRootProps, "children" | "onValueChange">, SliderContract {
  /**
   * The interval between markers.
   *
   * @defaultValue 1
   */
  markerInterval?: number;
  /**
   * The labels to show on the markers.
   *
   * @defaultValue [ ]
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
  label?: ReactNode;
  /**
   * Called when the slider value changes.
   *
   * @remarks
   *   Receives the numeric value array directly, not Ark UI event details.
   */
  onValueChange?: (value: number[]) => void;
  /** Extra props forwarded to the slider control element */
  controlProps?: Omit<SliderControlProps, "children" | "className">;
  /** Extra props forwarded to the slider range element */
  rangeProps?: Omit<SliderRangeProps, "children" | "className">;
  /** Extra props forwarded to each slider thumb element */
  thumbProps?: Omit<SliderThumbProps, "children" | "index" | "className">;
  /** Extra props forwarded to the slider track element */
  trackProps?: Omit<SliderTrackProps, "children" | "className">;
  /** Extra props forwarded to the slider value text element */
  valueTextProps?: Omit<SliderValueTextProps, "children" | "className">;
}

type SliderHeaderProps = ComponentProps<"div">;

type SliderMarkerTickProps = ComponentProps<"span">;

type SliderMarkerLabelProps = ComponentProps<"span">;
// #endregion

// #region Parts
const Root = withProvider<SliderRootProps>(SliderPrimitive.Root, {
  name: "Root",
});

const Header = withContext<SliderHeaderProps>("div", {
  name: "Header",
});

const ValueText = withContext<SliderValueTextProps>(SliderPrimitive.ValueText, {
  name: "ValueText",
  slot: "value",
});

const Control = withContext<SliderControlProps>(SliderPrimitive.Control, {
  name: "Control",
});

const Track = withContext<SliderTrackProps>(SliderPrimitive.Track, {
  name: "Track",
});

const Range = withContext<SliderRangeProps>(SliderPrimitive.Range, {
  name: "Range",
});

const Thumb = withContext<SliderThumbProps>(SliderPrimitive.Thumb, {
  name: "Thumb",
});

const MarkerGroup = withContext<SliderMarkerGroupProps>(
  SliderPrimitive.MarkerGroup,
  { name: "MarkerGroup" },
);

const Marker = withContext<SliderMarkerProps>(SliderPrimitive.Marker, {
  name: "Marker",
});

const MarkerTick = withContext<SliderMarkerTickProps>("span", {
  name: "MarkerTick",
});

const MarkerLabel = withContext<SliderMarkerLabelProps>("span", {
  name: "MarkerLabel",
});

function Label({
  className,
  ...rest
}: ComponentProps<typeof SliderPrimitive.Label>) {
  return (
    <SliderPrimitive.Label
      {...rest}
      className={fieldRecipe().label({ className })}
    />
  );
}
// #endregion

// #region Closed
function SliderShorthand({
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
  valueTextProps,
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

    // Uncontrolled default is a single thumb (zag defaults `value` to `[min]`).
    return [min];
  }, [value, defaultValue, min]);

  const handleValueChange = onValueChange
    ? (details: Parameters<NonNullable<SliderRootProps["onValueChange"]>>[0]) =>
        onValueChange(details.value)
    : undefined;

  return (
    <Root
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
        <Header className={classNames?.header}>
          {label !== undefined && (
            <SliderPrimitive.Label className={fieldRecipe().label()}>
              {label}
            </SliderPrimitive.Label>
          )}

          {showValue && (
            <ValueText {...valueTextProps} className={classNames?.value} />
          )}
        </Header>
      )}

      {children}

      <Control {...controlProps} className={classNames?.control}>
        <Track {...trackProps} className={classNames?.track}>
          <Range {...rangeProps} className={classNames?.range} />
        </Track>

        {Array.from({ length: _values.length }, (_, index) => {
          const key = `slider-thumb-${index}`;

          return (
            <Thumb
              {...thumbProps}
              className={classNames?.thumb}
              index={index}
              key={key}
              tabIndex={tabIndex ?? undefined}
            >
              <SliderPrimitive.HiddenInput />
            </Thumb>
          );
        })}
      </Control>

      {showMarkers && (
        <MarkerGroup className={classNames?.markerGroup}>
          {Array.from({ length: max - min + 1 }, (_, index) => (
            <Marker
              className={classNames?.marker}
              data-interval={index % markerInterval === 0 ? undefined : ""}
              key={String(min + index)}
              value={min + index}
            >
              <MarkerTick className={classNames?.markerTick} />

              <MarkerLabel className={classNames?.markerLabel}>
                {markerLabels?.[index] ?? min + index}
              </MarkerLabel>
            </Marker>
          ))}
        </MarkerGroup>
      )}
    </Root>
  );
}
// #endregion

export type {
  SliderControlProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueTextProps,
} from "@ark-ui/react";

export const Slider = Object.assign(SliderShorthand, {
  Control,
  Header,
  Label,
  Marker,
  MarkerGroup,
  MarkerLabel,
  MarkerTick,
  Range,
  Root,
  Thumb,
  Track,
  ValueText,
});
