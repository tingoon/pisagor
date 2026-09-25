<script lang="ts">
import type { PopoverContentProps as ArkPopoverContentProps } from "@ark-ui/svelte/popover";
import { Popover as PopoverPrimitive } from "@ark-ui/svelte/popover";
import { Portal } from "@ark-ui/svelte/portal";
import { buttonRecipe } from "@pisagor/recipes/button";
import { popoverRecipe } from "@pisagor/recipes/popover";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { setPopoverContentContext } from "./popover.context";

type Props = Omit<ArkPopoverContentProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof popoverRecipe;
  showCloseButton?: boolean;
};

let {
  showCloseButton = false,
  children,
  recipe = popoverRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setPopoverContentContext({
  get slots() {
    return slots;
  },
});
</script>

<Portal>
  <PopoverPrimitive.Positioner>
    <PopoverPrimitive.Content {...rest} class={slots.base({ class: cn(className) })}>
      {@render children?.()}
      {#if showCloseButton}
        <PopoverPrimitive.CloseTrigger
          aria-label="Close"
          class={cn(buttonRecipe({ size: "icon-sm", variant: "ghost" }).base(), slots.close())}
          type="button"
        >
          <XIcon />
        </PopoverPrimitive.CloseTrigger>
      {/if}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Positioner>
</Portal>
