<script lang="ts">
import {
  HoverCard as HoverCardPrimitive,
  type HoverCardTriggerProps,
} from "@ark-ui/svelte/hover-card";

let { children, ...rest }: HoverCardTriggerProps = $props();
</script>

<HoverCardPrimitive.Trigger {...rest}>
  {@render children?.()}
</HoverCardPrimitive.Trigger>
