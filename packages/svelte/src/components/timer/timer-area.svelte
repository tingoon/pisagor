<script lang="ts">
import type { TimerAreaProps } from "@ark-ui/svelte/timer";
import { Timer as TimerPrimitive } from "@ark-ui/svelte/timer";
import { cn } from "@pisagor/utils";
import { useTimer } from "./timer.context";

type Props = Omit<TimerAreaProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTimer();
</script>

<TimerPrimitive.Area {...rest} class={slots.area({ class: cn(className) })}>
  {@render children?.()}
</TimerPrimitive.Area>
