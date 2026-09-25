<script lang="ts">
import type { MenuContextTriggerProps } from "@ark-ui/svelte/menu";
import { Menu as MenuPrimitive } from "@ark-ui/svelte/menu";
import { contextMenuRecipe } from "@pisagor/recipes/context-menu";
import { cn } from "@pisagor/utils";

type Props = Omit<MenuContextTriggerProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof contextMenuRecipe;
};

let { recipe = contextMenuRecipe, class: className, children, ...rest }: Props = $props();
</script>

<MenuPrimitive.ContextTrigger {...rest} class={recipe({ class: cn(className) })}>
  {@render children?.()}
</MenuPrimitive.ContextTrigger>
