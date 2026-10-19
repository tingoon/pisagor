<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemIndicatorProps,
  } from "@ark-ui/svelte";
  import { withListboxItemContext } from "./listbox.context";

  /** Selected-item indicator; render your own icon inside. */
  let { children, ...rest }: ListboxItemIndicatorProps = $props();
  const part = withListboxItemContext(() => rest, {
    name: "ItemIndicator",
    slot: "indicator",
  });
</script>

<ListboxPrimitive.ItemIndicator {...part.props}>
  {@render children?.()}
</ListboxPrimitive.ItemIndicator>
