<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemGroupProps,
  } from "@ark-ui/svelte";
  import type { DropdownMenuItemGroupContract } from "@pisagor/props";
  import DropdownMenuItemGroupLabel from "./dropdown-menu-item-group-label.svelte";

  type Props = MenuItemGroupProps & {
    heading?: string;
  } & DropdownMenuItemGroupContract;

  let { children, heading, ...rest }: Props = $props();
</script>

<MenuPrimitive.ItemGroup {...rest}>
  {#if heading}
    <DropdownMenuItemGroupLabel>{heading}</DropdownMenuItemGroupLabel>
  {/if}
  {@render children?.()}
</MenuPrimitive.ItemGroup>
