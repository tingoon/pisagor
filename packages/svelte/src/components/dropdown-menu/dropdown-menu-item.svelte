<script lang="ts">
import type { MenuItemProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import {
  type DropdownMenuItemVariantProps,
  dropdownMenuItemRecipe,
} from "@pisagor/recipes/dropdown-menu";
import { cn } from "@pisagor/utils";

type Props = Omit<MenuItemProps, "class"> &
  DropdownMenuItemVariantProps & {
    class?: string | undefined;
    recipe?: typeof dropdownMenuItemRecipe;
  };

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
