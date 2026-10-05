<script lang="ts">
import { type MenuItemProps, Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import type { DropdownMenuItemProps as BaseDropdownMenuItemProps } from "@pisagor/props";
import { dropdownMenuItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = MenuItemProps & BaseDropdownMenuItemProps;

let {
  variant = "default",
  recipe = dropdownMenuItemRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<MenuPrimitive.Item
  {...rest}
  class={recipe({ variant }).base({ class: cn(className) })}
  data-variant={variant}
>
  {@render children?.()}
</MenuPrimitive.Item>
