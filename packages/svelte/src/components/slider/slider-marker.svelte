<script lang="ts">
import {
  type SliderMarkerProps,
  Slider as SliderPrimitive,
} from "@ark-ui/svelte/slider";
import { withContext } from "./slider.context";

let { children, ...rest }: SliderMarkerProps = $props();
const part = withContext(() => rest, { name: "Marker" });
</script>

<SliderPrimitive.Marker {...part.props}>
  {@render children?.()}
</SliderPrimitive.Marker>
