import {
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchIndicator,
  TreeViewBranchItem,
  TreeViewCheckbox,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
  TreeViewNode,
  TreeViewRoot,
  TreeViewTree,
} from "./tree-view";

export type { NodeProviderProps, TreeCollection, TreeNodeType, TreeViewProps } from "./tree-view";

export { createFileIcons, createTreeCollection } from "./tree-view";

export const TreeView = Object.assign(TreeViewRoot, {
  Branch: TreeViewBranch,
  BranchContent: TreeViewBranchContent,
  BranchIndicator: TreeViewBranchIndicator,
  BranchItem: TreeViewBranchItem,
  Checkbox: TreeViewCheckbox,
  Content: TreeViewContent,
  Item: TreeViewItem,
  Label: TreeViewLabel,
  Node: TreeViewNode,
  Tree: TreeViewTree,
});
