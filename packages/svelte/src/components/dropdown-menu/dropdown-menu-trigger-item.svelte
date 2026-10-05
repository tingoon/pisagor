<script lang="ts">
import {
  Menu as MenuPrimitive,
  type MenuTriggerItemProps,
} from "@ark-ui/svelte/menu";
import type { DropdownMenuItemProps as BaseDropdownMenuItemProps } from "@pisagor/props";
import { dropdownMenuItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import DropdownMenuShortcut from "./dropdown-menu-shortcut.svelte";

type Props = MenuTriggerItemProps & BaseDropdownMenuItemProps;

let {
  recipe = dropdownMenuItemRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
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
