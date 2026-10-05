<script lang="ts">
import type { MenuItemProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import type { DropdownMenuItemProps as BaseDropdownMenuItemProps } from "@pisagor/props";
import { dropdownMenuItemRecipe } from "@pisagor/recipes";

type Props = Omit<MenuItemProps, "class"> & {
  class?: string | undefined;
} & BaseDropdownMenuItemProps;

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
  class={recipe({ variant }).base({ class: className })}
  data-variant={variant}
>
  {@render children?.()}
</MenuPrimitive.Item>
