<script
  generics="T extends Record<string, unknown> = Record<string, unknown>"
  lang="ts"
>
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewRootProps,
  } from "@ark-ui/svelte";
  import type {
    TreeViewContract,
    TreeViewRootContract,
  } from "@pisagor/contracts";
  import {
    CaretRightIcon,
    CheckIcon,
    FileIcon,
    FolderIcon,
    FolderOpenIcon,
    MinusIcon,
  } from "phosphor-svelte";
  import type { Component, Snippet } from "svelte";
  import type { TreeNodeType } from "./create-tree-collection";
  import TreeViewBranch from "./tree-view-branch.svelte";
  import TreeViewBranchContent from "./tree-view-branch-content.svelte";
  import TreeViewBranchControl from "./tree-view-branch-control.svelte";
  import TreeViewBranchIndentGuide from "./tree-view-branch-indent-guide.svelte";
  import TreeViewBranchIndicator from "./tree-view-branch-indicator.svelte";
  import TreeViewBranchText from "./tree-view-branch-text.svelte";
  import TreeViewItem from "./tree-view-item.svelte";
  import TreeViewItemText from "./tree-view-item-text.svelte";
  import TreeViewLabel from "./tree-view-label.svelte";
  import TreeViewNodeCheckbox from "./tree-view-node-checkbox.svelte";
  import TreeViewNodeIcon from "./tree-view-node-icon.svelte";
  import TreeViewNodeProvider from "./tree-view-node-provider.svelte";
  import TreeViewNodeRenameInput from "./tree-view-node-rename-input.svelte";
  import TreeViewTree from "./tree-view-tree.svelte";
  import { withTreeViewProvider } from "./tree-view.context";

  type Props = Omit<TreeViewRootProps<T>, "children"> &
    TreeViewRootContract &
    TreeViewContract & {
      /**
       * Default open-folder icon (`null` hides it). A node's own `expandedIcon`
       * wins.
       *
       * @defaultValue FolderOpenIcon
       */
      branchExpandedIcon?: Component | null;
      /**
       * Default folder icon (`null` hides it). A node's own `icon` wins.
       *
       * @defaultValue FolderIcon
       */
      branchIcon?: Component | null;
      /**
       * Whether to render a checkbox per node (use with `checkedValue`).
       *
       * @defaultValue false
       */
      checkbox?: boolean;
      /** Icons by file extension (see `createFileIcons`). */
      fileIcons?: Record<string, Component | null>;
      /**
       * Default file icon. A node's own `icon` or a `fileIcons` match wins.
       *
       * @defaultValue FileIcon
       */
      itemIcon?: Component;
      /** Visible label rendered above the tree. */
      label?: string | Snippet;
    };

  let {
    branchClassNames,
    branchExpandedIcon,
    branchIcon,
    checkbox = false,
    classNames,
    fileIcons,
    itemClassNames,
    itemIcon,
    label,
    ...rest
  }: Props = $props();
  const root = withTreeViewProvider(() => rest, {
    name: "Root",
    slot: "base",
  });
  const nodes = $derived(
    (rest.collection?.rootNode.children ?? []) as TreeNodeType[],
  );

  function getFileExtension(file: string) {
    const name = file.includes(".")
      ? file.split(".").at(-1)?.toLowerCase()
      : null;

    return name ? `.${name}` : null;
  }

  function branchIconFor(node: TreeNodeType, expanded: boolean) {
    if (expanded) {
      if (node.expandedIcon !== undefined) return node.expandedIcon;
      if (branchExpandedIcon !== undefined) return branchExpandedIcon;

      return FolderOpenIcon;
    }
    if (node.icon !== undefined) return node.icon;
    if (branchIcon !== undefined) return branchIcon;

    return FolderIcon;
  }

  function itemIconFor(node: TreeNodeType, value: string) {
    if (node.icon !== undefined) return node.icon;
    const extension = getFileExtension(value);

    return (
      (extension ? fileIcons?.[extension] : undefined) ?? itemIcon ?? FileIcon
    );
  }
</script>

{#snippet nodeCheckbox()}
  {#if checkbox}
    <TreeViewNodeCheckbox class={itemClassNames?.checkbox}>
      <TreeViewPrimitive.NodeCheckboxIndicator>
        {#snippet indeterminate()}
          <MinusIcon />
        {/snippet}
        <CheckIcon />
      </TreeViewPrimitive.NodeCheckboxIndicator>
    </TreeViewNodeCheckbox>
  {/if}
{/snippet}

{#snippet treeNode(node: TreeNodeType, indexPath: number[])}
  <TreeViewNodeProvider {indexPath} {node}>
    {#if node.children}
      <TreeViewBranch class={branchClassNames?.base}>
        <TreeViewBranchControl class={classNames?.control}>
          <TreeViewBranchIndicator class={branchClassNames?.indicator}>
            <CaretRightIcon />
          </TreeViewBranchIndicator>
          <TreeViewPrimitive.NodeContext>
            {#snippet render(nodeState)}
              {#if nodeState().renaming}
                <TreeViewNodeRenameInput class={itemClassNames?.renameInput} />
              {:else}
                <TreeViewBranchText class={branchClassNames?.title}>
                  {@render nodeCheckbox()}
                  <TreeViewNodeIcon
                    class={itemClassNames?.icon}
                    icon={branchIconFor(node, nodeState().expanded)}
                  />
                  {node.name}
                </TreeViewBranchText>
              {/if}
            {/snippet}
          </TreeViewPrimitive.NodeContext>
        </TreeViewBranchControl>
        <TreeViewBranchContent class={branchClassNames?.content}>
          <TreeViewBranchIndentGuide class={branchClassNames?.indentGuide} />
          {#each node.children as child, index (child.id)}
            {@render treeNode(child, [...indexPath, index])}
          {/each}
        </TreeViewBranchContent>
      </TreeViewBranch>
    {:else}
      <TreeViewItem class={classNames?.control}>
        {@render nodeCheckbox()}
        <TreeViewPrimitive.NodeContext>
          {#snippet render(nodeState)}
            <TreeViewNodeIcon
              class={itemClassNames?.icon}
              icon={itemIconFor(node, nodeState().value)}
            />
            {#if nodeState().renaming}
              <TreeViewNodeRenameInput class={itemClassNames?.renameInput} />
            {:else}
              <TreeViewItemText class={itemClassNames?.title}>
                {node.name}
              </TreeViewItemText>
            {/if}
          {/snippet}
        </TreeViewPrimitive.NodeContext>
      </TreeViewItem>
    {/if}
  </TreeViewNodeProvider>
{/snippet}

<TreeViewPrimitive.Root {...root.props as TreeViewRootProps<T>}>
  {#if label != null}
    <TreeViewLabel class={classNames?.label}>
      {#if typeof label === "string"}
        {label}
      {:else}
        {@render label()}
      {/if}
    </TreeViewLabel>
  {/if}
  <TreeViewTree class={classNames?.tree}>
    {#each nodes as node, index (node.id)}
      {@render treeNode(node, [index])}
    {/each}
  </TreeViewTree>
</TreeViewPrimitive.Root>
