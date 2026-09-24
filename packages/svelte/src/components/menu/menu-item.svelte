<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { type MenuItemVariantProps, menuItemRecipe } from "@pisagor/recipes/menu";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useMenu } from "./menu.context";

type Props = Omit<HTMLButtonAttributes, "class" | "type"> &
  MenuItemVariantProps & {
    children?: Snippet;
    class?: string | undefined;
    recipe?: typeof menuItemRecipe;
    type?: "button" | "reset" | "submit";
  };

let {
  variant = "default",
  type = "button",
  recipe = menuItemRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const { slots } = useMenu();
</script>

<Ark as="li" class={slots.wrapper()} data-part="item-wrapper" data-scope="menu" role="none">
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
</Ark>
