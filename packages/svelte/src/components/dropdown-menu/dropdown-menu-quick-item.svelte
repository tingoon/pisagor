<script lang="ts">
import type { MenuItemProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import type { DropdownMenuItemProps as BaseDropdownMenuItemProps } from "@pisagor/props";
import { dropdownMenuItemRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useDropdownMenu } from "./dropdown-menu.context";

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

const context = useDropdownMenu();
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
