<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectItemGroupLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./select.context";

  let { children, ...rest }: SelectItemGroupLabelProps = $props();
  const part = withContext(() => rest, { name: "ItemGroupLabel" });
</script>

<SelectPrimitive.ItemGroupLabel {...part.props}>
  {@render children?.()}
</SelectPrimitive.ItemGroupLabel>
