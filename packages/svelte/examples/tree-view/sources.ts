import checkbox_treeRaw from "./checkbox-tree.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_iconsRaw from "./custom-icons.svelte?raw";
import custom_icons_folderRaw from "./custom-icons-folder.svelte?raw";
import custom_icons_itemRaw from "./custom-icons-item.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import linksRaw from "./links.svelte?raw";
import multiple_selectionRaw from "./multiple-selection.svelte?raw";
import renameRaw from "./rename.svelte?raw";
import tree_nodeRaw from "./tree-node.svelte?raw";
import tree_node_checkboxRaw from "./tree-node-checkbox.svelte?raw";
import tree_node_contextRaw from "./tree-node-context.svelte?raw";
import tree_node_folderRaw from "./tree-node-folder.svelte?raw";
import tree_node_itemRaw from "./tree-node-item.svelte?raw";
import tree_node_linkRaw from "./tree-node-link.svelte?raw";
import with_context_menuRaw from "./with-context-menu.svelte?raw";

export const imports = `import { TreeView } from "@pisagor/svelte";`;

export const sources = {
  CheckboxTree: checkbox_treeRaw,
  Controlled: controlledRaw,
  CustomIcons: custom_iconsRaw,
  CustomIconsFolder: custom_icons_folderRaw,
  CustomIconsItem: custom_icons_itemRaw,
  Default: defaultRaw,
  Links: linksRaw,
  MultipleSelection: multiple_selectionRaw,
  Rename: renameRaw,
  TreeNode: tree_nodeRaw,
  TreeNodeCheckbox: tree_node_checkboxRaw,
  TreeNodeContext: tree_node_contextRaw,
  TreeNodeFolder: tree_node_folderRaw,
  TreeNodeItem: tree_node_itemRaw,
  TreeNodeLink: tree_node_linkRaw,
  WithContextMenu: with_context_menuRaw,
} as const;
