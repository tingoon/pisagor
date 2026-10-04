<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { MenuItemProps as MenuItemSharedProps } from "@pisagor/props";
import { menuItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useMenu } from "./menu.context";

type Props = Omit<HTMLButtonAttributes, "class" | "type"> &
  {
    children?: Snippet;
    class?: string | undefined;
    type?: "button" | "reset" | "submit";
  } & MenuItemSharedProps;

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
