<script lang="ts">
import type { MenuArrowProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { dropdownMenuRecipe } from "@pisagor/recipes/dropdown-menu";
import { useDropdownMenu } from "./dropdown-menu.context";

type Props = Omit<MenuArrowProps, "style"> & {
  style?: string | undefined;
};

let { style, ...rest }: Props = $props();
const context = useDropdownMenu();
const slots = $derived(context?.slots ?? dropdownMenuRecipe());

const arrowStyle = $derived(
  [
    "--arrow-background: var(--popover)",
    "--arrow-size: calc(1.5 * var(--spacing))",
    "left: 20px",
    style,
  ]
    .filter(Boolean)
    .join("; "),
);
</script>

<MenuPrimitive.Arrow {...rest} style={arrowStyle}>
  <MenuPrimitive.ArrowTip class={slots.arrowTip()} />
</MenuPrimitive.Arrow>
