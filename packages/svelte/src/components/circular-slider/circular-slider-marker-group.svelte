<script lang="ts">
import type { AngleSliderMarkerGroupProps } from "@ark-ui/svelte/angle-slider";
import { AngleSlider as AngleSliderPrimitive } from "@ark-ui/svelte/angle-slider";
import { cn } from "@pisagor/utils";
import { useCircularSlider } from "./circular-slider.context";

type Props = Omit<AngleSliderMarkerGroupProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCircularSlider();
</script>

<AngleSliderPrimitive.MarkerGroup {...rest} class={slots.markerGroup({ class: cn(className) })}>
  {@render children?.()}
</AngleSliderPrimitive.MarkerGroup>
