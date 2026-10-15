<script lang="ts">
import {
  type SliderMarkerGroupProps,
  Slider as SliderPrimitive,
} from "@ark-ui/svelte/slider";
import { withContext } from "./slider.context";

let { children, ...rest }: SliderMarkerGroupProps = $props();
const part = withContext(() => rest, {
  name: "MarkerGroup",
  slot: "markerGroup",
});
</script>

<SliderPrimitive.MarkerGroup {...part.props}>
  {@render children?.()}
</SliderPrimitive.MarkerGroup>
