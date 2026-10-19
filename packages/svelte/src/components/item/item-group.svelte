<script lang="ts">
  import type { ItemRootContract } from "@pisagor/contracts";
  import { itemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { setItemGroupContext } from "./item-group.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & ItemRootContract;

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

<div
  {...rest}
  class={slots.group({ class: cn(className) })}
  data-part="group"
  data-scope="item"
  data-variant={variant}
>
  {@render children?.()}
</div>
