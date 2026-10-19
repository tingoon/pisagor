<script lang="ts">
  import {
    AngleSlider as AngleSliderPrimitive,
    type AngleSliderValueTextProps,
    useAngleSliderContext,
  } from "@ark-ui/svelte";
  import { withContext } from "./circular-slider.context";

  let { children, ...rest }: AngleSliderValueTextProps = $props();
  const api = useAngleSliderContext();
  const part = withContext(() => rest, { name: "ValueText", slot: "value" });
</script>

<!-- Renders the numeric angle when no children are given. -->
<AngleSliderPrimitive.ValueText {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    {api().value}
  {/if}
</AngleSliderPrimitive.ValueText>
