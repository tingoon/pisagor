<script lang="ts">
  import {
    type HoverCardContentProps,
    HoverCard as HoverCardPrimitive,
  } from "@ark-ui/svelte/hover-card";
  import { Portal } from "@ark-ui/svelte/portal";
  import { cn } from "@pisagor/utils";
  import { useHoverCard } from "./hover-card.context";
  import HoverCardArrow from "./hover-card-arrow.svelte";

  type Props = HoverCardContentProps & {
    /**
     * Whether to render the arrow pointing at the trigger.
     *
     * @defaultValue true
     */
    showArrow?: boolean;
  };

  let {
    children,
    class: className,
    showArrow = true,
    ...rest
  }: Props = $props();
  const styles = useHoverCard();
  const slots = $derived(styles.slots);
</script>

<Portal>
  <HoverCardPrimitive.Positioner>
    <HoverCardPrimitive.Content
      {...rest}
      class={slots.content({ class: cn(className) })}
    >
      {@render children?.()}
      {#if showArrow}
        <HoverCardArrow />
      {/if}
    </HoverCardPrimitive.Content>
  </HoverCardPrimitive.Positioner>
</Portal>
