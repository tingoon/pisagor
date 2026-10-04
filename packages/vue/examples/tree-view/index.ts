import { stripVueExample } from "@pisagor/utils";
import checkbox_treeRaw from "./checkbox-tree.ts?raw";
import controlledRaw from "./controlled.ts?raw";
import custom_iconsRaw from "./custom-icons.ts?raw";
import custom_icons_folderRaw from "./custom-icons-folder.ts?raw";
import custom_icons_itemRaw from "./custom-icons-item.ts?raw";
import defaultRaw from "./default.ts?raw";
import linksRaw from "./links.ts?raw";
import multiple_selectionRaw from "./multiple-selection.ts?raw";
import renameRaw from "./rename.ts?raw";
import with_context_menuRaw from "./with-context-menu.ts?raw";

export const imports = `import { TreeView } from "@pisagor/vue/tree-view";`;

export const sources = {
  CheckboxTree: stripVueExample(checkbox_treeRaw),
  Controlled: stripVueExample(controlledRaw),
  CustomIcons: stripVueExample(custom_iconsRaw),
  CustomIconsFolder: stripVueExample(custom_icons_folderRaw),
  CustomIconsItem: stripVueExample(custom_icons_itemRaw),
  Default: stripVueExample(defaultRaw),
  Links: stripVueExample(linksRaw),
  MultipleSelection: stripVueExample(multiple_selectionRaw),
  Rename: stripVueExample(renameRaw),
  WithContextMenu: stripVueExample(with_context_menuRaw),
} as const;

export { default as CheckboxTree } from "./checkbox-tree";
export { default as Controlled } from "./controlled";
export { default as CustomIcons } from "./custom-icons";
export { default as CustomIconsFolder } from "./custom-icons-folder";
export { default as CustomIconsItem } from "./custom-icons-item";
export { default as Default } from "./default";
export { default as Links } from "./links";
export { default as MultipleSelection } from "./multiple-selection";
export { default as Rename } from "./rename";
export { default as WithContextMenu } from "./with-context-menu";
