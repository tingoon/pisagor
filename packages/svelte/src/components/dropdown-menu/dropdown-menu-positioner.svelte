<script lang="ts">
import type { MenuPositionerProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { dropdownMenuRecipe } from "@pisagor/recipes";
import { useDropdownMenu } from "./dropdown-menu.context";

type Props = Omit<MenuPositionerProps, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: className })}
>
  {@render children?.()}
</MenuPrimitive.Positioner>
