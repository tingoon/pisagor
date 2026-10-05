<script lang="ts">
import {
  Menu as MenuPrimitive,
  type MenuSeparatorProps,
} from "@ark-ui/svelte/menu";
import { dropdownMenuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useDropdownMenu } from "./dropdown-menu.context";

let { class: className, ...rest }: MenuSeparatorProps = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.Separator
  {...rest}
  class={slots.separator({ class: cn(className) })}
/>
