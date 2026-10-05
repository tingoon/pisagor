<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ItemProps as BaseItemProps } from "@pisagor/props";
import { itemRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";
import { setItemContext } from "./item.context";
import { useItemGroup } from "./item-group.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
} & BaseItemProps;

let {
  variant: variantProp,
  children,
  recipe = itemRecipe,
  class: className,
  ...rest
}: Props = $props();

const group = useItemGroup();
const variant = $derived(variantProp ?? group?.variant ?? "default");
const slots = $derived(recipe());

setItemContext({
  get slots() {
    return slots;
  },
  get variant() {
    return variant;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: className, variant })}
  data-part="root"
  data-scope="item"
  data-variant={variant}
>
  {@render children?.()}
</Ark>
