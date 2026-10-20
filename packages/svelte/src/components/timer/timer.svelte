<script lang="ts">
  import { useTimerContext } from "@ark-ui/svelte";
  import type { TimerContract } from "@pisagor/contracts";
  import type { MessageKey } from "@pisagor/utils";
  import {
    ArrowCounterClockwiseIcon,
    PauseIcon,
    PlayIcon,
  } from "phosphor-svelte";
  import type { ComponentProps } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import TimerArea from "./timer-area.svelte";
  import TimerControl from "./timer-control.svelte";
  import TimerItem from "./timer-item.svelte";
  import TimerItemGroup from "./timer-item-group.svelte";
  import TimerItemLabel from "./timer-item-label.svelte";
  import TimerPlay from "./timer-play.svelte";
  import TimerReset from "./timer-reset.svelte";
  import TimerRoot from "./timer-root.svelte";
  import TimerSeparator from "./timer-separator.svelte";

  type TimerUnit = "days" | "hours" | "minutes" | "seconds";

  type Props = Omit<ComponentProps<typeof TimerRoot>, "children"> &
    TimerContract & {
      /**
       * Whether to render play/pause and reset buttons.
       *
       * @defaultValue false
       */
      showControls?: boolean;
      /**
       * Units to render, each with a localized label.
       *
       * @defaultValue ["hours", "minutes", "seconds"]
       */
      units?: TimerUnit[];
    };

  let {
    classNames,
    showControls = false,
    units = ["hours", "minutes", "seconds"],
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

<TimerRoot {...rest}>
  <TimerArea class={classNames?.area}>
    {#each units as unit, index (unit)}
      {#if index > 0}
        <TimerSeparator class={classNames?.separator} />
      {/if}
      <TimerItemGroup>
        <TimerItem type={unit} />
        <TimerItemLabel>{m(`timer.${unit}` as MessageKey)}</TimerItemLabel>
      </TimerItemGroup>
    {/each}
  </TimerArea>
  {#if showControls}
    {@const api = useTimerContext()}
    <TimerControl class={classNames?.control}>
      <TimerPlay class={classNames?.actionTrigger}>
        {#snippet asChild(props)}
          <Button {...props()} size="icon-sm" variant="ghost">
            {#if api().running}
              <PauseIcon />
            {:else}
              <PlayIcon />
            {/if}
          </Button>
        {/snippet}
      </TimerPlay>
      <TimerReset class={classNames?.actionTrigger}>
        {#snippet asChild(props)}
          <Button {...props()} size="icon-sm" variant="ghost">
            <ArrowCounterClockwiseIcon />
          </Button>
        {/snippet}
      </TimerReset>
    </TimerControl>
  {/if}
</TimerRoot>
