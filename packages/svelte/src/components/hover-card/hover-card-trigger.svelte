<script lang="ts">
import type { HoverCardTriggerProps } from "@ark-ui/svelte/hover-card";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/svelte/hover-card";

type Props = HoverCardTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<HoverCardPrimitive.Trigger {...rest}> {@render children?.()} </HoverCardPrimitive.Trigger>
