<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderTrackProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./slider.context";

  let { children, ...rest }: SliderTrackProps = $props();
  const part = withContext(() => rest, { name: "Track" });
</script>

<SliderPrimitive.Track {...part.props}>
  {@render children?.()}
</SliderPrimitive.Track>
