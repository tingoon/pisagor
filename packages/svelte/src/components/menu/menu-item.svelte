<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { MenuItemRootContract } from "@pisagor/props";
  import { menuItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { useStyles } from "./menu.context";

  type Props = Omit<HTMLButtonAttributes, "type"> & {
    children?: Snippet;
    type?: "button" | "reset" | "submit";
  } & MenuItemRootContract;

  let {
    variant = "default",
    type = "button",
    recipe = menuItemRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<li class={slots.wrapper()} data-part="item-wrapper" data-scope="menu">
  <Ark
    as="button"
    {...rest}
    class={cn(recipe({ variant }), className)}
    data-part="item"
    data-scope="menu"
    data-variant={variant}
    {type}
  >
    {@render children?.()}
  </Ark>
</li>
