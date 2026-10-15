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
  variant = "default",
  recipe = dropdownMenuItemRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
const slots = $derived(recipe({ inset: true, variant }));
</script>

<MenuPrimitive.RadioItem
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-variant={variant}
>
  <MenuPrimitive.ItemIndicator class={slots.indicator()}>
    <CheckIcon />
  </MenuPrimitive.ItemIndicator>
  <MenuPrimitive.ItemText class={slots.text()}>
    {@render children?.()}
  </MenuPrimitive.ItemText>
</MenuPrimitive.RadioItem>
