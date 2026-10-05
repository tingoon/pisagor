<script lang="ts">
import {
  type MenuCheckboxItemProps,
  Menu as MenuPrimitive,
} from "@ark-ui/svelte/menu";
import type { DropdownMenuItemProps as BaseDropdownMenuItemProps } from "@pisagor/props";
import { dropdownMenuItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";

type Props = MenuCheckboxItemProps & BaseDropdownMenuItemProps;

let {
  recipe = dropdownMenuItemRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
const slots = $derived(recipe({ inset: true, variant: "default" }));
</script>

<MenuPrimitive.CheckboxItem
  {...rest}
  class={slots.base({ class: cn(className) })}
>
  <MenuPrimitive.ItemIndicator class={slots.indicator()}>
    <CheckIcon />
  </MenuPrimitive.ItemIndicator>
  <MenuPrimitive.ItemText class={slots.text()}>
    {@render children?.()}
  </MenuPrimitive.ItemText>
</MenuPrimitive.CheckboxItem>
