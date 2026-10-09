<script lang="ts">
import {
  type TimerRootProps as ArkRootProps,
  Timer as TimerPrimitive,
} from "@ark-ui/svelte/timer";
import type { TimerProps as BaseTimerProps } from "@pisagor/props";
import { withTimerProvider } from "./timer.context";
import TimerArea from "./timer-area.svelte";
import TimerControl from "./timer-control.svelte";
import TimerItem from "./timer-item.svelte";
import TimerItemGroup from "./timer-item-group.svelte";
import TimerItemLabel from "./timer-item-label.svelte";
import TimerPlay from "./timer-play.svelte";
import TimerReset from "./timer-reset.svelte";
import TimerSeparator from "./timer-separator.svelte";

type TimerUnit = "hours" | "minutes" | "seconds";

type Props = ArkRootProps & {
  isControlsVisible?: boolean;
  units?: TimerUnit[];
} & BaseTimerProps;

let { isControlsVisible, children, units, ...rest }: Props = $props();

const root = withTimerProvider(() => rest, { name: "Root", slot: "base" });
</script>

<TimerPrimitive.Root {...root.props}>
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
