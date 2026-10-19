<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxClearTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxClearTriggerProps = $props();
  const part = withContext(() => rest, { name: "ClearTrigger" });
</script>

<ComboboxPrimitive.ClearTrigger {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.ClearTrigger>
