<script lang="ts">
import type { TimerSeparatorProps } from "@ark-ui/svelte/timer";
import { Timer as TimerPrimitive } from "@ark-ui/svelte/timer";
import { useTimer } from "./timer.context";

type Props = Omit<TimerSeparatorProps, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTimer();
</script>

<TimerPrimitive.Separator
  {...rest}
  class={slots.separator({ class: className })}
>
  {#if children}
    {@render children()}
  {:else}
    :
  {/if}
</TimerPrimitive.Separator>
