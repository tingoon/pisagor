<script lang="ts">
import type { AngleSliderMarkerProps } from "@ark-ui/svelte/angle-slider";
import { AngleSlider as AngleSliderPrimitive } from "@ark-ui/svelte/angle-slider";
import { cn } from "@pisagor/utils";
import { useCircularSlider } from "./circular-slider.context";

type Props = Omit<AngleSliderMarkerProps, "class"> & { class?: string | undefined };
let { class: className, style, ...rest }: Props = $props();
const { size, thickness, slots } = useCircularSlider();

const ringRadius = $derived(size / 2 - thickness / 2);
const markerHeight = $derived(Math.max(8, Math.min(thickness * 1.1, 16)));
const markerWidth = $derived(Math.max(4, Math.min(thickness * 0.4, 6)));
const markerOffset = $derived(size / 2 - ringRadius - markerHeight / 2 + (thickness + 4));
</script>

<AngleSliderPrimitive.Marker
  {...rest}
  class={slots.marker({ class: cn(className) })}
  style={`${style ?? ""}; --marker-height: ${markerHeight}px; --marker-offset: ${markerOffset}px; --marker-width: ${markerWidth}px;`}
/>
