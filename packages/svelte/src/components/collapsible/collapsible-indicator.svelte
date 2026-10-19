<script lang="ts">
  import {
    Collapsible as CollapsiblePrimitive,
    type CollapsibleIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./collapsible.context";

  let { children, ...rest }: CollapsibleIndicatorProps = $props();
  const part = withContext(() => rest, { name: "Indicator" });
</script>

<CollapsiblePrimitive.Indicator {...part.props}>
  {@render children?.()}
</CollapsiblePrimitive.Indicator>
