<script lang="ts">
  import {
    type MenuItemTextProps,
    Menu as MenuPrimitive,
  } from "@ark-ui/svelte/menu";
  import { dropdownMenuItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  let { class: className, children, ...rest }: MenuItemTextProps = $props();
</script>

<MenuPrimitive.ItemText
  {...rest}
  class={dropdownMenuItemRecipe().text({ class: cn(className) })}
>
  {@render children?.()}
</MenuPrimitive.ItemText>
