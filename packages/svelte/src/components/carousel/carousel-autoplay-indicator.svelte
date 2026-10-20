<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselAutoplayIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./carousel.context";

  /** Shows `children` while playing and `fallback` while paused. */
  let { children, ...rest }: CarouselAutoplayIndicatorProps = $props();
  const part = withContext(() => rest, { name: "AutoplayIndicator" });
</script>

<CarouselPrimitive.AutoplayIndicator {...part.props}>
  {@render children?.()}
</CarouselPrimitive.AutoplayIndicator>
