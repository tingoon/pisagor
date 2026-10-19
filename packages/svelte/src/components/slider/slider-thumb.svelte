<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderThumbProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./slider.context";

  let { children, ...rest }: SliderThumbProps = $props();
  const part = withContext(() => rest, { name: "Thumb" });
</script>

<SliderPrimitive.Thumb {...part.props}>
  {@render children?.()}
</SliderPrimitive.Thumb>
