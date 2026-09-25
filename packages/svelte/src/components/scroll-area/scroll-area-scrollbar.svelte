<script lang="ts">
import type { ScrollAreaScrollbarProps } from "@ark-ui/svelte/scroll-area";
import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/svelte/scroll-area";
import { cn } from "@pisagor/utils";
import { useScrollArea } from "./scroll-area.context";

type Props = Omit<ScrollAreaScrollbarProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useScrollArea();
</script>

<ScrollAreaPrimitive.Scrollbar {...rest} class={slots.scrollbar({ class: cn(className) })}>
  {@render children?.()}
</ScrollAreaPrimitive.Scrollbar>
