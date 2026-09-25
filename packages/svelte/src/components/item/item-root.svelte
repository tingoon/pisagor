<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes/item";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setItemContext } from "./item.context";
import { useItemGroup } from "./item-group.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  ItemVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    recipe?: typeof itemRecipe;
  };

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
  class={slots.base({ class: cn(className), variant })}
  data-part="root"
  data-scope="item"
  data-variant={variant}
>
  {@render children?.()}
</Ark>
