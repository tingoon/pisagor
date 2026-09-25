<script lang="ts">
import type { TimerControlProps } from "@ark-ui/svelte/timer";
import { Timer as TimerPrimitive } from "@ark-ui/svelte/timer";
import { cn } from "@pisagor/utils";
import { useTimer } from "./timer.context";

type Props = Omit<TimerControlProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTimer();
</script>

<TimerPrimitive.Control {...rest} class={slots.control({ class: cn(className) })}>
  {@render children?.()}
</TimerPrimitive.Control>
