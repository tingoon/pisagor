<script lang="ts">
import type { TimerItemProps } from "@ark-ui/svelte/timer";
import { Timer as TimerPrimitive } from "@ark-ui/svelte/timer";
import { cn } from "@pisagor/utils";
import { useTimerItemGroup } from "./timer.context";

type Props = Omit<TimerItemProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useTimerItemGroup();
</script>

<TimerPrimitive.Item {...rest} class={slots.item({ class: cn(className) })} />
