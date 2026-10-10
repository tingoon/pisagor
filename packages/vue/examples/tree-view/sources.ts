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

export const imports = `import { TreeView } from "@pisagor/vue";`;

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
