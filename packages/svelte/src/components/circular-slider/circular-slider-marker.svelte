<script lang="ts">
  import {
    AngleSlider as AngleSliderPrimitive,
    type AngleSliderMarkerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useCircularSlider } from "./circular-slider.context";

  let { class: className, style, ...rest }: AngleSliderMarkerProps = $props();
  const ctx = useCircularSlider();

  const markerHeight = $derived(Math.max(8, Math.min(ctx.thickness * 1.1, 16)));
  const markerWidth = $derived(Math.max(4, Math.min(ctx.thickness * 0.4, 6)));
  const markerOffset = $derived(
    ctx.size / 2 - ctx.ringRadius - markerHeight / 2 + (ctx.thickness + 4),
  );
</script>

<!-- Marker sized and offset from the ring geometry. -->
<AngleSliderPrimitive.Marker
  {...rest}
  class={ctx.slots.marker({ class: cn(className) })}
  style={`--marker-height: ${markerHeight}px; --marker-offset: ${markerOffset}px; --marker-width: ${markerWidth}px; ${style ?? ""}`}
/>
