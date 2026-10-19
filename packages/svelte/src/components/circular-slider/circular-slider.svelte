<script lang="ts">
  import {
    AngleSlider as AngleSliderPrimitive,
    type AngleSliderHiddenInputProps,
  } from "@ark-ui/svelte";
  import type { CircularSliderContract } from "@pisagor/contracts";
  import type { ComponentProps, Snippet } from "svelte";
  import CircularSliderControl from "./circular-slider-control.svelte";
  import CircularSliderLabel from "./circular-slider-label.svelte";
  import CircularSliderMarker from "./circular-slider-marker.svelte";
  import CircularSliderMarkerGroup from "./circular-slider-marker-group.svelte";
  import CircularSliderRing from "./circular-slider-ring.svelte";
  import CircularSliderRoot from "./circular-slider-root.svelte";
  import CircularSliderThumb from "./circular-slider-thumb.svelte";
  import CircularSliderValueText from "./circular-slider-value-text.svelte";

  type Props = Omit<ComponentProps<typeof CircularSliderRoot>, "children"> &
    CircularSliderContract & {
      /** Props forwarded to the hidden input element. */
      hiddenInputProps?: Omit<AngleSliderHiddenInputProps, "class">;
      /** Visible label rendered inside the slider. */
      label?: Snippet | string;
      /** Render markers: `true` for defaults, or explicit angles. */
      markers?: boolean | number[];
      /**
       * With `markers`, place one marker per `step` instead of the clock
       * defaults.
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
      valuePrefix?: Snippet | string;
      /** Content rendered after the value (e.g. `°`). */
      valueSuffix?: Snippet | string;
    };

  let {
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
  }: Props = $props();

  const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];
  const markerValues = $derived.by((): number[] | null => {
    if (Array.isArray(markers) && markers.length > 0) return markers;
    if (markers === true) {
      return markersAtSteps
        ? Array.from({ length: Math.floor(360 / step) }, (_, i) => i * step)
        : CLOCK_MARKER_ANGLES;
    }

    return null;
  });
</script>

<CircularSliderRoot {...rest} {step}>
  <CircularSliderControl class={classNames?.control}>
    <CircularSliderRing class={classNames?.ring} />
    {#if markerValues}
      <CircularSliderMarkerGroup class={classNames?.markerGroup}>
        {#each markerValues as value (value)}
          <CircularSliderMarker class={classNames?.marker} {value} />
        {/each}
      </CircularSliderMarkerGroup>
    {/if}
    <CircularSliderThumb class={classNames?.thumb} />
  </CircularSliderControl>
  {#if label}
    <CircularSliderLabel class={classNames?.label}>
      {@render renderValue(label)}
    </CircularSliderLabel>
  {/if}
  {#if showValue}
    <AngleSliderPrimitive.Context>
      {#snippet render(api)}
        <CircularSliderValueText class={classNames?.value}>
          {@render renderValue(valuePrefix)}{api().value}{@render renderValue(
            valueSuffix,
          )}
        </CircularSliderValueText>
      {/snippet}
    </AngleSliderPrimitive.Context>
  {/if}
  <AngleSliderPrimitive.HiddenInput {...hiddenInputProps} />
</CircularSliderRoot>

{#snippet renderValue(value: Snippet | string | undefined)}
  {#if typeof value === "function"}
    {@render value()}
  {:else}
    {value ?? ""}
  {/if}
{/snippet}
