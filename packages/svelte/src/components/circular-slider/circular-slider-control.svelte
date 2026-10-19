<script lang="ts">
  import {
    AngleSlider as AngleSliderPrimitive,
    type AngleSliderControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./circular-slider.context";

  let { children, ...rest }: AngleSliderControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<AngleSliderPrimitive.Control {...part.props}>
  {@render children?.()}
</AngleSliderPrimitive.Control>
