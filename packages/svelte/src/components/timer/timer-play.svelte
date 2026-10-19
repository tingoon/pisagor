<script lang="ts">
  import {
    type TimerActionTriggerProps,
    useTimerContext,
  } from "@ark-ui/svelte";
  import TimerPause from "./timer-pause.svelte";
  import TimerResume from "./timer-resume.svelte";
  import TimerStart from "./timer-start.svelte";

  type Props = Omit<TimerActionTriggerProps, "action">;

  let props: Props = $props();
  const api = useTimerContext();
</script>

<!-- Switches between pause (running), resume (paused) and start. -->
{#if api().running}
  <TimerPause {...props} />
{:else if api().paused}
  <TimerResume {...props} />
{:else}
  <TimerStart {...props} />
{/if}
