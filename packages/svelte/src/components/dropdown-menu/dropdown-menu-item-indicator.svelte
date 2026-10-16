<script lang="ts">
  import {
    type MenuItemIndicatorProps,
    Menu as MenuPrimitive,
  } from "@ark-ui/svelte/menu";
  import { dropdownMenuItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import CheckIcon from "phosphor-svelte/lib/CheckIcon";

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
