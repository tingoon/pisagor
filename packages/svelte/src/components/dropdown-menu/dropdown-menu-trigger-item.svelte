<script lang="ts">
import type { MenuTriggerItemProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { dropdownMenuItemRecipe } from "@pisagor/recipes/dropdown-menu";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import DropdownMenuShortcut from "./dropdown-menu-shortcut.svelte";

type Props = Omit<MenuTriggerItemProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof dropdownMenuItemRecipe;
};

let { recipe = dropdownMenuItemRecipe, class: className, children, ...rest }: Props = $props();
</script>

<MenuPrimitive.TriggerItem
  {...rest}
  class={recipe({ variant: "default" }).base({ class: cn(className) })}
>
  {@render children?.()}
  <DropdownMenuShortcut>
    <CaretRightIcon />
  </DropdownMenuShortcut>
</MenuPrimitive.TriggerItem>
