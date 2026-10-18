<script lang="ts">
  import {
    Menu as MenuPrimitive,
    type MenuContextTriggerProps,
  } from "@ark-ui/svelte";
  import type { ContextMenuRootContract } from "@pisagor/props";
  import { contextMenuRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  type Props = MenuContextTriggerProps & ContextMenuRootContract;

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
