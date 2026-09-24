<script lang="ts">
import type { HoverCardContentProps } from "@ark-ui/svelte/hover-card";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/svelte/hover-card";
import { Portal } from "@ark-ui/svelte/portal";
import { cn } from "@pisagor/utils";
import { useHoverCard } from "./hover-card.context";

type Props = Omit<HoverCardContentProps, "class"> & { class?: string | undefined };

let { children, class: className, ...rest }: Props = $props();
const { slots } = useHoverCard();
</script>

<Portal>
  <HoverCardPrimitive.Positioner>
    <HoverCardPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
      {@render children?.()}
      <HoverCardPrimitive.Arrow
        style="--arrow-background: var(--popover); --arrow-size: calc(1.5 * var(--spacing))"
      >
        <HoverCardPrimitive.ArrowTip class={slots.arrowTip()} />
      </HoverCardPrimitive.Arrow>
    </HoverCardPrimitive.Content>
  </HoverCardPrimitive.Positioner>
</Portal>
