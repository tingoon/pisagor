<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxItemProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxItemProps = $props();
  const part = withContext(() => rest, { name: "Item" });
</script>

<ComboboxPrimitive.Item {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.Item>
