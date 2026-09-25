<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { menuRecipe } from "@pisagor/recipes/menu";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { setMenuContext } from "./menu.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
  recipe?: typeof menuRecipe;
};

let {
  "aria-label": ariaLabel = "Menu",
  recipe = menuRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setMenuContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="nav"
  {...rest}
  aria-label={ariaLabel}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="menu"
>
  {@render children?.()}
</Ark>
