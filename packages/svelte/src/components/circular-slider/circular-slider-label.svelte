<script lang="ts">
  import {
    AngleSlider as AngleSliderPrimitive,
    type AngleSliderLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./circular-slider.context";

  let { children, ...rest }: AngleSliderLabelProps = $props();
  const part = withContext(() => rest, { name: "Label" });
</script>

<AngleSliderPrimitive.Label {...part.props}>
  {@render children?.()}
</AngleSliderPrimitive.Label>
