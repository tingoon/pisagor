<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemGroupLabelProps,
  } from "@ark-ui/svelte";
  import { withListboxContext } from "./listbox.context";

  let { children, ...rest }: ListboxItemGroupLabelProps = $props();
  const part = withListboxContext(() => rest, { name: "ItemGroupLabel" });
</script>

<ListboxPrimitive.ItemGroupLabel {...part.props}>
  {@render children?.()}
</ListboxPrimitive.ItemGroupLabel>
