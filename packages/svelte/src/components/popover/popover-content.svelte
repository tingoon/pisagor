<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverContentProps as ArkPopoverContentProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { PopoverProps as BasePopoverProps } from "@pisagor/props";
  import { buttonRecipe, popoverRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";
  import { Context } from "./popover.context";
  import PopoverPositioner from "./popover-positioner.svelte";

  const { m } = useLocale();

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
          aria-label={m("popover.close")}
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
