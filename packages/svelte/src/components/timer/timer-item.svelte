<script lang="ts">
import {
  type TimerItemProps,
  Timer as TimerPrimitive,
} from "@ark-ui/svelte/timer";
import { cn } from "@pisagor/utils";
import { useTimerItemGroup } from "./timer.context";

let { class: className, ...rest }: TimerItemProps = $props();
const { slots } = useTimerItemGroup();
</script>

<TimerPrimitive.Item {...rest} class={slots.item({ class: cn(className) })} />
