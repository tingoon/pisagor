<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuContextTriggerProps,
  } from "@ark-ui/svelte";
  import type { ContextMenuProps as BaseContextMenuProps } from "@pisagor/props";
  import { contextMenuRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  type Props = MenuContextTriggerProps & BaseContextMenuProps;

  let {
    recipe = contextMenuRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<MenuPrimitive.ContextTrigger
  {...rest}
  class={recipe({ class: cn(className) })}
>
  {@render children?.()}
</MenuPrimitive.ContextTrigger>
