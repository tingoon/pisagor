<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemGroupProps,
  } from "@ark-ui/svelte";
  import DropdownMenuItemGroupLabel from "./dropdown-menu-item-group-label.svelte";

  type Props = MenuItemGroupProps & { heading?: string };

  let { children, heading, ...rest }: Props = $props();
</script>

<MenuPrimitive.ItemGroup {...rest}>
  {#if heading}
    <DropdownMenuItemGroupLabel>{heading}</DropdownMenuItemGroupLabel>
  {/if}
  {@render children?.()}
</MenuPrimitive.ItemGroup>
