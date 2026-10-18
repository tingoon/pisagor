<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderValueTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./slider.context";

  let { children, ...rest }: SliderValueTextProps = $props();
  const part = withContext(() => rest, { name: "Value" });
</script>

<SliderPrimitive.ValueText {...part.props}>
  {@render children?.()}
</SliderPrimitive.ValueText>
