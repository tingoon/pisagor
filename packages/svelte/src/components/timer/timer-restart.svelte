<script lang="ts">
import type { TimerActionTriggerProps } from "@ark-ui/svelte/timer";
import TimerActionTrigger from "./timer-action-trigger.svelte";

type Props = Omit<TimerActionTriggerProps, "action">;
let { children, ...rest }: Props = $props();
</script>

<TimerActionTrigger {...rest} action="restart" aria-label="Restart">
  {@render children?.()}
</TimerActionTrigger>
