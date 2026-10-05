<script lang="ts">
import {
  Timer as TimerPrimitive,
  type TimerSeparatorProps,
} from "@ark-ui/svelte/timer";
import { cn } from "@pisagor/utils";
import { useTimer } from "./timer.context";

let { class: className, children, ...rest }: TimerSeparatorProps = $props();
const { slots } = useTimer();
</script>

<TimerPrimitive.Separator
  {...rest}
  class={slots.separator({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    :
  {/if}
</TimerPrimitive.Separator>
