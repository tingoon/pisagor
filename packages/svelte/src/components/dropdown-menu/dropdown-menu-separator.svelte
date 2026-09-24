<script lang="ts">
import type { MenuSeparatorProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { dropdownMenuRecipe } from "@pisagor/recipes/dropdown-menu";
import { cn } from "@pisagor/utils";
import { useDropdownMenu } from "./dropdown-menu.context";

type Props = Omit<MenuSeparatorProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.Separator {...rest} class={slots.separator({ class: cn(className) })} />
