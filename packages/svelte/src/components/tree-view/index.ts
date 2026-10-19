import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte";
import TreeViewShorthand from "./tree-view.svelte";
import TreeViewBranch from "./tree-view-branch.svelte";
import TreeViewBranchContent from "./tree-view-branch-content.svelte";
import TreeViewBranchControl from "./tree-view-branch-control.svelte";
import TreeViewBranchIndentGuide from "./tree-view-branch-indent-guide.svelte";
import TreeViewBranchIndicator from "./tree-view-branch-indicator.svelte";
import TreeViewBranchText from "./tree-view-branch-text.svelte";
import TreeViewBranchTrigger from "./tree-view-branch-trigger.svelte";
import TreeViewItem from "./tree-view-item.svelte";
import TreeViewItemText from "./tree-view-item-text.svelte";
import TreeViewLabel from "./tree-view-label.svelte";
import TreeViewNodeCheckbox from "./tree-view-node-checkbox.svelte";
import TreeViewNodeProvider from "./tree-view-node-provider.svelte";
import TreeViewNodeRenameInput from "./tree-view-node-rename-input.svelte";
import TreeViewRoot from "./tree-view-root.svelte";
import TreeViewTree from "./tree-view-tree.svelte";

export type { TreeCollection, TreeNodeType } from "./create-tree-collection";
export {
  createFileIcons,
  createTreeCollection,
} from "./create-tree-collection";

export type {
  TreeViewBranchContentProps,
  TreeViewBranchControlProps,
  TreeViewBranchIndentGuideProps,
  TreeViewBranchIndicatorProps,
  TreeViewBranchProps,
  TreeViewBranchTextProps,
  TreeViewBranchTriggerProps,
  TreeViewItemProps,
  TreeViewItemTextProps,
  TreeViewLabelProps,
  TreeViewNodeCheckboxIndicatorProps,
  TreeViewNodeCheckboxProps,
  TreeViewNodeRenameInputProps,
  TreeViewTreeProps,
} from "@ark-ui/svelte";

export const TreeView = Object.assign(TreeViewShorthand, {
  Branch: TreeViewBranch,
  BranchContent: TreeViewBranchContent,
  BranchControl: TreeViewBranchControl,
  BranchIndentGuide: TreeViewBranchIndentGuide,
  BranchIndicator: TreeViewBranchIndicator,
  BranchText: TreeViewBranchText,
  BranchTrigger: TreeViewBranchTrigger,
  Context: TreeViewPrimitive.Context,
  Item: TreeViewItem,
  ItemText: TreeViewItemText,
  Label: TreeViewLabel,
  NodeCheckbox: TreeViewNodeCheckbox,
  NodeCheckboxIndicator: TreeViewPrimitive.NodeCheckboxIndicator,
  NodeContext: TreeViewPrimitive.NodeContext,
  NodeProvider: TreeViewNodeProvider,
  NodeRenameInput: TreeViewNodeRenameInput,
  Root: TreeViewRoot,
  Tree: TreeViewTree,
});
