<script lang="ts">
  import {
    Timer as TimerPrimitive,
    type TimerActionTriggerProps,
  } from "@ark-ui/svelte";
  import { withTimerContext } from "./timer.context";

  let { children, ...rest }: TimerActionTriggerProps = $props();
  const part = withTimerContext(() => rest, { name: "ActionTrigger" });
</script>

<TimerPrimitive.ActionTrigger {...part.props}>
  {@render children?.()}
</TimerPrimitive.ActionTrigger>
