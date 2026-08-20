import type { TreeView as TreeViewPrimitive } from "@ark-ui/react/tree-view";
import type { TreeViewProps } from "./tree-view";
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

export type {
  NodeProviderProps,
  TreeCollection,
  TreeNodeType,
  TreeViewBranchContentProps,
  TreeViewBranchControlProps,
  TreeViewBranchIndentGuideProps,
  TreeViewBranchIndicatorProps,
  TreeViewBranchProps,
  TreeViewBranchTitleProps,
  TreeViewItemProps,
  TreeViewItemTextProps,
  TreeViewItemTitleProps,
  TreeViewLabelProps,
  TreeViewNodeCheckboxProps,
  TreeViewNodeInputProps,
  TreeViewProps,
  TreeViewTreeProps,
} from "./tree-view";
export {
  createFileIcons,
  createTreeCollection,
} from "./tree-view";

export const TreeView = Object.assign(
  TreeViewRoot as TreeViewPrimitive.RootComponent<TreeViewProps>,
  {
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
  },
);
