<script lang="ts">
import {
  type MenuContentProps,
  Menu as MenuPrimitive,
} from "@ark-ui/svelte/menu";
import { Portal } from "@ark-ui/svelte/portal";
import type { DropdownMenuProps as BaseDropdownMenuProps } from "@pisagor/props";
import { dropdownMenuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setDropdownMenuContext } from "./dropdown-menu.context";
import DropdownMenuPositioner from "./dropdown-menu-positioner.svelte";

type Props = MenuContentProps & BaseDropdownMenuProps;

let {
  recipe = dropdownMenuRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
const slots = $derived(recipe());
setDropdownMenuContext({
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
