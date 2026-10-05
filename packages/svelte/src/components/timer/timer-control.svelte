<script lang="ts">
import type { TimerControlProps } from "@ark-ui/svelte/timer";
import { Timer as TimerPrimitive } from "@ark-ui/svelte/timer";
import { useTimer } from "./timer.context";

type Props = Omit<TimerControlProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTimer();
</script>

<TimerPrimitive.Control {...rest} class={slots.control({ class: className })}>
  {@render children?.()}
</TimerPrimitive.Control>
