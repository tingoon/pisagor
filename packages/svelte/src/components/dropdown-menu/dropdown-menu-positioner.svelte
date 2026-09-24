<script lang="ts">
import type { MenuPositionerProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { dropdownMenuRecipe } from "@pisagor/recipes/dropdown-menu";
import { cn } from "@pisagor/utils";
import { useDropdownMenu } from "./dropdown-menu.context";

type Props = Omit<MenuPositionerProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.Positioner {...rest} class={slots.positioner({ class: cn(className) })}>
  {@render children?.()}
</MenuPrimitive.Positioner>
