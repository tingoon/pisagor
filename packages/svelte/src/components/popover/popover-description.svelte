<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverDescriptionProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./popover.context";

  let { children, ...rest }: PopoverDescriptionProps = $props();
  const part = withContext(() => rest, { name: "Description" });
</script>

<PopoverPrimitive.Description {...part.props}>
  {@render children?.()}
</PopoverPrimitive.Description>
