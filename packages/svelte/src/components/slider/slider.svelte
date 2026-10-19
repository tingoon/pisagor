<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderControlProps,
    type SliderRangeProps,
    type SliderRootProps,
    type SliderThumbProps,
    type SliderTrackProps,
    type SliderValueTextProps,
  } from "@ark-ui/svelte";
  import type { SliderContract, SliderRootContract } from "@pisagor/contracts";
  import type { Snippet } from "svelte";

  import SliderControl from "./slider-control.svelte";
  import SliderHeader from "./slider-header.svelte";
  import SliderLabel from "./slider-label.svelte";
  import SliderMarker from "./slider-marker.svelte";
  import SliderMarkerGroup from "./slider-marker-group.svelte";
  import SliderMarkerLabel from "./slider-marker-label.svelte";
  import SliderMarkerTick from "./slider-marker-tick.svelte";
  import SliderRange from "./slider-range.svelte";
  import SliderRoot from "./slider-root.svelte";
  import SliderThumb from "./slider-thumb.svelte";
  import SliderTrack from "./slider-track.svelte";
  import SliderValueText from "./slider-value-text.svelte";

  type Props = Omit<SliderRootProps, "children" | "onValueChange"> & {
    children?: Snippet;
    /** Extra props forwarded to the slider control element */
    controlProps?: Omit<SliderControlProps, "children" | "class">;
    label?: string;
    markerInterval?: number;
    markerLabels?: string[];
    onValueChange?: (value: number[]) => void;
    /** Extra props forwarded to the slider range element */
    rangeProps?: Omit<SliderRangeProps, "children" | "class">;
    showMarkers?: boolean;
    showValue?: boolean;
    tabindex?: number | null;
    /** Extra props forwarded to each slider thumb element */
    thumbProps?: Omit<SliderThumbProps, "children" | "index" | "class">;
    /** Extra props forwarded to the slider track element */
    trackProps?: Omit<SliderTrackProps, "children" | "class">;
    /** Extra props forwarded to the slider value text element */
    valueTextProps?: Omit<SliderValueTextProps, "children" | "class">;
  } & SliderRootContract &
    SliderContract;

  let {
    defaultValue,
    max = 100,
    min = 0,
    showMarkers = false,
    showValue = false,
    tabindex,
    value = $bindable<number[] | undefined>(undefined),
    children,
    controlProps,
    label,
    markerInterval = 1,
    markerLabels = [],
    onValueChange,
    rangeProps,
    thumbProps,
    trackProps,
    valueTextProps,
    classNames,
    ...rest
  }: Props = $props();

  const thumbCount = $derived.by(() => {
    if (Array.isArray(value)) return value.length;
    if (Array.isArray(defaultValue)) return defaultValue.length;

    return 1;
  });

  function handleValueChange(
    details: Parameters<NonNullable<SliderRootProps["onValueChange"]>>[0],
  ) {
    onValueChange?.(details.value);
  }
</script>

<SliderRoot
  {...rest}
  {defaultValue}
  {max}
  {min}
  onValueChange={onValueChange ? handleValueChange : undefined}
  bind:value
>
  {#if label !== undefined || showValue}
    <SliderHeader class={classNames?.header}>
      {#if label !== undefined}
        <SliderLabel>{label}</SliderLabel>
      {/if}
      {#if showValue}
        <SliderValueText {...valueTextProps} class={classNames?.value} />
      {/if}
    </SliderHeader>
  {/if}

  {@render children?.()}

  <SliderControl {...controlProps} class={classNames?.control}>
    <SliderTrack {...trackProps} class={classNames?.track}>
      <SliderRange {...rangeProps} class={classNames?.range} />
    </SliderTrack>

    {#each Array.from({ length: thumbCount }) as _, index (index)}
      <SliderThumb {...thumbProps} class={classNames?.thumb} {index} {tabindex}>
        <SliderPrimitive.HiddenInput />
      </SliderThumb>
    {/each}
  </SliderControl>

  {#if showMarkers}
    <SliderMarkerGroup class={classNames?.markerGroup}>
      {#each Array.from({ length: max - min + 1 }) as _, index (index)}
        <SliderMarker
          class={classNames?.marker}
          data-interval={index % markerInterval === 0 ? undefined : ""}
          value={min + index}
        >
          <SliderMarkerTick class={classNames?.markerTick} />
          <SliderMarkerLabel class={classNames?.markerLabel}>
            {markerLabels[index] ?? min + index}
          </SliderMarkerLabel>
        </SliderMarker>
      {/each}
    </SliderMarkerGroup>
  {/if}
</SliderRoot>
