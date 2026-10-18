<script lang="ts">
  import {
    HoverCard as HoverCardPrimitive,
    type HoverCardTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: HoverCardTriggerProps = $props();
</script>

<HoverCardPrimitive.Trigger {...rest}>
  {@render children?.()}
</HoverCardPrimitive.Trigger>
