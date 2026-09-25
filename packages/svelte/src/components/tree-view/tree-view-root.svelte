<script generics="T extends Record<string, unknown> = Record<string, unknown>" lang="ts">
import type { TreeViewRootProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { treeViewRecipe } from "@pisagor/recipes/tree-view";
import { cn } from "@pisagor/utils";
import type { Component } from "svelte";
import { setTreeViewContext } from "./tree-view.context";

type Props = Omit<TreeViewRootProps<T>, "class"> & {
  class?: string | undefined;
  fileIcons?: Record<string, Component | null>;
  recipe?: typeof treeViewRecipe;
};

let { children, fileIcons, recipe = treeViewRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());
setTreeViewContext({
  get fileIcons() {
    return fileIcons;
  },
  get slots() {
    return slots;
  },
});
</script>

<TreeViewPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</TreeViewPrimitive.Root>
