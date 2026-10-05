<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { NavbarProps as BaseNavbarProps } from "@pisagor/props";
import { navbarRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setNavbarContext } from "./navbar.context";

type Props = HTMLAttributes<HTMLElement> & BaseNavbarProps;

let {
  children,
  recipe = navbarRecipe,
  class: className,
  ...rest
}: Props = $props();
const slots = $derived(recipe());
setNavbarContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="header"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="navbar"
>
  {@render children?.()}
</Ark>
