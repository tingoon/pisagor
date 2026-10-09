<script lang="ts">
import {
  type CarouselItemProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { withContext } from "./carousel.context";

let { children, ...rest }: CarouselItemProps = $props();
const part = withContext(() => rest, { name: "Item" });
</script>

<CarouselPrimitive.Item {...part.props}>
  {@render children?.()}
</CarouselPrimitive.Item>
