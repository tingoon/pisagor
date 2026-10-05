<script lang="ts">
import {
  ScrollArea as ScrollAreaPrimitive,
  type ScrollAreaThumbProps,
} from "@ark-ui/svelte/scroll-area";
import { cn } from "@pisagor/utils";
import { useScrollArea } from "./scroll-area.context";

let { class: className, ...rest }: ScrollAreaThumbProps = $props();
const { slots } = useScrollArea();
</script>

<ScrollAreaPrimitive.Thumb
  {...rest}
  class={slots.thumb({ class: cn(className) })}
/>
