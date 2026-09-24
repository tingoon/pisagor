<script lang="ts">
import type { ScrollAreaThumbProps } from "@ark-ui/svelte/scroll-area";
import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/svelte/scroll-area";
import { cn } from "@pisagor/utils";
import { useScrollArea } from "./scroll-area.context";

type Props = Omit<ScrollAreaThumbProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = useScrollArea();
</script>

<ScrollAreaPrimitive.Thumb {...rest} class={slots.thumb({ class: cn(className) })} />
