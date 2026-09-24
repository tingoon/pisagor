<script lang="ts">
import type { TreeViewItemTextProps as ArkProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { treeViewItemRecipe } from "@pisagor/recipes/tree-view";
import { cn } from "@pisagor/utils";
import FileIcon from "phosphor-svelte/lib/FileIcon";
import type { Component } from "svelte";
import { useTreeView, useTreeViewItem } from "./tree-view.context";
import TreeViewNodeInput from "./tree-view-node-input.svelte";

type Props = Omit<ArkProps, "class"> & {
  class?: string | undefined;
  icon?: Component;
};

let { children, icon: Icon = FileIcon, class: className, ...rest }: Props = $props();
const { fileIcons } = useTreeView();
const item = useTreeViewItem();
const slots = $derived(item?.slots ?? treeViewItemRecipe());

function getFileIcon(value: string): Component {
  const name = value.includes(".") ? value.split(".").at(-1)?.toLowerCase() : null;
  const extension = name ? `.${name}` : null;
  const resolved = extension ? fileIcons?.[extension] : undefined;
  return (resolved ?? Icon) as Component;
}
</script>

<TreeViewPrimitive.NodeContext>
  {#snippet render(
  nodeState,
)}
    {@const state = nodeState()}
    {@const ResolvedIcon = getFileIcon(state.value)}
    <span class={slots.icon()} data-part="item-icon" data-scope="tree-view">
      <ResolvedIcon />
    </span>
    {#if state.renaming}
      <TreeViewNodeInput />
    {:else}
      <TreeViewPrimitive.ItemText {...rest} class={slots.title({ class: cn(className) })}>
        {@render children?.()}
      </TreeViewPrimitive.ItemText>
    {/if}
  {/snippet}
</TreeViewPrimitive.NodeContext>
