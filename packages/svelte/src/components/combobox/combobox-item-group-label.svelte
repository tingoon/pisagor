<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxItemGroupLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxItemGroupLabelProps = $props();
  const part = withContext(() => rest, { name: "ItemGroupLabel" });
</script>

<ComboboxPrimitive.ItemGroupLabel {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.ItemGroupLabel>
