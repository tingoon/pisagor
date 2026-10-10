<script lang="ts">
import {
  Collapsible as CollapsiblePrimitive,
  type CollapsibleTriggerProps,
} from "@ark-ui/svelte/collapsible";
import { withContext } from "./collapsible.context";

let { children, ...rest }: CollapsibleTriggerProps = $props();
const part = withContext(() => rest, { name: "Trigger" });
</script>

<CollapsiblePrimitive.Trigger {...part.props}>
  {@render children?.()}
</CollapsiblePrimitive.Trigger>
