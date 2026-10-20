<script lang="ts">
  import {
    type HoverCardRootProps,
    type HoverCardTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type {
    HoverCardContract,
    HoverCardRootContract,
  } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import HoverCardArrow from "./hover-card-arrow.svelte";
  import HoverCardArrowTip from "./hover-card-arrow-tip.svelte";
  import HoverCardContent from "./hover-card-content.svelte";
  import HoverCardPositioner from "./hover-card-positioner.svelte";
  import HoverCardRoot from "./hover-card-root.svelte";
  import HoverCardTrigger from "./hover-card-trigger.svelte";

  type Props = Omit<HoverCardRootProps, "children"> &
    HoverCardRootContract &
    HoverCardContract & {
      /** Card content. */
      children?: Snippet;
      /**
       * Whether to render the arrow pointing at the trigger.
       *
       * @defaultValue true
       */
      showArrow?: boolean;
      /**
       * Trigger that opens the card on hover or focus; spread `props()` onto
       * your element.
       */
      trigger?: HoverCardTriggerProps["asChild"];
    };

  let {
    children,
    classNames,
    showArrow = true,
    trigger,
    ...rest
  }: Props = $props();
</script>

<HoverCardRoot {...rest}>
  {#if trigger}
    <HoverCardTrigger class={classNames?.trigger}>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </HoverCardTrigger>
  {/if}

  <Portal>
    <HoverCardPositioner class={classNames?.positioner}>
      <HoverCardContent class={classNames?.content}>
        {@render children?.()}

        {#if showArrow}
          <HoverCardArrow class={classNames?.arrow}>
            <HoverCardArrowTip class={classNames?.arrowTip} />
          </HoverCardArrow>
        {/if}
      </HoverCardContent>
    </HoverCardPositioner>
  </Portal>
</HoverCardRoot>
