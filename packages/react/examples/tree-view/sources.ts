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
  CheckboxTree: checkbox_treeRaw,
  Controlled: controlledRaw,
  CustomIcons: custom_iconsRaw,
  CustomIconsFolder: custom_icons_folderRaw,
  CustomIconsItem: custom_icons_itemRaw,
  Default: defaultRaw,
  Links: linksRaw,
  MultipleSelection: multiple_selectionRaw,
  Rename: renameRaw,
  WithContextMenu: with_context_menuRaw,
} as const;
