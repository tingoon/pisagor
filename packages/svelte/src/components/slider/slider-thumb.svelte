<script lang="ts">
import {
  Slider as SliderPrimitive,
  type SliderThumbProps,
} from "@ark-ui/svelte/slider";
import { cn } from "@pisagor/utils";
import { useSliderExtras, withContext } from "./slider.context";

let { children, class: className, ...rest }: SliderThumbProps = $props();
const extras = useSliderExtras();
const part = withContext(
  () => ({ ...rest, class: cn(extras.thumbShadowClass, className) }),
  { name: "Thumb" },
);
</script>

<SliderPrimitive.Thumb {...part.props}>
  {@render children?.()}
</SliderPrimitive.Thumb>
