<script lang="ts">
import {
  type MenuItemGroupLabelProps,
  Menu as MenuPrimitive,
} from "@ark-ui/svelte/menu";
import { dropdownMenuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useDropdownMenu } from "./dropdown-menu.context";

let { class: className, children, ...rest }: MenuItemGroupLabelProps = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.ItemGroupLabel
  {...rest}
  class={slots.itemGroupLabel({ class: cn(className) })}
>
  {@render children?.()}
</MenuPrimitive.ItemGroupLabel>
