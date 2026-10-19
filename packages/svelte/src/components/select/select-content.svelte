<script lang="ts">
  import {
    Portal,
    Select as SelectPrimitive,
    type SelectContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./select.context";

  let { children, ...rest }: SelectContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<Portal>
  <SelectPrimitive.Positioner>
    <SelectPrimitive.Content {...part.props}>
      {@render children?.()}
    </SelectPrimitive.Content>
  </SelectPrimitive.Positioner>
</Portal>
