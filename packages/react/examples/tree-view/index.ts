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

export const imports = `import { TreeView } from "@pisagor/react";`;

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

export * from "./checkbox-tree";
export * from "./controlled";
export * from "./custom-icons";
export * from "./custom-icons-folder";
export * from "./custom-icons-item";
export * from "./default";
export * from "./links";
export * from "./multiple-selection";
export * from "./rename";
export * from "./with-context-menu";
