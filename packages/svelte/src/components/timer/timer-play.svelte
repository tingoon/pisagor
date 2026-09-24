<script lang="ts">
import type { TimerActionTriggerProps } from "@ark-ui/svelte/timer";
import { useTimerContext } from "@ark-ui/svelte/timer";
import TimerResume from "./timer-resume.svelte";
import TimerStart from "./timer-start.svelte";

type Props = Omit<TimerActionTriggerProps, "action">;
let props: Props = $props();

const api = useTimerContext();
const paused = $derived(api().paused);
</script>

{#if paused}
  <TimerResume {...props} />
{:else}
  <TimerStart {...props} />
{/if}
