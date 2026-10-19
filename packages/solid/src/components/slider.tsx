import { Slider as SliderPrimitive } from "@ark-ui/solid";
import type {
  SliderControlProps,
  SliderMarkerGroupProps,
  SliderMarkerProps,
  SliderRangeProps,
  SliderRootProps as SliderRootPrimitiveProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueTextProps,
} from "@ark-ui/solid";
import type { SliderContract, SliderRootContract } from "@pisagor/contracts";
import { fieldRecipe, sliderRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
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
  children?: JSX.Element;
  label?: JSX.Element;
  /**
   * Called when the slider value changes.
   *
   * @remarks
   *   Receives the numeric value array directly, not Ark UI event details.
   */
  onValueChange?: (value: number[]) => void;
  /** Extra props forwarded to the slider control element */
  controlProps?: Omit<SliderControlProps, "children" | "class">;
  /** Extra props forwarded to the slider range element */
  rangeProps?: Omit<SliderRangeProps, "children" | "class">;
  /** Extra props forwarded to each slider thumb element */
  thumbProps?: Omit<SliderThumbProps, "children" | "index" | "class">;
  /** Extra props forwarded to the slider track element */
  trackProps?: Omit<SliderTrackProps, "children" | "class">;
  /** Extra props forwarded to the slider value text element */
  valueTextProps?: Omit<SliderValueTextProps, "children" | "class">;
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

function Label(
  props: ComponentProps<typeof SliderPrimitive.Label>,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <SliderPrimitive.Label
      {...rest}
      class={fieldRecipe().label({ class: local.class })}
    />
  );
}
// #endregion

// #region Closed
function SliderShorthand(props: SliderProps): JSX.Element {
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
    "valueTextProps",
    "onValueChange",
    "class",
    "classNames",
  ]);

  const max = () => local.max ?? 100;
  const min = () => local.min ?? 0;
  const markerInterval = () => local.markerInterval ?? 1;
  const markerLabels = () => local.markerLabels ?? [];

  const values = createMemo(() => {
    if (Array.isArray(local.value)) {
      return local.value;
    }
    if (Array.isArray(local.defaultValue)) {
      return local.defaultValue;
    }

    // Uncontrolled default is a single thumb (zag defaults `value` to `[min]`).
    return [min()];
  });

  return (
    <Root
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
        <Header class={local.classNames?.header}>
          <Show when={local.label !== undefined}>
            <SliderPrimitive.Label class={fieldRecipe().label()}>
              {local.label}
            </SliderPrimitive.Label>
          </Show>

          <Show when={local.showValue}>
            <ValueText
              {...local.valueTextProps}
              class={local.classNames?.value}
            />
          </Show>
        </Header>
      </Show>

      {local.children}

      <Control {...local.controlProps} class={local.classNames?.control}>
        <Track {...local.trackProps} class={local.classNames?.track}>
          <Range {...local.rangeProps} class={local.classNames?.range} />
        </Track>

        <For each={values()}>
          {(_, index) => (
            <Thumb
              {...local.thumbProps}
              class={local.classNames?.thumb}
              index={index()}
              tabIndex={local.tabIndex ?? undefined}
            >
              <SliderPrimitive.HiddenInput />
            </Thumb>
          )}
        </For>
      </Control>

      <Show when={local.showMarkers}>
        <MarkerGroup class={local.classNames?.markerGroup}>
          <For
            each={Array.from(
              { length: max() - min() + 1 },
              (_, index) => min() + index,
            )}
          >
            {(value, index) => (
              <Marker
                class={local.classNames?.marker}
                data-interval={
                  index() % markerInterval() === 0 ? undefined : ""
                }
                value={value}
              >
                <MarkerTick class={local.classNames?.markerTick} />

                <MarkerLabel class={local.classNames?.markerLabel}>
                  {markerLabels()[index()] ?? value}
                </MarkerLabel>
              </Marker>
            )}
          </For>
        </MarkerGroup>
      </Show>
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
} from "@ark-ui/solid";

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
