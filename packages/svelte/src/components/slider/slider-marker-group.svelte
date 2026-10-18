<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderMarkerGroupProps,
  } from "@ark-ui/svelte";
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
