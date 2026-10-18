<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemIndicatorProps,
  } from "@ark-ui/svelte";
  import { dropdownMenuItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CheckIcon } from "phosphor-svelte";

  let {
    class: className,
    children,
    ...rest
  }: MenuItemIndicatorProps = $props();
</script>

<MenuPrimitive.ItemIndicator
  {...rest}
  class={dropdownMenuItemRecipe().indicator({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    <CheckIcon />
  {/if}
</MenuPrimitive.ItemIndicator>
