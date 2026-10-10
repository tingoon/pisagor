<script lang="ts">
import {
  type CarouselControlProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { withContext } from "./carousel.context";

let { children, ...rest }: CarouselControlProps = $props();
const part = withContext(() => rest, { name: "Control" });
</script>

<CarouselPrimitive.Control {...part.props}>
  {@render children?.()}
</CarouselPrimitive.Control>
