<script lang="ts">
  import {
    Timer as TimerPrimitive,
    type TimerActionTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: TimerActionTriggerProps = $props();
</script>

<TimerPrimitive.ActionTrigger {...rest}>
  {@render children?.()}
</TimerPrimitive.ActionTrigger>
