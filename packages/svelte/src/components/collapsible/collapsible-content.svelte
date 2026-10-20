<script lang="ts">
  import {
    Collapsible as CollapsiblePrimitive,
    type CollapsibleContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./collapsible.context";

  let { children, ...rest }: CollapsibleContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<CollapsiblePrimitive.Content {...part.props}>
  {@render children?.()}
</CollapsiblePrimitive.Content>
