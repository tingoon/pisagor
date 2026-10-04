<script lang="ts">
import type { MenuContextTriggerProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import type { ContextMenuProps as ContextMenuSharedProps } from "@pisagor/props";
import { contextMenuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = Omit<MenuContextTriggerProps, "class"> &
  {
  class?: string | undefined;
  } & ContextMenuSharedProps;

let { recipe = contextMenuRecipe, class: className, children, ...rest }: Props = $props();
</script>

<MenuPrimitive.ContextTrigger {...rest} class={recipe({ class: cn(className) })}>
  {@render children?.()}
</MenuPrimitive.ContextTrigger>
