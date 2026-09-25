<script lang="ts">
import type { TreeViewBranchControlProps as ArkProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { cn } from "@pisagor/utils";
import FolderIcon from "phosphor-svelte/lib/FolderIcon";
import FolderOpenIcon from "phosphor-svelte/lib/FolderOpenIcon";
import type { Component } from "svelte";
import { useTreeView, useTreeViewBranch } from "./tree-view.context";
import TreeViewBranchIndicator from "./tree-view-branch-indicator.svelte";
import TreeViewNodeInput from "./tree-view-node-input.svelte";

type Props = Omit<ArkProps, "class"> & {
  class?: string | undefined;
  expandedIcon?: Component | null;
  icon?: Component | null;
};

let {
  children,
  expandedIcon: ExpandedIcon,
  icon: Icon,
  class: className,
  ...rest
}: Props = $props();
const { slots } = useTreeView();
const branch = useTreeViewBranch();
</script>

<TreeViewPrimitive.BranchControl {...rest} class={slots.control({ class: cn(className) })}>
  <TreeViewBranchIndicator />
  <TreeViewPrimitive.NodeContext>
    {#snippet render(
  nodeState,
)}
      {@const state = nodeState()}
      {#if state.renaming}
        <TreeViewNodeInput />
      {:else}
        <TreeViewPrimitive.BranchText class={branch.slots.title()}>
          {#if Icon !== null && !state.expanded}
            <span class="inline-flex" data-part="item-icon" data-scope="tree-view">
              {#if Icon}
                <Icon />
              {:else}
                <FolderIcon />
              {/if}
            </span>
          {/if}
          {#if ExpandedIcon !== null && state.expanded}
            <span class="inline-flex" data-part="item-icon" data-scope="tree-view">
              {#if ExpandedIcon}
                <ExpandedIcon />
              {:else}
                <FolderOpenIcon />
              {/if}
            </span>
          {/if}
          {@render children?.()}
        </TreeViewPrimitive.BranchText>
      {/if}
    {/snippet}
  </TreeViewPrimitive.NodeContext>
</TreeViewPrimitive.BranchControl>
