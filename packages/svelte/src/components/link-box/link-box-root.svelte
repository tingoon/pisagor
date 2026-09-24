<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { linkBoxRecipe } from "@pisagor/recipes/link-box";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setLinkBoxContext } from "./link-box.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof linkBoxRecipe;
};

let { children, recipe = linkBoxRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());

setLinkBoxContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="link-box"
>
  {@render children?.()}
</Ark>
