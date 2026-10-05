<script lang="ts">
import {
  Popover as PopoverPrimitive,
  type PopoverTitleProps,
} from "@ark-ui/svelte/popover";
import { cn } from "@pisagor/utils";
import { usePopoverContent } from "./popover.context";

let { children, class: className, ...rest }: PopoverTitleProps = $props();
const { slots } = usePopoverContent();
</script>

<PopoverPrimitive.Title {...rest} class={slots.title({ class: cn(className) })}>
  {@render children?.()}
</PopoverPrimitive.Title>
