<script lang="ts">
import type { TimerRootProps as ArkRootProps } from "@ark-ui/svelte/timer";
import { Timer as TimerPrimitive } from "@ark-ui/svelte/timer";
import { timerRecipe } from "@pisagor/recipes/timer";
import { cn } from "@pisagor/utils";
import { setTimerContext } from "./timer.context";
import TimerArea from "./timer-area.svelte";
import TimerControl from "./timer-control.svelte";
import TimerItem from "./timer-item.svelte";
import TimerItemGroup from "./timer-item-group.svelte";
import TimerItemLabel from "./timer-item-label.svelte";
import TimerPlay from "./timer-play.svelte";
import TimerReset from "./timer-reset.svelte";
import TimerSeparator from "./timer-separator.svelte";

type TimerUnit = "hours" | "minutes" | "seconds";

type Props = Omit<ArkRootProps, "class"> & {
  class?: string | undefined;
  isControlsVisible?: boolean;
  recipe?: typeof timerRecipe;
  units?: TimerUnit[];
};

let {
  isControlsVisible,
  children,
  units,
  recipe = timerRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setTimerContext({
  get slots() {
    return slots;
  },
});
</script>

<TimerPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {#if units}
    <TimerArea>
      {#each units as unit, index (unit)}
        {#if index > 0}
          <TimerSeparator />
        {/if}
        <TimerItemGroup>
          <TimerItem type={unit} />
          <TimerItemLabel>{unit}</TimerItemLabel>
        </TimerItemGroup>
      {/each}
    </TimerArea>
  {/if}
  {#if isControlsVisible}
    <TimerControl>
      <TimerPlay />
      <TimerReset />
    </TimerControl>
  {/if}
  {@render children?.()}
</TimerPrimitive.Root>
