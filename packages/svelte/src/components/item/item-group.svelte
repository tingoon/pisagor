<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes/item";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setItemGroupContext } from "./item-group.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  ItemVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    recipe?: typeof itemRecipe;
  };

let {
  variant = "default",
  children,
  recipe = itemRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setItemGroupContext({
  get variant() {
    return variant;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.group({ class: cn(className) })}
  data-part="group"
  data-scope="item"
  data-variant={variant}
>
  {@render children?.()}
</Ark>
