<script lang="ts">
import {
  type CarouselIndicatorGroupProps,
  Carousel as CarouselPrimitive,
} from "@ark-ui/svelte/carousel";
import { withContext } from "./carousel.context";

let { children, ...rest }: CarouselIndicatorGroupProps = $props();
const part = withContext(() => rest, {
  defaultProps: { "data-part": "indicator-group" },
  name: "IndicatorGroup",
  slot: "indicatorGroup",
});
</script>

<CarouselPrimitive.IndicatorGroup {...part.props}>
  {@render children?.()}
</CarouselPrimitive.IndicatorGroup>
