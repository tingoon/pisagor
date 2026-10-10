<script lang="ts">
import {
  type PopoverContentProps as ArkPopoverContentProps,
  Popover as PopoverPrimitive,
} from "@ark-ui/svelte/popover";
import { Portal } from "@ark-ui/svelte/portal";
import type { PopoverProps as BasePopoverProps } from "@pisagor/props";
import { buttonRecipe, popoverRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { Context } from "./popover.context";
import PopoverPositioner from "./popover-positioner.svelte";

type Props = ArkPopoverContentProps & {
  showCloseButton?: boolean;
} & BasePopoverProps;

let {
  showCloseButton = false,
  children,
  recipe = popoverRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

Context.set({
  get slots() {
    return slots;
  },
  variants: {},
});
</script>

<Portal>
  <PopoverPositioner>
    <PopoverPrimitive.Content
      {...rest}
      class={slots.base({ class: cn(className) })}
    >
      {@render children?.()}
      {#if showCloseButton}
        <PopoverPrimitive.CloseTrigger
          aria-label="Close"
          class={cn(
            buttonRecipe({ size: "icon-sm", variant: "ghost" }).base(),
            slots.close(),
          )}
          type="button"
        >
          <XIcon />
        </PopoverPrimitive.CloseTrigger>
      {/if}
    </PopoverPrimitive.Content>
  </PopoverPositioner>
</Portal>
