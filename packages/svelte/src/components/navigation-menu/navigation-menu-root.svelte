<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { navigationMenuRecipe } from "@pisagor/recipes/navigation-menu";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { setNavigationMenuContext } from "./navigation-menu.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
  recipe?: typeof navigationMenuRecipe;
};

let { recipe = navigationMenuRecipe, class: className, children, ...rest }: Props = $props();
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
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="navigation-menu"
>
  {@render children?.()}
</Ark>
