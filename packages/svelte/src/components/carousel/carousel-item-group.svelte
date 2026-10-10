<script lang="ts">
import {
  type CarouselItemGroupProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
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
