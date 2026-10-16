<script lang="ts">
import type { TimerActionTriggerProps } from "@ark-ui/svelte/timer";
import { useMessageResolver } from "../provider/context";
import TimerActionTrigger from "./timer-action-trigger.svelte";

const t = useMessageResolver();

type Props = Omit<TimerActionTriggerProps, "action">;
let { children, ...rest }: Props = $props();
</script>

<TimerActionTrigger aria-label={t("timer.start")} {...rest} action="start">
  {@render children?.()}
</TimerActionTrigger>
