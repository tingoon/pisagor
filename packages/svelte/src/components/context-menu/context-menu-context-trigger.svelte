<script lang="ts">
import type { MenuContextTriggerProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import type { ContextMenuProps as BaseContextMenuProps } from "@pisagor/props";
import { contextMenuRecipe } from "@pisagor/recipes";

type Props = Omit<MenuContextTriggerProps, "class"> & {
  class?: string | undefined;
} & BaseContextMenuProps;

let {
  recipe = contextMenuRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<MenuPrimitive.ContextTrigger {...rest} class={recipe({ class: className })}>
  {@render children?.()}
</MenuPrimitive.ContextTrigger>
