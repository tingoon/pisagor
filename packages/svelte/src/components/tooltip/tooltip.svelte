<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import type { TooltipRootProps } from "@ark-ui/svelte/tooltip";
import { Tooltip as TooltipPrimitive } from "@ark-ui/svelte/tooltip";
import { type TooltipRecipeSlot, tooltipRecipe } from "@pisagor/recipes/tooltip";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import { setTooltipContext } from "./tooltip.context";

type Props = Omit<TooltipRootProps, "class" | "children"> & {
  children?: Snippet;
  class?: string | undefined;
  classNames?: Partial<Record<TooltipRecipeSlot, string>>;
  content: string | Snippet;
  recipe?: typeof tooltipRecipe;
};

let {
  closeDelay = 150,
  openDelay = 400,
  positioning = { placement: "top" },
  children,
  content,
  class: className,
  classNames,
  recipe = tooltipRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setTooltipContext({
  get slots() {
    return slots;
  },
});
</script>

<TooltipPrimitive.Root {...rest} {closeDelay} {openDelay} {positioning}>
  <TooltipPrimitive.Trigger>
    {#snippet asChild(
  props,
)}
      {@const merged = props({ class: "inline-flex" })}
      <span {...merged}> {@render children?.()} </span>
    {/snippet}
  </TooltipPrimitive.Trigger>

  <Portal>
    <TooltipPrimitive.Positioner>
      <TooltipPrimitive.Content
        class={slots.content({ class: cn(className, classNames?.content) })}
      >
        <TooltipPrimitive.Arrow class={slots.arrow({ class: cn(classNames?.arrow) })}>
          <TooltipPrimitive.ArrowTip />
        </TooltipPrimitive.Arrow>
        {#if typeof content === "string"}
          {content}
        {:else}
          {@render content()}
        {/if}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Positioner>
  </Portal>
</TooltipPrimitive.Root>
