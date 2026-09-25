import TreeViewBranch from "./tree-view-branch.svelte";
import TreeViewBranchContent from "./tree-view-branch-content.svelte";
import TreeViewBranchControl from "./tree-view-branch-control.svelte";
import TreeViewBranchIndicator from "./tree-view-branch-indicator.svelte";
import TreeViewItem from "./tree-view-item.svelte";
import TreeViewItemText from "./tree-view-item-text.svelte";
import TreeViewLabel from "./tree-view-label.svelte";
import TreeViewNodeCheckbox from "./tree-view-node-checkbox.svelte";
import TreeViewNodeProvider from "./tree-view-node-provider.svelte";
import TreeViewRoot from "./tree-view-root.svelte";
import TreeViewTree from "./tree-view-tree.svelte";

export {
  createFileIcons,
  createTreeCollection,
  type TreeNodeType,
} from "./create-tree-collection";

export const TreeView = Object.assign(TreeViewRoot, {
  Branch: TreeViewBranch,
  BranchContent: TreeViewBranchContent,
  BranchControl: TreeViewBranchControl,
  BranchIndicator: TreeViewBranchIndicator,
  Item: TreeViewItem,
  ItemText: TreeViewItemText,
  Label: TreeViewLabel,
  NodeCheckbox: TreeViewNodeCheckbox,
  NodeProvider: TreeViewNodeProvider,
  Tree: TreeViewTree,
});
