<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxListProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxListProps = $props();
  const part = withContext(() => rest, { name: "List" });
</script>

<ComboboxPrimitive.List {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.List>
