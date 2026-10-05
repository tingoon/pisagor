<script lang="ts">
import {
  Menu as MenuPrimitive,
  type MenuRadioItemProps,
} from "@ark-ui/svelte/menu";
import type { DropdownMenuItemProps as BaseDropdownMenuItemProps } from "@pisagor/props";
import { dropdownMenuItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";

type Props = MenuRadioItemProps & BaseDropdownMenuItemProps;

let {
  recipe = dropdownMenuItemRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
const slots = $derived(recipe({ inset: true, variant: "default" }));
</script>

<MenuPrimitive.RadioItem {...rest} class={slots.base({ class: cn(className) })}>
  <MenuPrimitive.ItemIndicator class={slots.indicator()}>
    <CheckIcon />
  </MenuPrimitive.ItemIndicator>
  <MenuPrimitive.ItemText class={slots.text()}>
    {@render children?.()}
  </MenuPrimitive.ItemText>
</MenuPrimitive.RadioItem>
