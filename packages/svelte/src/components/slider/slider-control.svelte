<script lang="ts">
import {
  type SliderControlProps,
  Slider as SliderPrimitive,
} from "@ark-ui/svelte/slider";
import { withContext } from "./slider.context";

let { children, ...rest }: SliderControlProps = $props();
const part = withContext(() => rest, { name: "Control" });
</script>

<SliderPrimitive.Control {...part.props}>
  {@render children?.()}
</SliderPrimitive.Control>
