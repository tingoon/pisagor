<script lang="ts">
import {
  type MenuPositionerProps,
  Menu as MenuPrimitive,
} from "@ark-ui/svelte/menu";
import { dropdownMenuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useDropdownMenu } from "./dropdown-menu.context";

let { class: className, children, ...rest }: MenuPositionerProps = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: cn(className) })}
>
  {@render children?.()}
</MenuPrimitive.Positioner>
