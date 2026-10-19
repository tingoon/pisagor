<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemTextProps,
  } from "@ark-ui/svelte";
  import { withListboxItemContext } from "./listbox.context";

  let { children, ...rest }: ListboxItemTextProps = $props();
  const part = withListboxItemContext(() => rest, {
    name: "ItemText",
    slot: "text",
  });
</script>

<ListboxPrimitive.ItemText {...part.props}>
  {@render children?.()}
</ListboxPrimitive.ItemText>
