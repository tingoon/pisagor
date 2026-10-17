import { CheckboxTreeSource as CheckboxTree } from "./checkbox-tree";
import { ControlledSource as Controlled } from "./controlled";
import { CustomIconsSource as CustomIcons } from "./custom-icons";
import { CustomIconsFolderSource as CustomIconsFolder } from "./custom-icons-folder";
import { CustomIconsItemSource as CustomIconsItem } from "./custom-icons-item";
import { DefaultSource as Default } from "./default";
import { LinksSource as Links } from "./links";
import { MultipleSelectionSource as MultipleSelection } from "./multiple-selection";
import { RenameSource as Rename } from "./rename";
import { WithContextMenuSource as WithContextMenu } from "./with-context-menu";

export const imports = `import { TreeView } from "@pisagor/solid";`;

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
  WithContextMenu,
} as const;
