<script lang="ts">
import {
  ScrollArea as ScrollAreaPrimitive,
  type ScrollAreaScrollbarProps,
} from "@ark-ui/svelte/scroll-area";
import { cn } from "@pisagor/utils";
import { useScrollArea } from "./scroll-area.context";

let {
  class: className,
  children,
  ...rest
}: ScrollAreaScrollbarProps = $props();
const { slots } = useScrollArea();
</script>

<ScrollAreaPrimitive.Scrollbar
  {...rest}
  class={slots.scrollbar({ class: cn(className) })}
>
  {@render children?.()}
</ScrollAreaPrimitive.Scrollbar>
