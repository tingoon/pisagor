import { stripSvelteExample } from "@pisagor/utils";
import checkbox_treeRaw from "./checkbox-tree.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_iconsRaw from "./custom-icons.svelte?raw";
import custom_icons_folderRaw from "./custom-icons-folder.svelte?raw";
import custom_icons_itemRaw from "./custom-icons-item.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import linksRaw from "./links.svelte?raw";
import multiple_selectionRaw from "./multiple-selection.svelte?raw";
import renameRaw from "./rename.svelte?raw";
import with_context_menuRaw from "./with-context-menu.svelte?raw";

export const imports = `import { TreeView } from "@pisagor/svelte";`;

export const sources = {
  CheckboxTree: stripSvelteExample(checkbox_treeRaw),
  Controlled: stripSvelteExample(controlledRaw),
  CustomIcons: stripSvelteExample(custom_iconsRaw),
  CustomIconsFolder: stripSvelteExample(custom_icons_folderRaw),
  CustomIconsItem: stripSvelteExample(custom_icons_itemRaw),
  Default: stripSvelteExample(defaultRaw),
  Links: stripSvelteExample(linksRaw),
  MultipleSelection: stripSvelteExample(multiple_selectionRaw),
  Rename: stripSvelteExample(renameRaw),
  WithContextMenu: stripSvelteExample(with_context_menuRaw),
} as const;

export { default as CheckboxTree } from "./checkbox-tree.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as CustomIcons } from "./custom-icons.svelte";
export { default as CustomIconsFolder } from "./custom-icons-folder.svelte";
export { default as CustomIconsItem } from "./custom-icons-item.svelte";
export { default as Default } from "./default.svelte";
export { default as Links } from "./links.svelte";
export { default as MultipleSelection } from "./multiple-selection.svelte";
export { default as Rename } from "./rename.svelte";
export { default as WithContextMenu } from "./with-context-menu.svelte";
