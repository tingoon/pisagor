<script lang="ts">
  import {
    AngleSlider as AngleSliderPrimitive,
    type AngleSliderMarkerGroupProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./circular-slider.context";

  let { children, ...rest }: AngleSliderMarkerGroupProps = $props();
  const part = withContext(() => rest, { name: "MarkerGroup" });
</script>

<AngleSliderPrimitive.MarkerGroup {...part.props}>
  {@render children?.()}
</AngleSliderPrimitive.MarkerGroup>
