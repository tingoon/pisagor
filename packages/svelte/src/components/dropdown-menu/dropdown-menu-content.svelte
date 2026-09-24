<script lang="ts">
import type { MenuContentProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { Portal } from "@ark-ui/svelte/portal";
import { dropdownMenuRecipe } from "@pisagor/recipes/dropdown-menu";
import { cn } from "@pisagor/utils";
import { setDropdownMenuContext } from "./dropdown-menu.context";
import DropdownMenuPositioner from "./dropdown-menu-positioner.svelte";

type Props = Omit<MenuContentProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof dropdownMenuRecipe;
};

let { recipe = dropdownMenuRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe());
setDropdownMenuContext({
  get slots() {
    return slots;
  },
});
</script>

<Portal>
  <DropdownMenuPositioner>
    <MenuPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
      {@render children?.()}
    </MenuPrimitive.Content>
  </DropdownMenuPositioner>
</Portal>
