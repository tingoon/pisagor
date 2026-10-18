<script lang="ts">
  import {
    Carousel as CarouselPrimitive,
    type CarouselItemGroupProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./carousel.context";

  let { children, ...rest }: CarouselItemGroupProps = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-part": "item-group" },
    name: "ItemGroup",
    slot: "itemGroup",
  });
</script>

<CarouselPrimitive.ItemGroup {...part.props}>
  {@render children?.()}
</CarouselPrimitive.ItemGroup>
