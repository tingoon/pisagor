<script lang="ts">
import type { ScrollAreaViewportProps } from "@ark-ui/svelte/scroll-area";
import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/svelte/scroll-area";
import { cn } from "@pisagor/utils";
import { useScrollArea } from "./scroll-area.context";

type Props = Omit<ScrollAreaViewportProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useScrollArea();
</script>

<ScrollAreaPrimitive.Viewport {...rest} class={slots.viewport({ class: cn(className) })}>
  <ScrollAreaPrimitive.Content> {@render children?.()} </ScrollAreaPrimitive.Content>
</ScrollAreaPrimitive.Viewport>
