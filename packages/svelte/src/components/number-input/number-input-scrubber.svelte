<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputScrubberProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./number-input.context";

  let { children, ...rest }: NumberInputScrubberProps = $props();
  const part = withContext(() => rest, { name: "Scrubber" });
</script>

<NumberInputPrimitive.Scrubber {...part.props}>
  {@render children?.()}
</NumberInputPrimitive.Scrubber>
