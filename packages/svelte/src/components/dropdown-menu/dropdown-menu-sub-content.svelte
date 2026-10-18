<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuContentProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { DropdownMenuRootContract } from "@pisagor/props";
  import { dropdownMenuRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { Context } from "./dropdown-menu.context";
  import DropdownMenuPositioner from "./dropdown-menu-positioner.svelte";

  type Props = MenuContentProps & DropdownMenuRootContract;

  let {
    recipe = dropdownMenuRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
  const slots = $derived(recipe());
  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<Portal>
  <DropdownMenuPositioner>
    <MenuPrimitive.Content
      {...rest}
      class={slots.content({ class: cn(className) })}
    >
      {@render children?.()}
    </MenuPrimitive.Content>
  </DropdownMenuPositioner>
</Portal>
