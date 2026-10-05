<script lang="ts">
import type { MenuItemGroupLabelProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { dropdownMenuRecipe } from "@pisagor/recipes";
import { useDropdownMenu } from "./dropdown-menu.context";

type Props = Omit<MenuItemGroupLabelProps, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.ItemGroupLabel
  {...rest}
  class={slots.itemGroupLabel({ class: className })}
>
  {@render children?.()}
</MenuPrimitive.ItemGroupLabel>
