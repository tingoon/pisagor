<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ItemProps as BaseItemProps } from "@pisagor/props";
import { itemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import type { SizeScaleProps } from "../../internal/types";
import { setItemContext } from "./item.context";
import { useItemGroup } from "./item-group.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
} & BaseItemProps &
  SizeScaleProps;

let {
  variant: variantProp,
  children,
  size,
  recipe = itemRecipe,
  class: className,
  ...rest
}: Props = $props();

const group = useItemGroup();
const variant = $derived(variantProp ?? group?.variant ?? "default");
const slots = $derived(recipe({ size }));

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
