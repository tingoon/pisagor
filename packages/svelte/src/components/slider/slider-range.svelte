<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderRangeProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./slider.context";

  let { children, ...rest }: SliderRangeProps = $props();
  const part = withContext(() => rest, { name: "Range" });
</script>

<SliderPrimitive.Range {...part.props}>
  {@render children?.()}
</SliderPrimitive.Range>
