<script lang="ts">
import {
  type PopoverDescriptionProps,
  Popover as PopoverPrimitive,
} from "@ark-ui/svelte/popover";
import { cn } from "@pisagor/utils";
import { usePopoverContent } from "./popover.context";

let { children, class: className, ...rest }: PopoverDescriptionProps = $props();
const { slots } = usePopoverContent();
</script>

<PopoverPrimitive.Description
  {...rest}
  class={slots.description({ class: cn(className) })}
>
  {@render children?.()}
</PopoverPrimitive.Description>
