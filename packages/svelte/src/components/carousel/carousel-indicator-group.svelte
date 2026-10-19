<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselIndicatorGroupProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./carousel.context";

  let { children, ...rest }: CarouselIndicatorGroupProps = $props();
  const part = withContext(() => rest, { name: "IndicatorGroup" });
</script>

<CarouselPrimitive.IndicatorGroup {...part.props}>
  {@render children?.()}
</CarouselPrimitive.IndicatorGroup>
