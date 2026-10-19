<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputInputProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./number-input.context";

  let { children, ...rest }: NumberInputInputProps = $props();
  const part = withContext(() => rest, { name: "Input" });
</script>

<NumberInputPrimitive.Input {...part.props}>
  {@render children?.()}
</NumberInputPrimitive.Input>
