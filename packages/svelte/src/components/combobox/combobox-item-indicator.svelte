<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxItemIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxItemIndicatorProps = $props();
  const part = withContext(() => rest, { name: "ItemIndicator" });
</script>

<ComboboxPrimitive.ItemIndicator {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.ItemIndicator>
