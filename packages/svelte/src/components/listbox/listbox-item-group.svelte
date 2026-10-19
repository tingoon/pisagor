<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemGroupProps,
  } from "@ark-ui/svelte";
  import { withListboxContext } from "./listbox.context";

  let { children, ...rest }: ListboxItemGroupProps = $props();
  const part = withListboxContext(() => rest, { name: "ItemGroup" });
</script>

<ListboxPrimitive.ItemGroup {...part.props}>
  {@render children?.()}
</ListboxPrimitive.ItemGroup>
