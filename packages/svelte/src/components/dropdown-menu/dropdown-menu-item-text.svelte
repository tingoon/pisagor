<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemTextProps,
  } from "@ark-ui/svelte";
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
