<script lang="ts">
import {
  Slider as SliderPrimitive,
  type SliderTrackProps,
} from "@ark-ui/svelte/slider";
import { cn } from "@pisagor/utils";
import { useSliderExtras, withContext } from "./slider.context";

let { children, class: className, ...rest }: SliderTrackProps = $props();
const extras = useSliderExtras();
const part = withContext(
  () => ({ ...rest, class: cn(extras.trackVariantClass, className) }),
  { name: "Track" },
);
</script>

<SliderPrimitive.Track {...part.props}>
  {@render children?.()}
</SliderPrimitive.Track>
