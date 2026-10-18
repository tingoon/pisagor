<script lang="ts">
  import { Menu as MenuPrimitive, type MenuItemProps } from "@ark-ui/svelte";
  import type {
    DropdownMenuItemRootContract,
    DropdownMenuItemContract,
  } from "@pisagor/props";
  import { dropdownMenuItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  type Props = MenuItemProps &
    DropdownMenuItemRootContract &
    DropdownMenuItemContract;

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
