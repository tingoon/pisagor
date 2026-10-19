<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuTriggerItemProps,
  } from "@ark-ui/svelte";
  import type {
    DropdownMenuItemRootContract,
    DropdownMenuItemContract,
  } from "@pisagor/contracts";
  import { dropdownMenuItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CaretRightIcon } from "phosphor-svelte";
  import DropdownMenuShortcut from "./dropdown-menu-shortcut.svelte";

  type Props = MenuTriggerItemProps &
    DropdownMenuItemRootContract &
    DropdownMenuItemContract;

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
