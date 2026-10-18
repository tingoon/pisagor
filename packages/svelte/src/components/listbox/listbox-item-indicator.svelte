<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemIndicatorProps,
  } from "@ark-ui/svelte";
  import { listboxItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CheckIcon } from "phosphor-svelte";
  import { useListboxItem } from "./listbox.context";

  let {
    class: className,
    children,
    ...rest
  }: ListboxItemIndicatorProps = $props();
  const ctx = useListboxItem();
  const slots = $derived(ctx?.slots ?? listboxItemRecipe());
</script>

<ListboxPrimitive.ItemIndicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    <CheckIcon />
  {/if}
</ListboxPrimitive.ItemIndicator>
