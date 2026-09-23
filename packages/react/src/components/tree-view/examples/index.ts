import { stripTsxExample } from "@pisagor/utils";
import checkbox_treeRaw from "./checkbox-tree.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_iconsRaw from "./custom-icons.tsx?raw";
import custom_icons_folderRaw from "./custom-icons-folder.tsx?raw";
import custom_icons_itemRaw from "./custom-icons-item.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import linksRaw from "./links.tsx?raw";
import multiple_selectionRaw from "./multiple-selection.tsx?raw";
import renameRaw from "./rename.tsx?raw";
import with_context_menuRaw from "./with-context-menu.tsx?raw";

export const imports = `import { TreeView } from "@pisagor/react/tree-view";`;

export const sources = {
  CheckboxTree: stripTsxExample(checkbox_treeRaw),
  Controlled: stripTsxExample(controlledRaw),
  CustomIcons: stripTsxExample(custom_iconsRaw),
  CustomIconsFolder: stripTsxExample(custom_icons_folderRaw),
  CustomIconsItem: stripTsxExample(custom_icons_itemRaw),
  Default: stripTsxExample(defaultRaw),
  Links: stripTsxExample(linksRaw),
  MultipleSelection: stripTsxExample(multiple_selectionRaw),
  Rename: stripTsxExample(renameRaw),
  WithContextMenu: stripTsxExample(with_context_menuRaw),
} as const;

export { CheckboxTree } from "./checkbox-tree";
export { Controlled } from "./controlled";
export { CustomIcons } from "./custom-icons";
export { CustomIconsFolder } from "./custom-icons-folder";
export { CustomIconsItem } from "./custom-icons-item";
export { Default } from "./default";
export { Links } from "./links";
export { MultipleSelection } from "./multiple-selection";
export { Rename } from "./rename";
export { WithContextMenu } from "./with-context-menu";
