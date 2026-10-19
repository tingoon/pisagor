<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxItemGroupProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxItemGroupProps = $props();
  const part = withContext(() => rest, { name: "ItemGroup" });
</script>

<ComboboxPrimitive.ItemGroup {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.ItemGroup>
