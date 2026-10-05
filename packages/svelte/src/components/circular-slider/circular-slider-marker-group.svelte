<script lang="ts">
import {
  type AngleSliderMarkerGroupProps,
  AngleSlider as AngleSliderPrimitive,
} from "@ark-ui/svelte/angle-slider";
import { cn } from "@pisagor/utils";
import { useCircularSlider } from "./circular-slider.context";

let {
  class: className,
  children,
  ...rest
}: AngleSliderMarkerGroupProps = $props();
const { slots } = useCircularSlider();
</script>

<AngleSliderPrimitive.MarkerGroup
  {...rest}
  class={slots.markerGroup({ class: cn(className) })}
>
  {@render children?.()}
</AngleSliderPrimitive.MarkerGroup>
