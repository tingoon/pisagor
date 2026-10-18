<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuItemGroupLabelProps,
  } from "@ark-ui/svelte";
  import { dropdownMenuRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./dropdown-menu.context";

  let {
    class: className,
    children,
    ...rest
  }: MenuItemGroupLabelProps = $props();
  const context = useStyles();
  const slots = $derived(context?.slots ?? dropdownMenuRecipe());
</script>

<MenuPrimitive.ItemGroupLabel
  {...rest}
  class={slots.itemGroupLabel({ class: cn(className) })}
>
  {@render children?.()}
</MenuPrimitive.ItemGroupLabel>
