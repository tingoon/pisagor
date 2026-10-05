<script lang="ts">
import {
  type TimerActionTriggerProps,
  Timer as TimerPrimitive,
} from "@ark-ui/svelte/timer";

let { children, ...rest }: TimerActionTriggerProps = $props();
</script>

<TimerPrimitive.ActionTrigger {...rest}>
  {@render children?.()}
</TimerPrimitive.ActionTrigger>
