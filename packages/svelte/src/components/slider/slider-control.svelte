<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./slider.context";

  let { children, ...rest }: SliderControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<SliderPrimitive.Control {...part.props}>
  {@render children?.()}
</SliderPrimitive.Control>
