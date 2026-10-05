<script lang="ts">
import {
  ScrollArea as ScrollAreaPrimitive,
  type ScrollAreaViewportProps,
} from "@ark-ui/svelte/scroll-area";
import { cn } from "@pisagor/utils";
import { useScrollArea } from "./scroll-area.context";

let { class: className, children, ...rest }: ScrollAreaViewportProps = $props();
const { slots } = useScrollArea();
</script>

<ScrollAreaPrimitive.Viewport
  {...rest}
  class={slots.viewport({ class: cn(className) })}
>
  <ScrollAreaPrimitive.Content>
    {@render children?.()}
  </ScrollAreaPrimitive.Content>
</ScrollAreaPrimitive.Viewport>
