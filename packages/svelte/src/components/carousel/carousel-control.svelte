<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./carousel.context";

  let { children, ...rest }: CarouselControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<CarouselPrimitive.Control {...part.props}>
  {@render children?.()}
</CarouselPrimitive.Control>
