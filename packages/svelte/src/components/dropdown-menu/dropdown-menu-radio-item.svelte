<script lang="ts">
import type { MenuRadioItemProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { dropdownMenuItemRecipe } from "@pisagor/recipes/dropdown-menu";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";

type Props = Omit<MenuRadioItemProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof dropdownMenuItemRecipe;
};

let { recipe = dropdownMenuItemRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe({ inset: true, variant: "default" }));
</script>

<MenuPrimitive.RadioItem {...rest} class={slots.base({ class: cn(className) })}>
  <MenuPrimitive.ItemIndicator class={slots.indicator()}>
    <CheckIcon />
  </MenuPrimitive.ItemIndicator>
  <MenuPrimitive.ItemText class={slots.text()}> {@render children?.()} </MenuPrimitive.ItemText>
</MenuPrimitive.RadioItem>
