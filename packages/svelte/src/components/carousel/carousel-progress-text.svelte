<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselProgressTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./carousel.context";

  let { children, ...rest }: CarouselProgressTextProps = $props();
  const part = withContext(() => rest, { name: "ProgressText" });
</script>

<CarouselPrimitive.ProgressText {...part.props}>
  {@render children?.()}
</CarouselPrimitive.ProgressText>
