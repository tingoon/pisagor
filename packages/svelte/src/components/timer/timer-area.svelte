<script lang="ts">
import {
  type TimerAreaProps,
  Timer as TimerPrimitive,
} from "@ark-ui/svelte/timer";
import { cn } from "@pisagor/utils";
import { useTimer } from "./timer.context";

let { class: className, children, ...rest }: TimerAreaProps = $props();
const { slots } = useTimer();
</script>

<TimerPrimitive.Area {...rest} class={slots.area({ class: cn(className) })}>
  {@render children?.()}
</TimerPrimitive.Area>
