<script lang="ts">
import type { AngleSliderControlProps } from "@ark-ui/svelte/angle-slider";
import { AngleSlider as AngleSliderPrimitive } from "@ark-ui/svelte/angle-slider";
import { cn } from "@pisagor/utils";
import { useCircularSlider } from "./circular-slider.context";
import CircularSliderMarker from "./circular-slider-marker.svelte";
import CircularSliderMarkerGroup from "./circular-slider-marker-group.svelte";
import CircularSliderProgressRing from "./circular-slider-progress-ring.svelte";
import CircularSliderThumb from "./circular-slider-thumb.svelte";

type Props = Omit<AngleSliderControlProps, "class"> & {
  class?: string | undefined;
  markers?: boolean | number[];
  markersAtSteps?: boolean;
  step?: number;
};

let { step = 1, markers, markersAtSteps = false, class: className, ...rest }: Props = $props();

const { slots } = useCircularSlider();
const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

const markerValues = $derived.by(() => {
  if (Array.isArray(markers) && markers.length > 0) return markers;
  if (markers === true) {
    return markersAtSteps
      ? Array.from({ length: Math.floor(360 / step) }, (_, i) => i * step)
      : CLOCK_MARKER_ANGLES;
  }
  return null as number[] | null;
});
</script>

<AngleSliderPrimitive.Control {...rest} class={slots.control({ class: cn(className) })}>
  <CircularSliderProgressRing />
  {#if markerValues}
    <CircularSliderMarkerGroup>
      {#each markerValues as value (value)}
        <CircularSliderMarker {value} />
      {/each}
    </CircularSliderMarkerGroup>
  {/if}
  <CircularSliderThumb />
</AngleSliderPrimitive.Control>
