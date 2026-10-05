<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ItemProps as BaseItemProps } from "@pisagor/props";
import { itemRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";
import { setItemGroupContext } from "./item-group.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
} & BaseItemProps;

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
  class={slots.group({ class: className })}
  data-part="group"
  data-scope="item"
  data-variant={variant}
>
  {@render children?.()}
</Ark>
