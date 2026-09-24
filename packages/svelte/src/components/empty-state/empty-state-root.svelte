<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { emptyStateRecipe } from "@pisagor/recipes/empty-state";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setEmptyStateContext } from "./empty-state.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "title"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof emptyStateRecipe;
};

let { children, recipe = emptyStateRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());

setEmptyStateContext({
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
  data-scope="empty-state"
>
  {@render children?.()}
</Ark>
