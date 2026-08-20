import {
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndicator,
  TreeViewItem,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewNodeCheckbox,
  TreeViewNodeProvider,
  TreeViewRoot,
  TreeViewTree,
} from "./tree-view";

export type { NodeProviderProps, TreeCollection, TreeNodeType, TreeViewProps } from "./tree-view";

export { createFileIcons, createTreeCollection } from "./tree-view";

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
