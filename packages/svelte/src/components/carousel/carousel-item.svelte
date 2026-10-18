<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselItemProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./carousel.context";

  let { children, ...rest }: CarouselItemProps = $props();
  const part = withContext(() => rest, { name: "Item" });
</script>

<CarouselPrimitive.Item {...part.props}>
  {@render children?.()}
</CarouselPrimitive.Item>
