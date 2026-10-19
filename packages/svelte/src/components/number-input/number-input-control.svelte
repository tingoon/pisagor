<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./number-input.context";

  let { children, ...rest }: NumberInputControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<NumberInputPrimitive.Control {...part.props}>
  {@render children?.()}
</NumberInputPrimitive.Control>
