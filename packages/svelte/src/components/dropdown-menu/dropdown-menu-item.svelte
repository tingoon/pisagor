<script lang="ts">
import type { MenuItemProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import type { DropdownMenuItemProps as DropdownMenuItemSharedProps } from "@pisagor/props";
import { dropdownMenuItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = Omit<MenuItemProps, "class"> &
  {
    class?: string | undefined;
  } & DropdownMenuItemSharedProps;

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
