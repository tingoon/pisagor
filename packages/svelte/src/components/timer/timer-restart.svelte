<script lang="ts">
  import type { TimerActionTriggerProps } from "@ark-ui/svelte";
  import { useMessageResolver } from "../provider/context";
  import TimerActionTrigger from "./timer-action-trigger.svelte";

  const t = useMessageResolver();

  type Props = Omit<TimerActionTriggerProps, "action">;
  let { children, ...rest }: Props = $props();
</script>

<TimerActionTrigger aria-label={t("timer.restart")} {...rest} action="restart">
  {@render children?.()}
</TimerActionTrigger>
