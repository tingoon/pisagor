<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { NavigationMenuProps as BaseNavigationMenuProps } from "@pisagor/props";
import { navigationMenuRecipe } from "@pisagor/recipes";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { setNavigationMenuContext } from "./navigation-menu.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
} & BaseNavigationMenuProps;

let {
  recipe = navigationMenuRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
const slots = $derived(recipe());
setNavigationMenuContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="nav"
  {...rest}
  class={slots.base({ class: className })}
  data-part="root"
  data-scope="navigation-menu"
>
  {@render children?.()}
</Ark>
