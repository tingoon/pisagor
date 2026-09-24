<script lang="ts">
import type { PopoverTitleProps } from "@ark-ui/svelte/popover";
import { Popover as PopoverPrimitive } from "@ark-ui/svelte/popover";
import { cn } from "@pisagor/utils";
import { usePopoverContent } from "./popover.context";

type Props = Omit<PopoverTitleProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const { slots } = usePopoverContent();
</script>

<PopoverPrimitive.Title {...rest} class={slots.title({ class: cn(className) })}>
  {@render children?.()}
</PopoverPrimitive.Title>
