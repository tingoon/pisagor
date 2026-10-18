<script lang="ts">
  import type { TimerActionTriggerProps } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import TimerActionTrigger from "./timer-action-trigger.svelte";

  const { m } = useLocale();

  type Props = Omit<TimerActionTriggerProps, "action">;
  let { children, ...rest }: Props = $props();
</script>

<TimerActionTrigger aria-label={m("timer.resume")} {...rest} action="resume">
  {@render children?.()}
</TimerActionTrigger>
