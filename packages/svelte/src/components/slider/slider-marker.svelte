<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderMarkerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./slider.context";

  let { children, ...rest }: SliderMarkerProps = $props();
  const part = withContext(() => rest, { name: "Marker" });
</script>

<SliderPrimitive.Marker {...part.props}>
  {@render children?.()}
</SliderPrimitive.Marker>
