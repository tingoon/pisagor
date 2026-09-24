<script lang="ts">
import type { PopoverDescriptionProps } from "@ark-ui/svelte/popover";
import { Popover as PopoverPrimitive } from "@ark-ui/svelte/popover";
import { cn } from "@pisagor/utils";
import { usePopoverContent } from "./popover.context";

type Props = Omit<PopoverDescriptionProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const { slots } = usePopoverContent();
</script>

<PopoverPrimitive.Description {...rest} class={slots.description({ class: cn(className) })}>
  {@render children?.()}
</PopoverPrimitive.Description>
