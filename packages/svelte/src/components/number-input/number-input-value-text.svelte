<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputValueTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./number-input.context";

  let { children, ...rest }: NumberInputValueTextProps = $props();
  const part = withContext(() => rest, { name: "ValueText" });
</script>

<NumberInputPrimitive.ValueText {...part.props}>
  {@render children?.()}
</NumberInputPrimitive.ValueText>
