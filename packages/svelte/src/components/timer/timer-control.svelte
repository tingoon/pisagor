<script lang="ts">
import {
  type TimerControlProps,
  Timer as TimerPrimitive,
} from "@ark-ui/svelte/timer";
import { cn } from "@pisagor/utils";
import { useTimer } from "./timer.context";

let { class: className, children, ...rest }: TimerControlProps = $props();
const { slots } = useTimer();
</script>

<TimerPrimitive.Control
  {...rest}
  class={slots.control({ class: cn(className) })}
>
  {@render children?.()}
</TimerPrimitive.Control>
