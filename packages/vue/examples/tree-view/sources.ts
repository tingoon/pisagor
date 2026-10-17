import CheckboxTree from "./checkbox-tree.ts?raw";
import Controlled from "./controlled.ts?raw";
import CustomIcons from "./custom-icons.ts?raw";
import CustomIconsFolder from "./custom-icons-folder.ts?raw";
import CustomIconsItem from "./custom-icons-item.ts?raw";
import Data from "./data.ts?raw";
import Default from "./default.ts?raw";
import Links from "./links.ts?raw";
import MultipleSelection from "./multiple-selection.ts?raw";
import Rename from "./rename.ts?raw";
import WithContextMenu from "./with-context-menu.ts?raw";

export const imports = `import { TreeView } from "@pisagor/vue";`;

export const sources = {
  CheckboxTree,
  Controlled,
  CustomIcons,
  CustomIconsFolder,
  CustomIconsItem,
  Data,
  Default,
  Links,
  MultipleSelection,
  Rename,
  WithContextMenu,
} as const;
