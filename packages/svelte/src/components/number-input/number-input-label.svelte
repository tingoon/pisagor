<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./number-input.context";

  let { children, ...rest }: NumberInputLabelProps = $props();
  const part = withContext(() => rest, { name: "Label" });
</script>

<NumberInputPrimitive.Label {...part.props}>
  {@render children?.()}
</NumberInputPrimitive.Label>
