<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuPositionerProps,
  } from "@ark-ui/svelte";
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
