<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { CardProps as BaseCardProps } from "@pisagor/props";
import { cardRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setCardContext } from "./card.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  } & BaseCardProps;

let { children, recipe = cardRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());

setCardContext({
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
  data-scope="card"
>
  {@render children?.()}
</Ark>
