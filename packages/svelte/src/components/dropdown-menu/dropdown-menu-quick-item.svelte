<script lang="ts">
  import { Menu as MenuPrimitive, type MenuItemProps } from "@ark-ui/svelte";
  import type { DropdownMenuItemProps as BaseDropdownMenuItemProps } from "@pisagor/props";
  import { dropdownMenuItemRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./dropdown-menu.context";

  type Props = MenuItemProps & BaseDropdownMenuItemProps;

  let {
    variant = "default",
    recipe = dropdownMenuItemRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const context = useStyles();
  const menuSlots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.Item
  {...rest}
  class={recipe({ variant }).base({
    class: menuSlots.quickItem({ class: cn(className) }),
  })}
>
  {@render children?.()}
</MenuPrimitive.Item>
