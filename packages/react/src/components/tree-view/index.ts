import type { TreeView as TreeViewPrimitive } from "@ark-ui/react/tree-view";
import type { TreeViewProps } from "./tree-view";
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

export type { NodeProviderProps, TreeCollection, TreeNodeType } from "./tree-view";
export {
  createFileIcons,
  createTreeCollection,
} from "./tree-view";

export const TreeView = Object.assign(
  TreeViewRoot as TreeViewPrimitive.RootComponent<TreeViewProps>,
  {
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
  },
);
