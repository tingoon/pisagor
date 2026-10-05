<script lang="ts">
import {
  Menu as MenuPrimitive,
  type MenuRadioItemGroupProps,
} from "@ark-ui/svelte/menu";
import DropdownMenuItemGroupLabel from "./dropdown-menu-item-group-label.svelte";

type Props = MenuRadioItemGroupProps & { heading?: string };

let { children, heading, ...rest }: Props = $props();
</script>

<MenuPrimitive.RadioItemGroup {...rest}>
  {#if heading}
    <DropdownMenuItemGroupLabel>{heading}</DropdownMenuItemGroupLabel>
  {/if}
  {@render children?.()}
</MenuPrimitive.RadioItemGroup>
