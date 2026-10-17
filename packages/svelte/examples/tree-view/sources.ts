import CheckboxTree from "./checkbox-tree.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomIcons from "./custom-icons.svelte?raw";
import CustomIconsFolder from "./custom-icons-folder.svelte?raw";
import CustomIconsItem from "./custom-icons-item.svelte?raw";
import Default from "./default.svelte?raw";
import Links from "./links.svelte?raw";
import MultipleSelection from "./multiple-selection.svelte?raw";
import Rename from "./rename.svelte?raw";
import TreeNode from "./tree-node.svelte?raw";
import TreeNodeCheckbox from "./tree-node-checkbox.svelte?raw";
import TreeNodeContext from "./tree-node-context.svelte?raw";
import TreeNodeFolder from "./tree-node-folder.svelte?raw";
import TreeNodeItem from "./tree-node-item.svelte?raw";
import TreeNodeLink from "./tree-node-link.svelte?raw";
import WithContextMenu from "./with-context-menu.svelte?raw";

export const imports = `import { TreeView } from "@pisagor/svelte";`;

export const sources = {
  CheckboxTree,
  Controlled,
  CustomIcons,
  CustomIconsFolder,
  CustomIconsItem,
  Default,
  Links,
  MultipleSelection,
  Rename,
  TreeNode,
  TreeNodeCheckbox,
  TreeNodeContext,
  TreeNodeFolder,
  TreeNodeItem,
  TreeNodeLink,
  WithContextMenu,
} as const;
