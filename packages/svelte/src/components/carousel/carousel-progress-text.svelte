<script lang="ts">
import {
  Carousel as CarouselPrimitive,
  type CarouselProgressTextProps,
} from "@ark-ui/svelte/carousel";
import { withContext } from "./carousel.context";

let { children, ...rest }: CarouselProgressTextProps = $props();
const part = withContext(() => rest, {
  defaultProps: { "data-part": "progress-text" },
  name: "ProgressText",
  slot: "progressText",
});
</script>

<CarouselPrimitive.ProgressText {...part.props}>
  {@render children?.()}
</CarouselPrimitive.ProgressText>
